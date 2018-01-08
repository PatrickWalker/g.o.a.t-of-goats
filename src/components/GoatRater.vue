<template>

  <div>
    <nav-bar></nav-bar>
    <div>
        // Title
        
        // Image to rate
        
        //Metadata about the Image 
        
        //Star Rating to give
        <star-rating inactive-color="#000" 
             active-color="#f00" 
             v-bind:star-size="90" @rating-selected ="setRating" ></star-rating>
        //Current Star Rating Potentially
    </div>
  </div>

</template>

<script>
import { storage, db } from '../firebase-init'
import StarRating from 'vue-star-rating'
export default {
  name: 'GoatRater',
  data () {
    return {
      rating: 0
    }
  },
  created: function () {
    let dbgoat = db.ref('goats')
    console.log(dbgoat)
    let sref = storage.ref('goats/Auth.png')
    console.log(sref)
  },
  components: {
    StarRating
  },
  methods: {
    setRating: function (rating) {
      this.rating = rating
    }
  }
}
</script>
