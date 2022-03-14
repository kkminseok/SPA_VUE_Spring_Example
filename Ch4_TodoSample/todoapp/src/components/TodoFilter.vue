<template>
    <div>
        <input type="radio" v-bind:checked="filter ===null" v-on:change="setFilter(null)">all
        <input type="radio" v-bind:checked="filter ==='A'" v-on:change="setFilter('A')">non complete
        <input type="radio" v-bind:checked="filter ==='B'" v-on:change="setFilter('B')">complete
    </div>
</template>

<script>
//4.17 delete
//import { computed } from "vue";
//import {useStore} from 'vuex'

import {inject} from 'vue'

export default {
    name : 'TodoFilter',
    //4.18
    //props: ['filter'],
    emits: ['set-filter'],
    setup(props, context){
        const filter = inject("filter")
        //4.17 delete
        /*
        const store = useStore()
        const filter = computed(() => store.state.filter)

        const setFilter = (filter) =>{
            store.dispatch('setFilter',filter)
        }
        */
       const setFilter = (filter) =>{
           context.emit('set-filter',filter)
       }
        return {
            //4.17 delete
            //filter,
            filter,
            setFilter,
        }
    }
}
</script>

<style scoped>
div{
    background-color: #00FFFF;
}
</style>