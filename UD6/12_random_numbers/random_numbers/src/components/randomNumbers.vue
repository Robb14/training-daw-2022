<template>
    <div>
        <div>{{items}}</div>
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
    </div>

</template>

<script>
export default {
    data() {
        return{
            items: []
        }
    },
    methods: {
        add(){
            this.items.push(Math.floor(Math.random()*100))
        },
        remove(){
            if(this.items!=null){
                this.items.shift()
            }
        }
    }
}
</script>

<style>

</style>