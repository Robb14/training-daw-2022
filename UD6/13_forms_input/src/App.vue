<template>
  <div id="app">
    Nombre: <input v-model="nombre" />
    Apellido: <input v-model="surname" />
    Consentimiendo <input type="checkbox" v-model="consent" />
    <button :disabled="!consent" @click="send">Enviar</button>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      nombre: 'texto',
      surname: 'value',
      consent: false
    }
  },
  methods: {
    changeText(e) {
      this.nombre = e.target.value
    },
    send(){
      console.log(`${this.nombre} ${this.surname}`)
    }
  }
}
</script>