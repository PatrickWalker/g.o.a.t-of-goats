<template>
  <div>
     <nav-bar></nav-bar>
     <img :src="imageSrc">
  </div>

</template>

<script>
import kids from '../assets/kids.jpeg'
export default {
  name: 'Home',
  data () {
    return {
      imageSrc: kids
    }
  }
}
</script>
