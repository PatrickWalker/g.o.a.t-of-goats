<template>
  <div>
     <nav-bar></nav-bar>
     <div class="mainView">
     <img :src="imageSrc">
     </div>
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
