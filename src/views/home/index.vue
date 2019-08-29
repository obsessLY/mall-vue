<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" class="my-swipe">
      <van-swipe-item class="item" v-for="item in lunbolist" :key="item.id">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3" class="my-grid">
      <van-grid-item v-for="grid in grids" :key="grid.id" :text="grid.title" props="grid" :to="grid.to">
      <template slot="icon">
        <img :src="grid.src" alt="" />
      </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data: () => ({
    lunbolist: [],
    grids: []
  }),
  created() {
    this.getlunbo()
    this.getGrids()
  },
  methods: {
    // 获取轮播图数据
    async getlunbo() {
      const {
        data: { message, status }
      } = await this.$http.get('api/getlunbo')
      if (status !== 0) return this.$Toast('获取轮播图失败')
      // 否则
      this.lunbolist = message
      // return this.$Toast('获取轮播图失败')
    },
    // 获取九宫格数据
    async getGrids() {
      const {
        data: { message, status }
      } = await this.$http.get('api/grids')
      if (status !== 0) return this.$Toast('获取轮播图失败')
      // 否则
      this.grids = message
      console.log(message)
      // return this.$Toast('获取轮播图失败')
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.home {
  .my-swipe {
    height: 200px;
    background: purple;
    .item {
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .my-grid{
   img{
      width: 60px;
    height: 60px;
    border-radius: 50%;
    display: block;
   }
  }
}
</style>
