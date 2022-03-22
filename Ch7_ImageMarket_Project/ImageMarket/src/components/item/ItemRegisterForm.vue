<template>
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>Item Name</td>
                <td><input type="text" v-model="itemName"></td>
            </tr>
            <tr>
                <td>price</td>
                <td><input type="text" v-model="price">&nbsp;krw</td>
            </tr>
            <tr>
                <td>Item File</td>
                <td><input type="file" @change="handleFileChange($event)"/></td>
                <td></td>
            </tr>
            <tr>
                <td>Preview File</td>
                <td><input type="file" @change="hanldePreviewFileChange($event)"/></td>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea v-model="description" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">submit</button>
            <router-link :to="{ name: 'ItemListPage' } ">List</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'ItemRegisterForm',
    emits: ['add-post'],
    setup(props, context) {
        const itemName = ref('')
        const price = ref('')
        const description = ref('')
        const file = ref('')
        const previewFile = ref('')
        
        const fireAddPost = () => {
            context.emit('add-post',{
                itemName: itemName.value,
                price: price.value,
                description: description.value,
                file: file.value,
                previewFile: previewFile.value,
            })
        }

        const handleFileChange = (evt) => {
            file.value= evt.target.files[0]
        }

        const hanldePreviewFileChange = (evt) => {
            previewFile.value = evt.target.files[0]
        }

        return { 
            itemName,
            price,
            description,
            file,
            previewFile,
            fireAddPost,
            handleFileChange,
            hanldePreviewFileChange,
        }
    }
}
</script>