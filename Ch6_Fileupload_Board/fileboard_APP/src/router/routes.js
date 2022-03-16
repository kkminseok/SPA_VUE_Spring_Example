import ItemListPage from '../pages/ItemListPage.vue'
import ItemRegisterPage from '../pages/ItemRegisterPage.vue'
import ItemReadPage from '../pages/ItemReadPage.vue'
import ItemModifyPage from '../pages/ItemModifyPage.vue'
const routes = [
    {
        path: '/',
        name: 'ItemListPage',
        components: {
            default: ItemListPage
        }
    },
    {
        path: '/item/register',
        name: 'ItemRegisterPage',
        components:{
            default: ItemRegisterPage
        }
    },
    {
        path: '/item/:itemId',
        name: 'ItemReadPage',
        components:{
            default: ItemReadPage
        },
        props:{
            default: true
        }
    },
    {
        path: '/item/:itemId/modify',
        name: 'ItemModifyPage',
        components: {
            default: ItemModifyPage
        },
        props: {
            default: true
        }
    
    }

]

export default routes