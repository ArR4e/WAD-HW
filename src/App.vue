<template>
  <Header></Header>
  <main>
    <router-view class="view"/>
  </main>
  <Footer></Footer>
</template>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  margin: 0;
  box-sizing: border-box;
  color: #fff;
  /*margin: 0;*/
  /*padding: 0;*/
  /*--bgc: linear-gradient(#141e30, #243b55);*/
  /*--navc: #0a0f18;*/
  /*--acc: #03e9f4;*/
  /*--fooc: #545454;*/
  width: 100%;
  color: #2c3e50;
  padding-top: 100px;
}


Header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background: var(--navc);
}
Footer {
  background: var(--navc);
}
</style>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Header, Footer}
}
</script>
