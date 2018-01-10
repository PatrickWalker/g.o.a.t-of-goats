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
      imageID: '',
      rating: 0
    }
  },
  created: function () {
    var targetImg = ''
    db.ref('goats').orderByChild('id').once('value').then((snapshot) => {
      // Rather than a ForEach lets just get the length and then random number the index?
      var goatCount = snapshot.numChildren()
      console.log(snapshot.numChildren())
      var randomGoat = Math.floor(Math.random() * goatCount)
      var index = 0
      snapshot.forEach(function (childSnapshot) {
        if (index === randomGoat) {
          targetImg = childSnapshot.val().id
        }
        console.log('checking this')
        console.log(this)
        console.log(targetImg)
        index++
      })
    })
    console.log(targetImg)
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
