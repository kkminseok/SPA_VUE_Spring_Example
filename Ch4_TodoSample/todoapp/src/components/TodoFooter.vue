<template>
    <div>
       <button v-on:click="clearTodo">all clear</button>
    </div>
</template>

<script>
export default{
    name: 'TodoFooter',
    emits: ['remove-all'],

    setup(props,context){
        const clearTodo=() =>{
            //console.log('clearTodo')
            context.emit('remove-all')
        }

        return {
            clearTodo,
        }
    }
}
</script>

<style scoped>
    div{
        background-color: #00FFFF;
    }
</style>