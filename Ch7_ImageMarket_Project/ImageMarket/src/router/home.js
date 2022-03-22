import MainHeader from '/@components/common/MainHeader.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import Home from '/@pages/Home.vue'
import Footer from '/@components/common/Footer.vue'

export const HomeRoutes= [
    {
        path: '/',
        name: 'Home',
        //7.5 delete
        //component: Home
        components: {
            header: MainHeader,
            menu: MenuBar,
            default: Home,
            footer: Footer,
        }
    }
]