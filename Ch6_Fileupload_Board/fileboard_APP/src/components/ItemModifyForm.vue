<template>
    <!-- 6.9 delete
    <div>
        <h3>Edit to Item Form</h3>
        <button type="submit">Edit</button>
        <router-link :to="{name: 'ItemReadPage', params: {itemId: 100} }">cancle</router-link>
    </div>
    -->
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>Item Number</td>
                <td><input :value="item.itemId" type="text" disabled></td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td><input type="text" v-model="item.itemName"></td>
            </tr>
            <tr>
                <td>Item Price</td>
                <td><input type="text" v-model="item.price">&nbsp; won</td>
            </tr>
            <tr>
                <td>Item File</td>
                <td><input type="file" @change="changeFile($event)"/></td>
            </tr>
            <tr>
                <td>Preview</td>
                <td><img v-bind:src="pictureUrl()" width="200"></td>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea v-model="item.desciption" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">Edit</button>
            <router-link :to="{ name:'ItemReadPage', params: { itemId: itemId} }">cancle</router-link>
        </div>
    </form>
</template>
<script>
import {ref} from 'vue'
export default {
    name: 'ItemModifyForm',
    props: {
        item: {
            type: Object,
            required: true
        },
        itemId: {
            type: String,
            required: true
        },
    },
    emits: ['modify-post'],
    setup(props,context){
        const file = ref('')

        const fireModifyPost = () =>{
            context.emit('modify-post',{
                itemName: props.item.itemName,
                price: props.item.price,
                description: props.item.description,
                file: file.value
            })
        }

        const changeFile = (evt) => {
            file.value = evt.target.files[0]
        }

        const pictureUrl = () => {
            return 'http://localhost:8080/items/display?itemId=' + props.itemId + "&timestamp=" + new Date().getTime()
        }

        return {
            fireModifyPost,
            changeFile,
            pictureUrl,
        }
    }
}
</script>