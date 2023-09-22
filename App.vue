<template>
  <div id="app">
    <nav class="linkdiv">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/projects">My Projects</router-link>
      <router-link class="link" to="/about">About</router-link>
      <!-- <router-link class="link" to="/checkout">Checkout</router-link> -->
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
