<template>
  <div class="post postNoImg">
    <h1 class="postMsg" :class="post.body.length > 90 ? 'long-post' : ''">{{ post.body }}</h1>
    <h5 class="day">{{ String(day).padStart(2, '0') }}</h5>
    <h6 class="mon-year">{{ monthYear }}</h6>
    <!--    <a :href="'/apost/' + post.id">Open</a>-->
  </div>
</template>

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
    post: Object
  },
  computed: {
    day() {
      return this.post?.date_created?.split("-")[2].split("T")[0];
    },
    monthYear() {
      let [year, month, _] = this.post.date_created.split("-");
      return `${monthNames[month]}  ${year}`
    }
  },
  methods: {}

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
  /*margin-top: calc(120px + 7vw);*/
  margin-bottom: 150px;
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

.author p {
  color: var(--posttxt);
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

  .postMsg {
    font-size: 2.5em;
  }


  .postNoImg .day {
    top: 53%;
  }


}
</style>
