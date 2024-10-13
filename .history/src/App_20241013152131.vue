<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/entrance">Entrance</router-link></li>
        <li><router-link to="/rooms">Rooms</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <!-- This is where the routed components will be displayed -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles */
nav ul {
  list-style-type: none;
  display: flex;
  gap: 15px;
  padding: 0;
}

nav li {
  display: inline;
}

nav a {
  text-decoration: none;
  color: blue;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
