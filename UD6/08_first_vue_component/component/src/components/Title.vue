<template>
<div>
    <div class="name">
      Mi nombre completo es: {{ name }} {{ surnames }}
    </div>
    <div class="age">
        Mi edad es: {{ age }}
    </div>
    <button @click="age++">Incrementar</button>
    <button @click="age--">Decrementar</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Roberto',
            surnames: 'Bellido Marin',
            age: 20
        }
    }
}
</script>

<style scoped>
    .name{
        background-color: coral;
    }
    .age{
        background-color: lightcyan;
    }
</style>