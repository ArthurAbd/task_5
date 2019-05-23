<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">Список пользователей</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Войти</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/reg">Регистрация</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>
