<template>
    <div align="center">
        <h2>Item Information</h2>
        <item-read v-if="item" :item="item"/>
            <p v-else>loading...</p>
            <router-link v-if="isAdmin" :to="{ name: 'ItemModifyPage', params: {itemId} }">Edit</router-link> 
            <button v-if="isAdmin" @click="deletePost">Delete</button>
            <button v-if="isMember" @click="buyItem">Buy</button>
            <router-link :to="{ name: 'ItemListPage'}">List</router-link>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import ItemRead from '/@components/item/ItemRead.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'ItemReadPage',
    components: { ItemRead },
    props: {
        itemId: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const isAdmin = inject("isAdmin")
        const isMember = inject("isMember")

        const item = inject("item")
        const fetchItem = inject("fetchItem")

        fetchItem(props.itemId)
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const deletePost = () => {
            const { itemId } = item.value
            client.delete(`/items/${itemId}`)
                .then(res => {
                    alert('Delete Complete')
                    router.push({ name: 'ItemListPage' })
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('Plz Login')
                        router.push({name: 'Signin'})
                    }else if(err.response.status === 403){
                        alert("plz access allow")
                        router.back()
                    }else {
                        alert(err.response.data.message)
                    }
                })
        }

        const buyItem = () => {
            const { itemId } = item.value
            client.get(`/items/buy/${itemId}`)
                .then(res => {
                    alert(res.data)
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('Login plz')
                        router.push({name: 'Signin'})
                    }else if(err.response.status === 403){
                        alert('Plz access allow')
                        router.back()
                    }else {
                        alert(err.response.data.message)
                    }
                })
        }
        return {
            isAdmin,
            isMember,
            item,
            deletePost,
            buyItem,
        }
    }
}
</script>