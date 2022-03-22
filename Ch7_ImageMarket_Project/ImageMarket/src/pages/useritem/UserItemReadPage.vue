<template>
    <div align="center">
        <h2>Buy Item Info</h2>
        <user-item-read v-if="userItem" :userItem="userItem"/>
        <p v-else>loading...</p>
        <router-link :to="{ name: 'UserItemListPage' }">Buy List</router-link>
    </div>
</template>
<script>
import UserItemRead from '/@components/useritem/UserItemRead.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default { 
    name: 'UserItemReadPage',
    components: {UserItemRead},
    props: {
        userItemNo: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const userItem = inject("userItem")
        const fetchUserItem = inject("fetchUserItem")

        fetchUserItem(props.userItemNo)
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        return {
            userItem,
        }
    }

}
</script>