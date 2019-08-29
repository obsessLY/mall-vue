import Vue from 'vue'
import {
  ImagePreview,
  Lazyload,
  Tab,
  Tabs,

  Cell,
  CellGroup,
  Tag,
  Card,
  Grid,
  GridItem,
  Toast,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  NavBar,
  Button
} from 'vant'

const options = {
  loading: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1796411554,1257847298&fm=26&gp=0.jpg'
}// 懒加载的内容 需要时可以添加
// 注册
Vue
  .use(Lazyload, options)
  .use(Tab).use(Tabs)

  .use(Cell).use(CellGroup)
  .use(Tag)
  .use(Card)
  .use(Grid).use(GridItem)
  .use(Swipe).use(SwipeItem)
  .use(Tabbar).use(TabbarItem)
  .use(NavBar)
  .use(Button)

Vue.prototype.$Toast = Toast
Vue.prototype.$ImagePreview = ImagePreview
