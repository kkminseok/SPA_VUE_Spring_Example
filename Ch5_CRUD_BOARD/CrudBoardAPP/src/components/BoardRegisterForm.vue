<template>
    <!-- 5.5delete
    <div>
        <h3>add board view</h3>
        <button type="submit">add</button>
        <router-link :to="{name: 'BoardListPage'}">cancle</router-link>
    </div>
    -->
    <form @submit.prevent="fireAddPost">
        <table>
            <tr>
                <td>title</td>
                <td><input type="text" v-model="title"></td>
            </tr>
            <tr>
                <td>user</td>
                <td><input type="text" v-model="writer"></td>
            </tr>
            <tr>
                <td>content</td>
                <td><textarea v-model="content" rows="5"></textarea></td>
            </tr>
        </table>

        <div>
            <button type="submit">submit</button>
            <router-link :to="{name : 'BoardListPage' }">cancle</router-link>
        </div>
    </form>
</template>
<script>
import {ref} from 'vue'
export default {
    name: 'BoardRegisterForm',
    emits: ['add-post'],
    setup(props,context){
        const title = ref('')
        const writer = ref('')
        const content = ref('')

        const fireAddPost = () =>{
            context.emit('add-post', {
                title : title.value,
                writer: writer.value,
                content : content.value
            })
        }
        return {
            title,
            writer,
            content,
            fireAddPost,
        }
    }
}
</script>