<template>
  <div id="app">
    <router-view name="header"/>
    <router-view name="menu" />
    <router-view />
    <router-view name="footer"/>
  </div>
</template>
<script>
import { provide, onMounted } from 'vue'
import { useAuth } from '/@compositions/useAuth.js'
import Cookies from 'js-cookie'
import { useCodeGroup } from '/@compositions/useCodeGroup.js'
import { useCodeDetail } from '/@compositions/useCodeDetail.js'
import { useMember } from '/@compositions/useMember.js'
import { useBoard } from '/@compositions/useBoard'
import { useNotice } from '/@compositions/useNotice'
import { useItem } from '/@compositions/useItem'
import { useCoin } from '/@compositions/useCoin'
import { useUserItem } from '/@compositions/useUserItem'
import { usePds } from '/@compositions/usePds.js'

export default {
  name: 'App',
  setup(){
    const{
      myinfo,
      isAuthorized,
      isAdmin,
      isMember,
      signin,
      signinByToken,
      signout,
    } = useAuth()

    const{
      codeGroups,
      codeGroup,
      fetchCodeGroupList,
      fetchCodeGroup,
    } = useCodeGroup()

    const{
      codeDetail,
      codeDetails,
      fetchCodeDetailList,
      fetchCodeDetail
    } = useCodeDetail()

    const{
      jobCodes,
      members,
      member,
      fetchJobCodeList,
      fetchMemberList,
      fetchMember,
    } = useMember()

    const {
      boards,
      board,
      fetchBoardList,
      fetchBoard
    } = useBoard()

    const { 
      notices,
      notice,
      fetchNoticeList,
      fetchNotice
    } = useNotice()

    const { 
      items,
      item,
      fetchItemList,
      fetchItem,
    } = useItem()

    const { 
      chargeCoins,
      fetchChargeCoinList,
      payCoins,
      fetchPayCoinList,
    } = useCoin()

    const {
      userItems,
      userItem,
      fetchUserItemList,
      fetchUserItem,
    } = useUserItem()

    const {
      pdsItems,
      pdsItem,
      attachments,
      fetchPdsList,
      fetchPds,
      addAttach,
      resetAttach,
      removeAttach,
    } = usePds()

    provide("myinfo",myinfo)
    provide("isAuthorized",isAuthorized)
    provide("isAdmin",isAdmin)
    provide("isMember",isMember)
    provide("signin",signin)
    provide("signout",signout)

    provide("codeGroups",codeGroups)
    provide("codeGroup",codeGroup)
    provide("fetchCodeGroupList",fetchCodeGroupList)
    provide("fetchCodeGroup",fetchCodeGroup)

    provide("codeDetails",codeDetails)
    provide("codeDetail",codeDetail)
    provide("fetchCodeDetailList",fetchCodeDetailList)
    provide("fetchCodeDetail",fetchCodeDetail)

    provide("jobCodes",jobCodes)
    provide("fetchJobCodeList",fetchJobCodeList)

    provide("members",members)
    provide("member",member)
    provide("fetchMemberList",fetchMemberList)
    provide("fetchMember",fetchMember)

    provide("boards", boards)
    provide("board",board)
    provide("fetchBoardList",fetchBoardList)
    provide("fetchBoard",fetchBoard)

    provide("notice",notice)
    provide("notices",notices)
    provide("fetchNoticeList",fetchNoticeList)
    provide("fetchNotice",fetchNotice)

    provide("items",items)
    provide("item",item)
    provide("fetchItemList",fetchItemList)
    provide("fetchItem",fetchItem)

    provide("chargeCoins",chargeCoins)
    provide("fetchChargeCoinList",fetchChargeCoinList)
    provide("payCoins",payCoins)
    provide("fetchPayCoinList",fetchPayCoinList)

    provide("userItems",userItems)
    provide("userItem",userItem)
    provide("fetchUserItemList",fetchUserItemList)
    provide("fetchUserItem",fetchUserItem)

    provide("pdsItems",pdsItems)
    provide("pdsItem",pdsItem)
    provide("attachments",attachments)
    provide("fetchPdsList",fetchPdsList)
    provide("fetchPds",fetchPds)
    provide("addAttach",addAttach)
    provide("resetAttach",resetAttach)
    provide("removeAttach",removeAttach)

    onMounted(() => {
      const savedToken = Cookies.get('accessToken')
      if(savedToken){
        signinByToken(savedToken).then(res =>{
          console.log('Logined By Token')
        })
      }
    })
  }
}
</script>