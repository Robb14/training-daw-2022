<template>
  <div>
      <h1>{{ title }}</h1>
      <h2>{{ author }}</h2>
      <p>{{ content }}</p>
      <button @click="doLike">Like</button>
  </div>
</template>

<script>
export default {
    props: ['key', 'title', 'author', 'content'],
    methods: {
        doLike(){
            console.log(`POST /${this.id}/like`)
        }
    }
}
</script>

<style>

</style>