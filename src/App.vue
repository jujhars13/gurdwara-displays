<!-- src/App.vue -->
<template>
  <div id="app">
    <header class="container">
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/entrance">Entrance</RouterLink></li>
          <li><RouterLink to="/rooms">Rooms</RouterLink></li>
        </ul>
      </nav>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
    <footer class="container">
      <small>&copy; 2024 My Vue App</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* You can add global styles here if needed */
</style>
