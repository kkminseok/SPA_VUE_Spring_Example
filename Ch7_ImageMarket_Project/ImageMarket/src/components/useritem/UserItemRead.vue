<template>
    <div>
        <table>
            <tr>
                <td>Item Num</td>
                <td><input type="text" :value="userItem.userItemNo" readonly></td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td><input type="text" :value="userItem.itemName" readonly></td>
            </tr>
            <tr>
                <td>Price</td>
                <td><input type="text" :value="userItem.price" readonly></td>
            </tr>
            <tr>
                <td>Item File</td>
                <td><img :src="pictureUrl()" width="210" height="240"></td>
            </tr>
            <tr>
                <td>Item description</td>
                <td><textarea :value="userItem.content" readonly></textarea></td>
            </tr>
            
        </table>
    </div>
</template>
<script>
export default {
    name: 'UserItemRead',
    props: {
        userItem: {
            type: Object,
            required: true
        }
    },
    setup(props, context) {
        const pictureUrl = () => {
            return 'http://localhost:8080/items/display?itemId=' + props.userItem.itemId + "&timestamp=" + new Date().getTime()
        }

        return {
            pictureUrl,
        }
    }
}
</script>