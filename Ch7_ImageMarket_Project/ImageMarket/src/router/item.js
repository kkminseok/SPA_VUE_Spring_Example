import MainHeader from '/@components/common/MainHeader.vue'
import Footer from '/@components/common/Footer.vue'
import MenuBar from '/@components/common/MenuBar.vue'
import ItemListPage from '/@pages/item/ItemListPage.vue'
import ItemRegisterPage from '/@pages/item/ItemRegisterPage.vue'
import ItemModifyPage from '/@pages/item/ItemModifyPage.vue'
import ItemReadPage from '/@pages/item/ItemReadPage.vue'

export const ItemRouters = [
  {
    path: '/item',
    name: 'ItemListPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemListPage,
      footer: Footer
    }
  },
  {
    path: '/item/register',
    name: 'ItemRegisterPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemRegisterPage,
      footer: Footer
    },
  },
  {
    path: '/item/:itemId',
    name: 'ItemReadPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemReadPage,
      footer: Footer
    },
    props: {
      default: true
    }
  },
  {
    path: '/item/:itemId/modify',
    name: 'ItemModifyPage',
    components: {
      header: MainHeader,
      menu: MenuBar,
      default: ItemModifyPage,
      footer: Footer
    },
    props: {
      default: true
    },
  }
]
