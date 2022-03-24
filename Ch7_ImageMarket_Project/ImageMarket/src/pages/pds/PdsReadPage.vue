<template>
    <div align="center">
        <h2>pds Info</h2>
        <pds-read v-if="pdsItem && attachments"
            :pdsItem="pdsItem"
            :attachments="attachments"/>
        <p v-else>loading...</p>
        <template v-if="isAdmin">
            <router-link :to="{ name: 'PdsModifyPage', params: { itemId }}">Edit</router-link>
            <button @click="deletePost">Delete</button>
        </template>
        <router-link :to="{ name: 'PdsListPage' }">List</router-link>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import PdsRead from '/@components/pds/PdsRead.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
    name: 'PdsReadPage',
    components: { PdsRead },
    props: {
        itemId: {
            type:String,
            required: true
        }
    },
    setup(props) { 
        const isAdmin = inject("isAdmin")

        const pdsItem = inject("pdsItem")
        const attachments = inject("attachments")
        const fetchPds = inject("fetchPds")

        fetchPds(props.itemId)
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const deletePost = () => {
            const { itemId } = pdsItem.value
            client.delete(`/pds/${itemId}`)
                .then(res => {
                    alert('delete complete')
                    router.push({ name: 'PdsListPage'})
                })
                .catch(err => {
                    if(err.response.status === 401){
                        alert('login plz')
                        router.push({ name: 'Signin'})
                    }else if(err.response.status === 403){
                        alert("plz access allow")
                        router.back()
                    }else {
                        alert(err.response.data.message)
                    }
                })
        }
        return {
            isAdmin,
            pdsItem,
            attachments,
            deletePost,
        }
    }
}
</script>