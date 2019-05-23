<template>
  <div class="container">
    <h1>Регистрация</h1>
    <div class="container pt-2">
      <div class="form-group">
        <label for="login">Логин</label>
        <input type="text" id="login" class="form-control" v-model="login">
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" class="form-control" v-model="password">
      </div>

      <button class="btn btn-success" @click="regUser">Зарегистрироваться</button>
      <h4 mt-3>{{ message }}</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        message: '',
        login: '',
        password: ''
      }
    },
    methods: {
      regUser () {
        axios.post('http://127.0.0.1:3000/reg', {
        login: this.login,
        password: this.password
        })
        .then(response => {
          console.log(response.data);
          this.message = response.data;
        })
        .catch(function (error) {
        console.log(error);
        });
      }
    }
  }
</script>

<style>

</style>
