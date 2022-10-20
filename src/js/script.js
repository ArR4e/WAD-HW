const monthNames = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
};
let id = 0;
window.onload = function () {
    let loc = 'https://api.npoint.io/4b5b3e741dc8ddfe03d8';
    // loc = 'https://jsonplaceholder.typicode.com/posts'
    fetch(loc)
        .then(response => response.json())
        .then(json => {
            let posts = document.getElementById("posts");
            json.forEach(
                postObject => {
                    let post = document.createElement("div");
                    post.className = "post";

                    if (postObject.picture) {
                        let picture = document.createElement("div");
                        //TODO add pic
                        picture.style = `background-image: url('${postObject.picture}')`;
                        picture.className = "postImg";
                        post.append(picture);
                    } else {
                        post.classList.add("postNoImg");
                    }

                    let postMessage = document.createElement('h1');
                    postMessage.className = "postMsg";
                    postMessage.innerText = postObject.postMsg;
                    post.append(postMessage);

                    let author = document.createElement('div');
                    author.className = "author";
                    let p = document.createElement('p');
                    p.innerText = `by ${postObject.author}`;
                    author.append(p);
                    post.append(author);

                    let [dd, mm, yy] = postObject.date.split('.');
                    let day = document.createElement('h5');
                    day.className = "day";
                    day.innerText = dd;
                    post.append(day);

                    let monyear = document.createElement('h6');
                    monyear.className = "mon-year"
                    monyear.innerText = `${monthNames[mm]} ${yy}`;
                    post.append(monyear);

                    let likeId = `activator${id++}`;
                    let checkbox = document.createElement('input');
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.id = likeId;
                    checkbox.className = "activator";
                    post.append(checkbox);


                    let likeActive = document.createElement('p');
                    likeActive.className = "like active-like"
                    likeActive.innerText = "❤️";
                    post.append(likeActive);

                    let likeInactive = document.createElement('p');
                    likeInactive.className = "like inactive-like";
                    likeInactive.innerText = "🤍";
                    post.append(likeInactive);

                    let label = document.createElement('label');
                    label.setAttribute("for", likeId);
                    label.className = "like";
                    label.innerText = "🤍";
                    post.append(label);

                    posts.append(post);
                })
        });
}
// <div class="post">
//             <div id="cs" class="postImg"></div>
//             <h1 class="postMsg">I prefer chillin' at home</h1>
//             <div class="author">
//                 <p>by Mykyta Voievudskyi</p>
//             </div>
//             <h5 class="day">02</h5>
//             <h6 class="mon-year">Oct 2022</h6>
//             <!-- Checkbox hack -->
//             <input type="checkbox" id="activator4" class="activator">
//             <p class="like active-like">❤️️</p>
//             <p class="like inactive-like">🤍</p>
//             <label for="activator4" class="like">🤍</label>

//         <div class="post postNoImg">
//             <h1 class="postMsg">I like this way of chillin'!</h1>
//             <div class="author">
//                 <p>by Nikita Kislõi</p>
//             </div>
//             <h5 class="day">02</h5>
//             <h6 class="mon-year">Oct 2022</h6>
//             <!-- Checkbox hack -->
//             <input type="checkbox" id="activator5" class="activator">
//             <p class="like active-like">❤️️</p>
//             <p class="like inactive-like">🤍</p>
//             <label for="activator5" class="like">🤍</label>
//         </div>