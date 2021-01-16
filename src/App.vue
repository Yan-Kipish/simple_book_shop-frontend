<template>
  <div id="app">
    <v-main />
  </div>
</template>

<script>
import VMain from './components/v-main';

export default {
  name: 'App',
  components: {VMain},
};
</script>

<style>
#app {
  margin-top: 60px
}
</style>
