<template>
  <footer>
    <div class="inner-container">
      <div class="col col-6">
        <img id="icon" src="../assets/LogoUTimproved.png" alt="Logo">
        <p class="teamName">MANSpace</p>
      </div>
      <div class="col col-6">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/signup">SignUp</router-link>
          </li>
        </ul>
      </div>
      <div class="col col-12">
        ©{{ new Date().getFullYear() }}<span>&nbsp;All rights reserved</span>
      </div>


    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer .inner-container{
  max-width: 1240px;
  margin: auto;
  display: grid;
  padding: 20px 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 1fr;
  gap: 30px;
}
footer .inner-container .col-6{
  grid-row: 1;
}
footer .inner-container .col-12{
  grid-column: 1 / -1;
}

footer .inner-container .col{
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .inner-container ul{
  list-style: none;
  font-size: 1em;
}

footer .inner-container li a{
  text-decoration: none;
}

footer .teamName {
  font-weight: 700;
  font-size: 2em;
  font-style: italic;
}

footer #icon{
  border-radius: 50%;
  max-width: 50px;
  margin-right: 10px;
}

</style>
