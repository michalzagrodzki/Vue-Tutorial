<template>
  <div>
    <template v-if="$route.path !== '/log-time'">
      <router-link :to="{ name: 'logtime' }">
        <button 
                class="btn btn-primary">
            Log Time
        </button>
      </router-link>
    </template>
    <template v-else-if="$route.path === '/log-time'">
      <h3>Log Time</h3>
    </template>
    <hr />

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!timeEntries.length">
        <strong>No time entries yet</strong>
      </p>
      <div class="list-group">
        <a v-for="timeEntry in timeEntries" class="list-group-item">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ timeEntry.user.firstName }}
                  {{ timeEntry.user.lastName }}
                </strong>
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ timeEntry.totalTime }} hours
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ timeEntry.date }}
              </p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>
                {{ timeEntry.comment }}
              </p>
            </div>
            <div class="col-sm-1">
              <button 
              v-on:click="deleteTimeEntry(timeEntry)" class="btn btn-xs btn-danger delete-button" 
              >
                x
              </button>
            </div>

          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Time-Entries',
    data () {
      let existingEntry = {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'
        },
        comment: 'comment one',
        totalTime: 15,
        date: '2016-04-08'
      }
      return {
        timeEntries: [existingEntry],
        totalTime: 1.5
      }
    },
    created () {
      this.$bus.on('save', this.timeUpdate)
    },
    beforeDestroy () {
      this.$bus.off('save', this.timeUpdate)
    },
    methods: {
      deleteTimeEntry (timeEntry) {
        let index = this.timeEntries.indexOf(timeEntry)
        if (window.confirm('Are you sure you want to delete this time entry?')) {
          this.timeEntries.splice(index, 1)
          this.$bus.emit('deleteTime', timeEntry)
        }
      },
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        this.$bus.emit('timeUpdate', timeEntry)
        return true
      }
    },
    events: { }
  }

</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
