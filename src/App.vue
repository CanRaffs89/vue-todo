<script setup>
  import Header from './components/Header.vue'
  import Tasks from './components/Tasks.vue'
  import AddTask from './components/AddTask.vue'
</script>

<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask"/>
    <div v-show="showAddTask"><AddTask @add-task="addTask" /></div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
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
        tasks: [],
        showAddTask: false
      }
    },
    methods: {
      toggleAddTask() {
        this.showAddTask = !this.showAddTask
      },
      addTask(task) {
        this.tasks = [...this.tasks, task]
      },
      deleteTask(id) {
        if(confirm('Are you sure you want to delete this task?')) {
          this.tasks = this.tasks.filter((task) => task.id !== id)
        }
      },
      toggleReminder(id) {
        this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
      },
      async fetchTasks() {
        const res = await fetch('api/tasks')

        const data = await res.json()

        return data
      },
      async fetchTask(id) {
        const res = await fetch(`api/tasks/${id}`)

        const data = await res.json()

        return data
      },
    },
    async created() {
      this.tasks = await this.fetchTasks()
    }
  }
</script>

<style scoped>

</style>
