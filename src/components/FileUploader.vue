<template>

  <div>
    <div>
      <label for="ImageTitle">Title : </label>
      <input v-model="Title" id="ImageTitle" placeholder="Please give it a title">
    </div>
    <div>  
    <input type="file" id="goatFile" :disabled="uploadDisabled" accept="image/*" @change="stageFiles($event.target.files)">
    </div>
    <div>
    <button v-on:click="uploadYoGoat()">Push the Goat Out</button>
    </div>
    <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div>
  </div>

</template>

<script>
import { storage } from '../firebase'

export default {
  name: 'FileUploader',
  data () {
    return {
      progressUpload: 0,
      file: File,
      uploadTask: '',
      downloadURL: '',
      stagedFiles: [],
      uploadDisabled: false,
      Title: ''
    }
  },
  methods: {
    uploadYoGoat () {
      console.log('Thanks for Trying mate. I appreciate yall : ')
      // Check if Title is empty string if so reject

      // Upload the file

      // Save the image title and URL in the DB

      // This will eventually also include the Uploader name etc as well
    },

    stageFiles (fileList) {
      Array.from(Array(fileList.length).keys()).map(x => {
        // this.upload()
        //at the minute they could stage a number of files. I think we should disable the form
        this.stagedFiles.push(fileList[x])
        this.$ref.goatFile.enab
      })
    },
    upload (file) {
      this.uploadTask = storage.ref('goats/' + file.name).put(file)
      this.uploadTask.then(snapshot => {
        this.downloadURL = this.uploadTask.snapshot.downloadURL
        // need to work this emit bit out as this is useful info to have
        this.$emit('url', this.downloadURL)
      })
    }
  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      })
    }
  }
}
</script>

<style>
.progress-bar {
  margin: 10px 0;
}
</style>
