<template>
  <div id="app">
    <h1>Cities <span class="diff-color">List</span></h1>
    <list :list="getCities"/>
  </div>
</template>

<script>
import List from './components/List.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    'list': List,
  },
  computed: {
    ...mapGetters([
      'getCities'
    ]),
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Raleway&display=swap');
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
h1 {
  color: #2A363B;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
}
.diff-color {
  color: #E84A5F;
}
</style>