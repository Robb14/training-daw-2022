<template>
    <div>
      <h1>
        Esto es mi primer componente
      </h1>
      Mensaje {{ msg }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            msg: 'Hello world!!'
        }
    }
}
</script>

<style scoped>
h1{
    color: red;
}
</style>