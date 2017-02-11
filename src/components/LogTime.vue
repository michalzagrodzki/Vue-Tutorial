<template>
	<div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input type="date" v-model="timeEntry.date" class="form-control" placeholder="Date"/>
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input type="number" v-model="timeEntry.totalTime" class="form-control" placeholder="Hours"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input type="text" v-model="timeEntry.comment" class="form-control" placeholder="Comment"/>
      </div>
    </div>
    <button v-on:click="save()" class="btn btn-primary">Save</button>
    <router-link :to="{ name: 'timeentries' }">
      <button class="btn btn-danger">
        Cancel
      </button>
    </router-link> 
  </div>
</template>
<script>
  export default {
    data () {
      return {
        timeEntry: {
          user: {
            firstname: 'Bob',
            lastname: 'Coder',
            email: 'bobcoder@outlook.com',
            image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
          }
        }
      }
    },
    methods: {
      save () {
        let timeEntry = this.timeEntry
        this.$dispatch('timeUpdate', timeEntry)
        this.timeEntry = {}
      }
    }
  }
</script>