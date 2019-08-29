<template>
  <div class="newslist">
    <router-link v-for="item in newslist" :Key="item.id" :to="'/home/newsinfo/'+item.id">
      <van-card :title="item.title" :thumb="item.img_url">
        <div slot="price">
          <span class="add_time">发表时间：{{item.add_time}}</span>
          <!-- 时间 找到的自定义的slot -->
        </div>
        <div slot="num">
          点击{{item.click}}次
          <!-- 次数-->
        </div>
      </van-card>
    </router-link>
  </div>
</template>
<script>
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getNewsList()
  },
  methods: {
    // 获取新闻列表信息
    async getNewsList() {
      const {
        data: { message, status }
      } = await this.$http.get('api/getnewslist')
      if (status !== 0) return this.$Toast('获取新闻列表信息失败')
      // 否则
      this.newslist = message
      // return this.$Toast('获取轮播图失败')
      console.log(message)
    }
  }
}
</script>
<style lang="less" scoped>
.newslist {
  .van-card__thumb {
    height: 55px;
  }
  .van-card__content {
    min-height: 55px;
    .van-card__title {
      margin-bottom: 20px;
    }
    .add_time {
      color: purple;
    }
  }
}
</style>
