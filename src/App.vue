<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>
