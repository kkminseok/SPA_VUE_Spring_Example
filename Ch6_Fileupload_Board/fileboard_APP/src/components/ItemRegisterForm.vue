<template>
    <!-- 6.5 delete
    <div>
        <h3>add Item Form</h3>
        <button type="submit">submit</button>
        <router-link :to="{name: 'ItemListPage'}">cancle</router-link>
    </div>
    -->
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>Item name</td>
                <td><input type="text" v-model="itemName"></td>
            </tr>
            <tr>
                <td>price</td>
                <td><input type="text" v-model="price">&nbsp; won</td>
            </tr>
            <tr>
                <td>Item File</td>
                <td><input type="file" @change="changeFile($event)"/></td>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea v-model="description" rows="5"></textarea></td>
            </tr>
        </table>
        
        <div>
            <button type="submit">submit</button>
            <router-link :to="{name: 'ItemListPage'}">cancle</router-link>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'

export default { 
    name : 'ItemRegisterForm',
    emits: ['add-post'],
    setup(props, context) {
        const itemName = ref('')
        const price = ref('')
        const description = ref('')
        const file = ref('')

        const fireAddPost = () =>{
            context.emit('add-post',{
                itemName: itemName.value,
                price: price.value,
                description: description.value,
                file: file.value
            })
        }

        const changeFile = (evt) =>{
            file.value = evt.target.files[0]
        }

        return {
            itemName,
            price,
            description,
            file,
            fireAddPost,
            changeFile,
        }
    }
}
</script>