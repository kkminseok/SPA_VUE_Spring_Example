import { reactive,computed } from 'vue'
import client from '/@modules/client.js'
import Cookies from 'js-cookie'

export const useAuth = () => {
    const state = reactive({
        accessToken: '',
        myinfo: null,
    })

    const myinfo = computed(() => state.myinfo)

    const isAuthorized = computed(() => {
        return state.accessToken.length > 0 && !!state.myinfo
    })

    const isAdmin = computed(() => {
        if(!state.myinfo || !state.myinfo.authList){
            return false
        }


        return isAuthorized && state.myinfo.authList[0].auth === 'ROLE_ADMIN'
    })

    const isMember = computed(() => {
        if(!state.myinfo || !state.myinfo.authList){
            return false
        }

        return isAuthorized && state.myinfo.authList[0].auth === 'ROLE_MEMBER'
    })

    const SET_ACCESS_TOKEN = (accessToken) => {
        if(accessToken){
            state.accessToken = accessToken

            client.defaults.headers.common.authorization= `Bearer ${accessToken}`
            
            Cookies.set('accessToken',accessToken, { expires: 1 })
        }
    }

    const SET_MY_INFO = (myinfo) => {
        if(myinfo){
            state.myinfo = myinfo
            console.log("myinfo : ",myinfo)
        }
    }

    const DESTORY_ACCESS_TOKEN = () =>{
        state.accessToken= ''
        delete client.defaults.headers.common.authorization
        Cookies.remove('accessToken')
    }

    const DESTORY_MY_INFO = () => {
        state.myinfo = null
    }


    const signin = (payload) => {
        return client.post(`/api/authenticate?username=${payload.userId}&password=${payload.password}`,{
            username: payload.userId,
            password: payload.password
        }).then(res => {
            const { authorization } = res.headers
            const accessToken = authorization.substring(7)
            console.log("accessToken : ",accessToken)
            SET_ACCESS_TOKEN(accessToken)

            return client.get('/users/myinfo')
        }).then(res => {
            SET_MY_INFO(res.data)
        })
    }

    const signinByToken = (token) => {
        SET_ACCESS_TOKEN(token)
        return client.get('/users/myinfo')
        .then(res => {
            SET_MY_INFO(res.data)
        })
    }

    const signout = () =>{
        DESTORY_MY_INFO()
        DESTORY_ACCESS_TOKEN()
    }

    return {
        myinfo,
        isAuthorized,
        isAdmin,
        isMember,
        signin,
        signinByToken,
        signout,
    }
}