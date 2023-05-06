<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/login" >Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Register</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>