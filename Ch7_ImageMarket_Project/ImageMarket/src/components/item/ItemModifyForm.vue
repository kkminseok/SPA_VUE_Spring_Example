<template>
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>Item Num</td>
                <td><input :value="item.itemId" type="text" disabled></td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td><input type="text" v-model="item.itemName"></td>
            </tr>
            <tr>
                <td>price</td>
                <td><input type="text" v-model="item.price">&nbsp;krw</td>
            </tr>
            <tr>
                <td>File</td>
                <td><input type="file" @change="handleFileChange($event)"/></td>
            </tr>
            <tr>
                <td>Preview</td>
                <td><input type="file" @change="handlePreviewFileChange($event)"/></td>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea v-model="item.description" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">submit</button>
            <router-link :to="{ name: 'ItemReadPage', params:{ itemId: item.itemId.toString() } }">Cancle</router-link>
        </div>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'ItemModifyForm',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    emits: ['modify-post'],
    setup(props, context)  {
        const file = ref('')
        const previewFile = ref('')

        const handleFileChange = (evt) => {
            file.value = evt.target.files[0]
        }

        const handlePreviewFileChange = (evt) => {
            previewFile.value = evt.target.files[0]
        }

        const fireModifyPost = () => {
            context.emit('modify-post',{
                itemName: props.item.itemName,
                price: props.item.price,
                description: props.item.description,
                file: file.value,
                previewFile: previewFile.value,
            })
        }

        return {
            file,
            previewFile,
            handleFileChange,
            handlePreviewFileChange,
            fireModifyPost,
        }
    }
}
</script>