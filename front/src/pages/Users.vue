<template>
  <div class="container">
    <h1>Список пользователей</h1>
    <button class="btn btn-primary" @click="createList">Получить список пользователей</button>
    <ul class="list-group mt-3">
      <li
        class="list-group-item"
        v-for="user of users"> <strong>{{ user.login }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        users: []
      }
    },
    methods: {
      createList () {
        axios.get('http://127.0.0.1:3000/users')
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
      }
    }
  }
</script>

<style>

</style>
