<template>
    <div>
        <table border="1">
            <tr>
                <th align="center" width="160">GroupCode</th>
                <th align="center" width="160">Code Value</th>
                <th align="center" width="160">Code Name</th>
                <th align="center" width="160">Order</th>
                <th align="center" width="160">RegDate</th>
            </tr>

            <tr v-if="!codeDetails || (Array.isArray(codeDetails) && codeDetails.length ===0)">
                <td colspan="5">
                    List is Empty
                </td>
            </tr>

            <tr v-else v-for="codeDetail in codeDetails" :key="`${codeDetail.groupCode}-${codeDetail.codeValue}`">
                <td align="center">{{ codeDetail.groupCode }}</td>
                <td align="center">{{ codeDetail.codeValue }}</td>
                <td align="left"><router-link :to="{ name: 'CodeDetailReadPage', params: { groupCode: codeDetail.groupCode, codeValue: codeDetail.codeValue}}">{{ codeDetail.codeName }}</router-link></td>
                <td align="center">{{ codeDetail.sortSeq }}</td>
                <td align="center">{{ codeDetail.regDate }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'CodeDetailList',
    props: {
        codeDetails: {
            type: Array
        }
    }
}
</script>