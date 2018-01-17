<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.mainView {
  text-align: center;
  margin-top: 30px;
}
.goat {
    max-width: 60%;
    height: 60%;
}
.vue-star-rating {
  display: block !important;
}
</style>
