<template>
<div class="photolist">
    <van-tabs @change="getImgs" animated>
  <van-tab v-for="cate in cates" :title="cate.title" :key="cate.id">
   <template v-if="imgs.length!==0">
       <router-link :to="'/home/photoinfo/'+img.id" v-for="img in imgs" :key="img.id" class="img-box">
       <!-- <img :src="img.img_url" alt=""> -->
       <!-- 是一个组件 只是名字和上面的相似 -->
       <img v-lazy="img.img_url" >
         <!-- <img v-for="img in imageList" v-lazy="img" > -->
       </router-link>
   </template>
   <div v-else>暂无数据</div>
  </van-tab>
</van-tabs>
</div>
</template>
<script>
export default {
  data: () => ({
    cates: [],
    imgs: []
  }),
  created() {
    this.getImgCategory()
    this.getImgs(0)
    // 0是 点全部 的索引  进入就获取全部数据
  },
  methods: {
    async getImgCategory() {
      const {
        data: { status, message }
      } = await this.$http.get('api/getimgcategory')
      if (status !== 0) this.$Toast('获取分类失败')
      message.unshift({
        id: 0,
        title: '全部'
      })
      this.cates = message
    },
    async getImgs(index) {
      const {
        data: { status, message }
      } = await this.$http.get(`api/getimages/${index}`)
      if (status !== 0) this.$Toast('获取分类失败')
      this.imgs = message
    }
  }
}
</script>
<style lang="less" scoped>
.photolist{
    .img-box{
padding:4px;
    }

    img{
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>
