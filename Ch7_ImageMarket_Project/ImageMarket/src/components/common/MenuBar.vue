<template>
    <div align="center">
        <table>
            <tr>
                <!-- 7.13 delete
                <td width="120"><router-link :to="{name: 'Home'}">Home</router-link></td>
                -->
                <template v-if="isAuthorized">
                    <template v-if="isAdmin">
                        <td width="120"><router-link :to="{ name: 'Home' }">Home</router-link></td>
                        <td width="120"><router-link :to="{ name: 'CodeGroupListPage' }">CodeGroup Management</router-link></td>
                        <td width="120"><router-link :to="{ name: 'CodeDetailListPage' }">Code Management</router-link></td>
                        <td width="120"><router-link :to="{ name: 'MemberListPage' }">Member Management</router-link></td>
                        <td width="120"><router-link :to="{ name: 'BoardListPage' }">Board</router-link></td>
                        <td width="120"><router-link :to="{ name: 'NoticeListPage' }">Notice Management</router-link></td>
                        <td width="120"><router-link :to="{ name: 'ItemListPage' }">Item Management</router-link></td>
                        <td width="120"><router-link :to="{ name: 'PdsListPage'}">Open Data Files Management</router-link></td>
                    </template>
                    <template v-else>
                        <td width="120"><router-link :to="{ name: 'Home'} ">Home</router-link></td>
                        <td width="120"><router-link :to="{ name: 'BoardListPage' }">Board</router-link></td>
                        <td width="120"><router-link :to="{ name: 'NoticeListPage' }">Notice</router-link></td>
                        <td width="120"><router-link :to="{ name: 'ItemListPage' }">Item</router-link></td>
                        <td width="120"><router-link :to="{ name: 'CoinChargeRegisterPage' }">Coin Charge</router-link></td>
                        <td width="120"><router-link :to="{ name: 'CoinChargeListPage' }">Coin Info</router-link></td>
                        <td width="120"><router-link :to="{ name: 'UserItemListPage' }">buy Item</router-link></td>
                        <td width="120"><router-link :to="{ name: 'CoinPayListPage' }">buy Item Log</router-link></td>
                        <td width="120"><router-link :to="{ name: 'PdsListPage'}">OpenFiles</router-link></td>
                    </template>
                </template>
                <template v-else>
                    <td width="120"><router-link :to="{ name: 'Home' }">Home</router-link></td>
                    <td width="120"><router-link :to="{ name: 'BoardListPage' }">Board</router-link></td>
                    <td width="120"><router-link :to="{ name: 'NoticeListPage' }">Notice</router-link></td>
                    <td width="120"><router-link :to="{ name: 'ItemListPage' }">Item</router-link></td>
                    <td width="120"><router-link :to="{ name: 'PdsListPage'}">OpenFiles</router-link></td>
                </template>
            </tr>
        </table>
    </div>
</template>
<script>
import { inject } from 'vue'
export default {
    name: 'MenuBar',
    setup() {
        const isAuthorized = inject('isAuthorized')
        const isAdmin = inject("isAdmin")

        return {
            isAuthorized,
            isAdmin,
        }
    }
}
</script>