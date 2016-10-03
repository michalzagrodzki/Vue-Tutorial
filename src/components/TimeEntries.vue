<template>
  <div>
    <button
    v-if="$route.path !== '/time-entries/log-time'"
    router-link="'/time-entries/log-time'"
    class="btn btn-primary"
    >
      Log Time
    </button>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>Log Time</h3>
    </div>

    <hr />

    <router-view></router-view>

    <div>
      <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>
      <div class="list-group">

        <a v-for="timeEntry in timeEntries" class="list-group-item">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img src="timeEntry.user.image" class="avatar img-circle img-responsive"/>
              <p>
                <strong>
                  {{ timeEntry.user.firstName }}
                  {{ timeEntry.user.lastName }}
                </strong>
              </p>
            </div>

            <div>
              <h3>
                {{ timeEntry.totalTime }} hours
              </h3>
              <p>
                {{ timeEntry.date }}
              </p>
            </div>

            <div>
              <p>
                {{ timeEntry.comment }}
              </p>
            </div>

            <div>
              <button
                @click="deleteTimeEntry(timeEntry)">
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
        timeEntries: [existingEntry]
      }
    },
    methods: {
      deleteTimeEntry (timeEntry) {
        let index = this.timeEntries.indexOf(timeEntry)
        if (window.confirm('Are you sure you want to delete this time entry?')) {
          this.timeEntries.splice(index, 1)
          this.$dispatch('deleteTime', timeEntry)
        }
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        return true
      }
    }
  }

</script>

