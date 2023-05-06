<template>
  <div class="container">
    <h1>Hello {{ username }}!</h1>
    <br>
    <h3>This is a Page That need Authen before you can see it.</h3>
    <br>
    <button @click="handleLogout" type="submit" class="btn btn-danger ">Log Out</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: localStorage.getItem('username'),
      isLoggedIn: false
    }
  },
  created() {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      this.isLoggedIn = true
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      localStorage.clear();
      this.isLoggedIn = false
      this.$router.push('/login')
    }
  }
}
</script>

