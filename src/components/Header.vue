<template>
  <header>
    <div class="inner-container">
      <div class="site-branding">
        <p class="teamName">MANSpace</p>
      </div>
      <div class="site-nav">
        <nav>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/signup">SignUp</router-link>
            </li>
          </ul>
        </nav>
        <img id="icon" src="../assets/LogoUTimproved.png" alt="Logo">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background: var(--navc);
  z-index: 1;
}

.inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 60px;
}

.inner-container .site-nav img {
  align-self: center;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
}

.inner-container .site-nav {
  display: flex;
  height: 100%;
}

nav > ul {
  list-style: none;
}


.site-nav nav ul,
.site-nav nav ul li {
  height: 100%;
}

.site-nav nav ul li {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.8em;
  padding: 0 20px;
  transition: .5s;
}

.site-nav nav ul li a {
  text-decoration: none;
  color: #03e9f4;
  transition: .5;
}

.site-nav nav ul li:hover {
  background-color: var(--acc);
}

.site-nav nav ul li:hover a {
  color: white;
}

/*.site-nav nav ul li a.router-link-exact-active {*/
/*  color: inherit;*/
/*}*/

.site-nav nav ul li a:active{
  color: inherit;
}


.teamName {
  margin-right: auto;
  font-weight: 700;
  font-size: 2em;
  font-style: italic;
}

/* Breakpoint for header */
@media (max-width: 550px) {
  .inner-container .site-branding {
    display: none;
  }

  .inner-container .site-nav {
    width: 100%;
    justify-content: space-between;
  }

  .inner-container .site-nav ul li {
    padding: 0 10px;
  }
}

</style>
