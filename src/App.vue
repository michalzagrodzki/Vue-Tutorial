<template>

  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'timeentries' }">Time Entries</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container">

      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>

      <div class="col-sm-9">
        <router-view></router-view>
      </div>

    </div>

  </div>

</template>

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    name: 'Vue-Time-Tracker',
    components: { 'sidebar': Sidebar },
    data () {
      return {
        totalTime: 15
      }
    },
    created () {
      this.$bus.on('deleteTime', this.deleteTime)
      this.$bus.on('timeUpdate', this.timeUpdate)
    },
    beforeDestroy () {
      this.$bus.off('deleteTime', this.deleteTime)
      this.$bus.off('timeUpdate', this.timeUpdate)
    },
    methods: {
      timeUpdate (timeEntry) {
        console.log('timeUpdate from App')
        console.log(timeEntry)
        console.log(this.totalTime)
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }
</script>

<style>

</style>
