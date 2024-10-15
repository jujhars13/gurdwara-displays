
<!-- src/components/Entrance.vue -->
<template>
  <article>
    <h1>Entrance</h1>
    <p>Welcome to the Entrance page.</p>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Room</th>
          <th>Event Type</th>
          <th>Title</th>
          <th>Subtitle</th>
          <th>Time</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.roomName }}</td>
          <td>{{ item.eventType }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.subtitle }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
import {getJsonContent} from '../data/getJsonContent.js';

export default {
  name: 'EntrancePage',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.loading = true;
    getJsonContent()
      .then((data) => {
        this.items = data;
      })
      .catch((error) => {
        console.error('Error fetching JSON content:', error);
      })
      .finally(() => {
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error fetching JSON content:', error);
      });
  },
};
</script>

<style scoped>
/* Add your styles here */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
  text-align: left;
}
</style>
