<template>
    <div align="center">
        <h2>Edit Item</h2>
        <item-modify-form v-if="item"
            :item="item"
            @modify-post="modifyPost"></item-modify-form>
        <p v-else>loading...</p>
    </div>
</template>
<script>
import client from '/@modules/client.js'
import ItemModifyForm from '/@components/item/ItemModifyForm.vue'
import { router } from '/@router/router.js'
import { inject } from 'vue'

export default {
  components: { ItemModifyForm },
    name: 'ItemModifyPage',
    componetns: { ItemModifyForm },
    props: {
        itemId: {
            type: String,
            required: true
        }
    },
    setup(props) { 
        const item = inject("item")
        const fetchItem = inject("fetchItem")

        fetchItem(props.itemId)
            .catch(err => {
                alert(err.response.data.message)
                router.back()
            })

        const modifyPost = (payload) => {
            const { itemName, price, description, file, previewFile } = payload

            const itemObject = {
                itemId : props.itemId,
                itemName: itemName,
                price: price,
                description: description
            }

            let formData = new FormData()

            formData.append("file",file)
            formData.append("file2",previewFile)
            formData.append("item",JSON.stringify(itemObject))

            client.put(`/items/${props.itemId}`,formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            })
            .then(res => {
                alert('Modify complete')
                router.push({
                    name: 'ItemReadPage',
                    params: { itemId: res.data.itemId.toString()}
                })
            })
            .catch(err => {
                if(err.response.status === 401){
                    alert('plz login')
                    router.push({ name: 'Signin'})
                }else if(err.response.statue === 403){
                    alert('plz access allow')
                    router.back()
                }else {
                    alert(err.response.data.message)
                }
            })
        }
        return {
            item,
            modifyPost,
        }
    }
}
</script>