<template>

  <div>
    <nav-bar></nav-bar>
    <div class="mainView">
     <v-container fluid class="text-xs-center">
        <h2>{{ title }}</h2>
        <img class="goat" :src="imageSrc">
        <star-rating style="display:block" inactive-color="#000" 
             active-color="#f00" 
             v-bind:star-size="60" :read-only="rated" :rating="initRating" @rating-selected ="setRating"  />
        <v-card flat>
          <v-card-text>
              <div>
                <v-btn round color="blue" large v-on:click="showGoat">Get Mor Goats</v-btn>
              </div>
          </v-card-text>
        </v-card>  
    </v-container>
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
      initRating: 0,
      rated: false,
      title: ''
    }
  },
  created: function () {
    this.showGoat()
  },
  components: {
    StarRating
  },
  methods: {
    setRating: function (rating) {
      db.ref('goats/' + this.$data.imageID + '/ratings/' + auth.currentUser.uid).set({
        score: rating,
        rater: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid
        }
      })
    },
    showGoat: function () {
      var that = this
      this.$data.rated = false
      this.$data.initRating = 0
      db.ref('goats').orderByChild('id').once('value').then((snapshot) => {
        // Rather than a ForEach lets just get the length and then random number the index?
        var goatCount = snapshot.numChildren()
        var randomGoat = Math.floor(Math.random() * goatCount)
        var index = 0
        snapshot.forEach(function (childSnapshot) {
          if (index === randomGoat) {
            that.$data.imageID = childSnapshot.key
            that.$data.title = childSnapshot.val().Title
            if (childSnapshot.val().ratings !== undefined) {
              if (childSnapshot.val().ratings[auth.currentUser.uid] !== undefined) {
                that.$data.initRating = childSnapshot.val().ratings[auth.currentUser.uid].score
                // deactivate it
                that.$data.rated = true
              }
            }
          }
          index++
        })
        let sref = storage.ref('goats/' + that.$data.imageID)
        sref.getDownloadURL().then(function (url) {
          that.$data.imageSrc = url
        })
      })
    }
  }
}
</script>


