import {createStore} from 'vuex'

export default createStore({
    state: {
        posts:
            [
                {
                    "id": 1,
                    "date": "05.10.2022",
                    "author": "Avg Dude",
                    "picture": "bestEditor.png",
                    "postMsg": "VSCode is awesome, like, really awesome!!!",
                    "likes": 0
                },
                {
                    "id": 2,
                    "date": "05.10.2022",
                    "author": "Artur Ka",
                    "postMsg": "Yobro how come you like VSCode, haven't you checked out Intellij IDEA???",
                    "likes": 0
                },
                {
                    "id": 3,
                    "date": "05.10.2022",
                    "author": "hAlloP",
                    "picture": "whyItStillExists.png",
                    "postMsg": "Haha, good joke, Artur! Everyone knows Intellij is lame and real programmers use the editor of all times - nano💪💪💪",
                    "likes": 0
                },
                {
                    "id": 4,
                    "date": "06.10.2022",
                    "author": "Someone Miserable",
                    "picture": "",
                    "postMsg": "Umm, I thought MS Word is the best IDE, you can highlight every character you want",
                    "likes": 0
                },
                {
                    "id": 5,
                    "date": "06.10.2022",
                    "author": "Avg Dude",
                    "picture": "goodTime.png",
                    "postMsg": "Having a time of my life at Tartu Tudengipäevad!!!",
                    "likes": 0
                },
                {
                    "id": 6,
                    "date": "06.10.2022",
                    "author": "Mykyta Voievudskyi",
                    "picture": "computerScience.png",
                    "postMsg": "I prefer chillin' at home",
                    "likes": 0
                },
                {
                    "id": 7,
                    "date": "06.10.2022",
                    "author": "Nikita Kislõi",
                    "postMsg": "I like this way of chillin'!",
                    "likes": 0
                },
                {
                    "id": 8,
                    "date": "06.10.2022",
                    "author": "G horseman",
                    "postMsg": "No chillin', guys! I announce the party of all parties G-Apocalypyse!",
                    "likes": 0
                },
                {
                    "id": 9,
                    "date": "06.10.2022",
                    "author": "Andrew",
                    "postMsg": "Finally we will have some fun! Yet I do not remember what happened at the last party😕",
                    "likes": 0
                },
                {
                    "id": 10,
                    "date": "06.10.2022",
                    "author": "Aleksander O",
                    "picture": "meme.png",
                    "postMsg": "What kind of party are you, folks, talking about??? We have a WAD homework due tomorrow😨😨",
                    "likes": 0
                },
                {
                    "id": 11,
                    "date": "18.10.2022",
                    "author": "SCVRO",
                    "picture": "cinnamon.jpg",
                    "postMsg": "Cinnamon bun is like the old book. You give it to someone, they torn it apart",
                    "likes": 0
                },
                {
                    "id": 12,
                    "date": "19.10.2022",
                    "author": "Ar4ik",
                    "postMsg": "Guys, check this out! Best explanation on how to get GPA 5.0 ever!",
                    "picture": "explanation.png",
                    "likes": 0
                },
                {
                    "id": 13,
                    "date": "20.10.2022",
                    "author": "some freshman",
                    "postMsg": "I cannot bear it anymore math is so damn hard😭😭😭😭",
                    "picture": "meth.png",
                    "likes": 0
                },
                {
                    "id": 14,
                    "date": "23.10.2022",
                    "author": "SCVRO",
                    "postMsg": "Remember, you can only spill onto one cavity",
                    "likes": 0
                },
                {
                    "id": 15,
                    "date": "26.10.2022",
                    "author": "Admin",
                    "postMsg": "Running local jokes are everywhere",
                    "likes": 0
                }
            ]
    },
    getters: {
        posts: state => {
            return state.posts;
        },
    },
    mutations: {
        resetLikes: state => {
            state.posts.forEach(post => {
                post.likes = 0;
            })
        }
    },
    actions: {
        resetLikesAct: act => {
            setTimeout(function () {
                act.commit("resetLikes")
            }, 500)
        }
    }
})
