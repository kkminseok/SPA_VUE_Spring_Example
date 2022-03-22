<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="80">Item Num</th>
                <th align="center" width="100">Item Name</th>
                <th align="center" width="100">Price</th>
                <th align="center" width="180">Buy Date</th>
                <th align="center" width="180">Download</th>
            </tr>

            <tr v-if="!userItems || (Array.isArray(userItems) && userItems.length===0)">
                <td colspan="5">
                    List is Empty
                </td>
            </tr>

            <tr v-else v-for="userItem in userItems" :key="userItem.userItemNo">
                <td align="center">{{userItem.userItemNo}}</td>
                <td align="left"><router-link :to="{ name: 'UserItemReadPage', params: { userItemNo: userItem.userItemNo } } ">{{ userItem.itemName }}</router-link></td>
                <td align="right">{{userItem.price}}</td>
                <td align="center">{{userItem.regDate}}</td>
                <td align="center"><a @click.prevent.stop="fireDownload(userItem.userItemNo)">Download</a></td>
            </tr>
            
        </table>
    </div>
</template>
<script>
export default {
    name: 'UserItemList',
    props: {
        userItems: {
            type: Array
        }
    },
    emits: ['download'],
    setup(props, context) {
        const fireDownload = (userItemNo) => {
            context.emit('download',{ userItemNo })
        }

        return {
            fireDownload,
        }
    }
}
</script>

<style scoped>
a:hover {
    text-decoration:underline;
}
</style>