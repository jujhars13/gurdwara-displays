<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/rooms">Rooms</router-link>
      <router-link to="/entrance">Entrance</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles */
nav {
  display: flex;
  gap: 10px;
}
</style>
