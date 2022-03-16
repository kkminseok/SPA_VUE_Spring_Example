<template>
    <div>
        <!-- 6.6 delete
        <h3>Detail Item view</h3>
        -->
        <table>
            <tr>
                <td>Item Number</td>
                <td><input type="text" :value="item.itemId"></td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td><input type="text" :value="item.itemName"></td>
            </tr>
            <tr>
                <td>Item Price</td>
                <td><input type="text" :value="item.price">&nbsp; won</td>
            </tr>
            <tr>
                <td>Preview</td>
                <td><img v-bind:src="pictureUrl()" width="200"></td>
            </tr>
            <tr>
                <td>description</td>
                <td><textarea :value="item.description"></textarea></td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name : 'ItemRead',
    props: {
        item: {
            type:Object,
            required: true
        }
    },
    setup(props){
        const pictureUrl = () =>{
            return 'http://localhost:8080/items/display?itemId=' + props.item.itemId + "&timestamp=" + new Date().getTime()
        }

        return{
            pictureUrl,
        }
    }
}
</script>