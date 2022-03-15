<template>
    <div align="center">
        <h2>board list</h2>
        <router-link :to="{name: 'BoardRegisterPage'}">add board</router-link>
        <board-list :boards="boards"/>
    </div>
</template>

<script>

import BoardList from '../components/BoardList.vue'
import client from '../modules/client.js'
import {ref , onMounted} from 'vue'

export default {
    name: 'BoardListPage',
    components : {BoardList},
    setup() { 
        const boards = ref([])

        onMounted (() => {
            client.get('/boards')
            .then(res => {
                boards.value = res.data
            })
            .catch(err => {
                alert(err.response)
            })
        })

        return {
            boards,
        }
    }
}

</script>