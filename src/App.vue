<script setup>
  import Header from './components/Header.vue'
  import Tasks from './components/Tasks.vue'
</script>

<template>
  <div class="container">
    <Header title="Task Tracker"/>
    <Tasks @delete-task="deleteTask" :tasks="tasks"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      Header,
      Tasks
    },
    data() {
      return {
        tasks: []
      }
    },
    methods: {
      deleteTask(id) {
        if(confirm('Are you sure you want to delete this task?')) {
          this.tasks = this.tasks.filter((task) => task.id !== id)
        }
      }
    },
    created() {
      this.tasks = [
        {
          id: 1,
          text: 'Buy milk',
          day: '26th June at 9:30am',
          reminder: true
        },
        {
          id: 2,
          text: 'Finish book',
          day: '28th June at 2:00pm',
          reminder: true
        },
        {
          id: 3,
          text: 'Walk dog',
          day: '28th June at 5:00pm',
          reminder: false
        }
      ]
    }
  }
</script>

<style scoped>

</style>
