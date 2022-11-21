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
//Idea for future release
// const processName = name => {
//     if (name.length < 19) {
//         return name;
//     }
//     let [firstName, surname] = name.split(" ");
//
// }
let id = 0;
window.onload = function () {
    // Online end-point, end-point for editing: https://www.npoint.io/docs/4b5b3e741dc8ddfe03d8
    let endpoint = 'https://api.npoint.io/4b5b3e741dc8ddfe03d8';
    // json from local storage, comment-out to check out, online end-point
    endpoint = 'res/json/posts.json';
    fetch(endpoint)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(json => {
            let posts = document.getElementById("posts");
            json.forEach(
                postObject => {
                    let post = document.createElement("div");
                    post.className = "post";

                    if (postObject.picture) {
                        let picture = document.createElement("div");
                        //TODO add pic
                        picture.style = `background-image: url('${postObject.picture}');`;
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
        }).catch(error => {
        let posts = document.getElementById("posts");
        let post = document.createElement("div");
        post.style = "place-items: center;";
        post.className = "post";
        let errorMessage = document.createElement('h1');
        errorMessage.className = "postMsg";
        //TODO: fix the footer
        // a/a/u/d from row a, column a to row u, column d
        errorMessage.style = "grid-area: a / a / u / d;";
        // 'Occured error while loading data:' and error message together
        errorMessage.innerText = `An error occurred while loading data:\n\n${error}`;
        post.append(errorMessage);
        posts.append(post);
    })
}
image = document.getElementById("icon");
dropdown = document.getElementById("dropdown");
image.addEventListener('click', () => {
    dropdown.classList.toggle("closed");
})
