<template>
    <div align ="center">
        <h2>add Item</h2>
        <item-register-form @add-post="addPost"/>
    </div>
</template>

<script>
import ItemRegisterForm from '../components/ItemRegisterForm.vue'
import client from '../modules/client'
import { router } from '../router/router'

export default {
    name : 'ItemRegisterPage',
    components : { ItemRegisterForm },
    setup(){
        const addPost= (payload) => {
            const {itemName, price, description, file} = payload

            const itemObject = {
                itemName : itemName,
                price: price,
                description: description
            }

            const formData = new FormData()
            formData.append("file",file)
            formData.append("item",JSON.stringify(itemObject))

            client.post('/items',
            formData,
            {
                headres: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res=>{
                alert("Add Complete")
                console.log(res)
                router.push({
                    name: 'ItemReadPage',
                    params: {itemId: res.data.itemId}
                })
            })
            .catch(err=>{
                alert(err.response)
            })
        }
        
        return {
            addPost,
        }

    }
}
</script>