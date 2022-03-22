<template>
    <form @submit.prevent="fireModifyPost">
        <table>
            <tr>
                <td>GroupCode</td>
                <td>
                    <select v-model="codeDetail.groupCode" disabled>
                        <option v-for="codeGroup in codeGroups" :value="codeGroup.groupCode" :key="codeGroup.groupCode">
                            {{codeGroup.groupName}}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Code Value</td>
                <td><input v-model="codeDetail.codeValue" type="text"></td>
            </tr>
            <tr>
                <td>Code Name</td>
                <td><input v-model="codeDetail.codeName" type="text"></td>
            </tr>
        </table>

        <div>
            <button type="submit">Edit</button>
            <router-link :to="{ name:'CodeDetailReadPage', params: { groupCode: codeDetail.groupCode, codeValue: codeDetail.codeValue}}">Cancle</router-link>
        </div>
    </form>
</template>
<script>
export default {
    name: 'CodeDetailModifyForm',
    props: {
        codeGroups: {
            type: Array
        },
        codeDetail: {
            type: Object,
            required: true
        }
    },
    emits: ['modify-post'],
    setup(props,context) {
        const fireModifyPost = () => {
            context.emit('modify-post',{
                groupCode: props.codeDetail.groupCode,
                codeValue: props.codeDetail.codeValue,
                codeName: props.codeDetail.codeName
            })
        }

        return {
            fireModifyPost,
        }
    }
}
</script>