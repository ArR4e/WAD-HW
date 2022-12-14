<template>
  <div class="about">
    <div class="inner-container">
      <h1>This is an about page</h1>
      <img id="icon" src="../assets/LogoUTimproved.png" alt="Logo">
    </div>
  </div>

</template>

<script>
export default {
  name: "ContactUs",
}
</script>
<style scoped>
.about {
  display: grid;
  place-items: center;
  height: 100vh;
}

.about .inner-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:25px;
}

#icon {
  border-radius: 50%;
  max-width: 250px;
  margin-right: 10px;
}
</style>