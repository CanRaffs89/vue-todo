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
      async addTask(task) {
        const res = await fetch('api/tasks', {
          method: 'POST', 
          headers: {'Content-type': 'application/json'
          },
          body: JSON.stringify(task)
        })
        const data = await res.json()
        this.tasks = [...this.tasks, data]
      },
      async deleteTask(id) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })
        this.tasks = this.tasks.filter((task) => task.id !== id)
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
