<template>
    <div>
        <table>
            <tr>
                <td>Item num</td>
                <td><input type="text" :value="item.itemId"></td>
            </tr>
            <tr>
                <td>Item Name</td>
                <td><input type="text" :value="item.itemName"></td>
            </tr>
            <tr>
                <td>price</td>
                <td><input type="text" :value="item.price"></td>
            </tr>
            <tr>
                <td>preview</td>
                <td><img :src="previewUrl()" width="200"></td>
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
    name: 'ItemRead',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    setup(props) { 
        const previewUrl = () => {
            return 'http://localhost:8080/items/preview?itemId=' + props.item.itemId + "&timestamp=" + new Date().getTime()
        }

        return {
            previewUrl,
        }
    }
}
</script>