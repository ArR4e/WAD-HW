const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT ?? 3000;
const app = express();

//Middleware functions:

//Otherwise we cannnot send requests to this endpoint from port 8080
app.use(cors({origin: 'http://localhost:8080', credentials: true}));
app.use(express.json());
app.use(cookieParser());

const secret = "gi291fyfmk897asd93dsaspsvs";
const maxAge = 60 * 60;

const generateJWT = (id) => {
    return jwt.sign({id}, secret, {expiresIn: maxAge})
}

app.listen(port, () => {
    console.log("Server is listening to the port " + port)
});

//Requests associated with authentication

app.get('/auth/authenticate', async (req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt;
    let authenticated = false;
    try {
        if (token) {
            await jwt.verify(token, secret, (err) => {
                if (err) {
                    console.log(err.message);
                    console.log('Token is not verified');
                    res.send({"authenticated": authenticated});
                } else {
                    console.log('User is authenticated');
                    authenticated = true;
                    res.send({"authenticated": authenticated});
                }
            })
        } else {
            console.log('User is not authenticated');
            res.send({"authenticated": authenticated});
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});


app.post('/auth/signup', async (req, res) => {
    try {
        console.log("a signup request has arrived");
        const {email, password} = req.body;
        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(password, salt)
        console.log(email);
        const authUser = await pool.query(
            "INSERT INTO users(email, password) values ($1, $2) RETURNING*",
            [
                email.toLowerCase(),
                bcryptPassword
            ]
        );
        console.log(authUser.rows[0].id);
        const token = await generateJWT(authUser.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, {maxAge: 6000000, httpOnly: true})
            .json({user_id: authUser.rows[0].id})
            .send();
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/auth/login', async (req, res) => {
    try {
        console.log("a login request has arrived");
        const {email, password} = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email.toLowerCase()]);

        if (user.rows.length === 0)
            return res.status(401).json({error: "User is not registered"});


        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword)
            return res.status(401).json({error: "Incorrect password"});

        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, {maxAge: 6000000, httpOnly: true})
            .json({user_id: user.rows[0].id})
            .send();
    } catch (error) {
        res.status(401).json({error: error.message});
    }
});


app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({"Msg": "cookie cleared"}).send()
});

//Requests associated with data
//Requests for all posts
app.get('/data/posts', async (req, res) => {
    console.log('GET request for all posts has arrived');
    try {
        const posts = await pool.query("SELECT * FROM posts");
        res.json(posts.rows)
    } catch (error) {
        res.status(401).json({error: error.message});
    }
})

app.delete('/data/posts', async (req, res) => {
    console.log('DELETE request for all posts has arrived');
    try {
        await pool.query("DELETE FROM posts")
        res.status(200).send();
    } catch (error) {
        res.status(401).json({error: error.message});
    }
})

app.post('/data/posts', async (req, res) => {
    console.log('POST request to add a post has arrived');
    try {
        const post = req.body
        const date = Date.now()
        console.log(date)
        let date_ob = new Date(date);
        const day = ("0" + date_ob.getDate()).slice(-2);
        const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        const year = date_ob.getFullYear();
        const newpost = await pool.query(
            "INSERT INTO posts(body, date_created) VALUES ($1, $2) RETURNING*",
            [
                post.body,
                year+"-"+month+"-"+day
            ]
        );
        console.log(newpost.rows[0])
        res.json(newpost.rows[0]);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
})

//Requests for a specific post
app.get('/data/posts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        console.log(`GET request for a post with id ${id} has arrived`);
        const post = await pool.query(
            "SELECT * FROM posts WHERE posts.id=$1", [id]
        )
        res.json(post.rows[0])
    } catch (error) {
        res.status(404).json({error: error.message});
    }
})
app.put('/data/posts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {body} = req.body;
        console.log(body);
        const post = await pool.query(
            "UPDATE posts SET body = $1 WHERE posts.id=$2 RETURNING*", [body, id]
        )
        res.json(post)
        console.log(`PUT request for a post with id ${id} has arrived`);

    } catch (error) {
        res.status(401).json({error: error.message});
    }
})

app.delete('/data/posts/:id', async (req, res) => {
    try {
        const {id} = req.params;
        console.log(`DELETE request for a post with id ${id} has arrived`);
        const deletedPost = await pool.query(
            "DELETE FROM posts WHERE id = $1 RETURNING*", [id]
        );
        res.json(deletedPost);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
})


