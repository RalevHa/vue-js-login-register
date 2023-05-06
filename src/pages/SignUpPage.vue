<template>
  <div class="container">
    <h1>Register Page</h1>
    <form @submit.prevent="register">
    <div class="form-group">
      <label for="InputUsername">Username</label>
      <input v-model="username" type="username" class="form-control" id="InputUsername" aria-describedby="Username"
        placeholder="Enter Username">
    </div>
    <div class="form-group">
      <label for="InputPassword">Password</label>
      <input v-model="password" type="password" class="form-control" id="InputPassword" placeholder="Password">
    </div>

    <button type="submit" class="btn btn-success float-right">Sign Up</button>
  </form></div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:3000/api/register', {
          username: this.username,
          password: this.password
        })
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('username', response.data.username)
        this.$router.push('/')
      } catch (error) {
        console.log(error.response.data.error)
      }
    }
  }
}
</script>
