<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="center col-12">Главная страница</h1>
      <p class="text center col-12">Добро пожаловать на сайт.
      На страницах сайта есть форма для регистрации, входа, 
      и отображения всех пользователей и веселый плеер</p>
      <div id="ytplayer" class=""></div>
        <div class="img">
        <img src="../assets/NXj8rPfnvw8.jpg" alt="Bright Lynx Team">
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted: function() {
      console.log('Mounted');
      onYouTubePlayerAPIReady()
    }
  }
</script>

<style scoped>
.center {
  text-align: center;
}
.img {
  margin: 25px 0;
}
.text {
  font-size: 26px;
  margin: 25px 0;
}
</style>
