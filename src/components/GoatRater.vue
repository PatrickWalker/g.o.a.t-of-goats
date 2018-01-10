<template>

  <div>
    <nav-bar></nav-bar>
    <div>
        <h2>{{ title }}</h2>
        <img :src="imageSrc">
        <star-rating inactive-color="#000" 
             active-color="#f00" 
             v-bind:star-size="60" @rating-selected ="setRating" ></star-rating>
    </div>
  </div>

</template>

<script>
import { auth, storage, db } from '../firebase-init'
import StarRating from 'vue-star-rating'
export default {
  name: 'GoatRater',
  data () {
    return {
      imageID: '',
      imageSrc: '',
      avgRating: 0,
      title: ''
    }
  },
  created: function () {
    var that = this
    db.ref('goats').orderByChild('id').once('value').then((snapshot) => {
      // Rather than a ForEach lets just get the length and then random number the index?
      var goatCount = snapshot.numChildren()
      console.log(snapshot.numChildren())
      var randomGoat = Math.floor(Math.random() * goatCount)
      var index = 0
      snapshot.forEach(function (childSnapshot) {
        if (index === randomGoat) {
          that.$data.imageID = childSnapshot.key
          that.$data.title = childSnapshot.val().Title
        }
        index++
      })
      let sref = storage.ref('goats/' + that.$data.imageID)
      sref.getDownloadURL().then(function (url) {
        that.$data.imageSrc = url
      })
    })
  },
  components: {
    StarRating
  },
  methods: {
    setRating: function (rating) {
      db.ref('goats/' + this.$data.imageID + '/ratings').push({
        score: rating,
        rater: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      })
    }
  }
}
</script>
