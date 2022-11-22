<template>
  <div :class="post.picture ? 'post' : 'post postNoImg'">
    <div v-if="post.picture" class="postImg" :style="`background-image: url(pictures/${post.picture});`"></div>
    <h1 class="postMsg" :class="post.postMsg.length > 90 ? 'long-post' : ''">{{ post.postMsg }}</h1>
    <div class="author">
      <p>by {{ post.author }}</p>
    </div>
    <h5 class="day">{{ String(day).padStart(2, '0') }}</h5>
    <h6 class="mon-year">{{ monthYear }}</h6>
    <div class="like">
      <p class="like-btn" @click="incrementLike()">{{ post.likes ? '❤️' : '🤍' }}</p>
      <p class="like-count">{{ post.likes }}</p>
    </div>
  </div>
</template>
//
Haha, good joke, Artur! Everyone knows Intellij is lame and real programmers use the editor of all times - nano💪💪💪
What kind of party are you, folks, talking about??? We have a WAD homework due tomorrow😨😨
<script>

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
}
export default {
  name: "Post",
  props: {
    postId: Number
  },
  computed: {
    post() {
      return this.$store.getters.postById(this.postId);
    },
    day() {
      return this.post?.date?.split(".")[0]
    },
    monthYear() {
      let [_, month, year] = this.post.date.split(".");
      return `${monthNames[month]}  ${year}`
    }
  },
  methods: {
    incrementLike() {
      this.$store.dispatch("incrementLike", this.postId)
    }
  }

}
</script>


<style scoped>
* {
  --postc: var(--navc); /*gen*/
  --posttxt: #fff;
  --postSec: #fff;
}


.post {
  display: grid;
  /* Refactor */
  grid-template-areas:
        "z a a a a a f f y"
        "z a a a a a f f y"
        "z a a a a a b b y"
        "z g g g g g g p y"
        "z u u u u r r d y";
  grid-template-rows: repeat(5, 5vw);
  grid-template-columns: 1px repeat(7, 1fr) 1px;
  grid-gap: 1vw;
  background-color: var(--postc);
  margin-top: calc(120px + 7vw);
  box-shadow: 7px 7px 50px 0px rgba(0, 0, 0, .7);
  font-size: 0.9vw;
}

.postNoImg {
  grid-template-areas:
        "z d d d d d f f y"
        "z g g g g g f f y"
        "z g g g g g b b y"
        "z u u u _ r r p y";
  grid-template-rows: repeat(4, 5.25vw);
  grid-template-columns: 1px repeat(7, 1fr) 1px;
  grid-gap: 1vw;
}

.postNoImg .postMsg {
  grid-area: g;
}


.postImg {
  transform: translateY(-6vw);
  grid-row-start: a;
  grid-column-start: a;
  grid-row-end: g;
  grid-column-end: a;
  background-size: 100% 100%;
}


.postMsg {
  grid-row-start: g;
  grid-column-start: g;
  grid-row-end: u;
  grid-column-end: u;
  margin-left: 5px;
  font-weight: 500;
  font-size: 2em;
  color: var(--posttxt);
}

.day {
  grid-area: f;
  font-size: 10em;
  font-weight: 700;
  color: var(--postSec);
  text-align: center;
  position: relative;
  top: 30%;
}

.mon-year {
  grid-area: b;
  color: var(--postSec);
  font-size: 2.5em;
  font-weight: 500;
  text-align: center;
}

.author {
  grid-area: r;
  display: flex;
  align-items: center;
  font-size: 1.1em;
  justify-content: center;
  position: relative;
  margin-top: 10%;
  margin-left: 10%;
  margin: 10%;
  background-color: var(--postSec);
  border-radius: 0px;
  border-top: 2px solid var(--acc);
  border-bottom: 2px solid var(--acc);
  background: transparent;
}

.author p {
  color: var(--posttxt);
}

.like {
  margin-top: 1vw;
  grid-area: p;
  display: flex;
  align-items: baseline;
}

.like-btn {
  font-size: 1.9em;
  cursor: pointer;
}

.like-count {
  font-size: 1.9em;
  text-align: left;
  color: #c4bfbf;
}

.post:last-of-type {
  margin-bottom: 60px;
}

/* Breakpoint for post */
@media (max-width: 992px) {

  .post {
    grid-template-rows: repeat(5, 9vw);
    /*grid-template-columns: 1px repeat(7, 1fr) 1px;*/
    font-size: 1.5vw;
  }

  .postNoImg {
    grid-template-rows: repeat(4, 13.5vw);
    /*grid-template-columns: 1px repeat(7, 1fr) 1px;*/

  }

  .postImg {
    transform: translateY(-10vw);
  }

  .postMsg {
    font-size: 2.5em;
  }

  .like-btn {
    font-size: 3.5em;
  }

  .like-count {
    font-size: 3.5em;
  }

  .postNoImg .day {
    top: 53%;
  }

  .author {
    font-size: 1.2em;
  }

  .long-post {
    font-size: 2em;
  }


}
</style>
