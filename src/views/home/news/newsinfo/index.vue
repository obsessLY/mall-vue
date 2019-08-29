<template>
  <div class="newsinfo">
      <van-card :title="news.title">
        <div slot="price">
          <span class="add_time">发表时间:{{news.add_time}}</span>
        </div>
        <div slot="num">点击{{news.click}}次</div>
      </van-card>
      <hr />
      <div class="newsinfo-body">{{news.content}}</div>
      评论组件
      <!-- 子组件传值1 -->
      <!-- 子组件传值2 在comment index.vue里接收一下:props -->
      <comment :comments="comments" @postcomment="postcomment"></comment>
<!-- 加载更多 -->
      <van-button plain type="danger" class="more" @click="getMore">{{hasFlag?'没得':'加载更多'}}</van-button>

  </div>
</template>
<script>
// 1
import Comment from '@/components/comment'

export default {
  data: () => ({
    id: '',
    // 定义一个对象
    news: {},
    pageindex: 1,
    limit: 3,
    comments: [],
    hasFlag: false

  }),
  created() {
    this.id = this.$route.params.id
    // 调用
    this.getNewsInfo()
    // 发送
    this.getComments()
  },
  methods: {
    // 获取数据
    async getNewsInfo() {
      const {
        data: { message, status }
      } = await this.$http.get(`api/getnew/${this.id}`)
      if (status !== 0) return this.$Toast(message)
      this.news = message
      // console.log(message)
    },
    async getComments() {
      // 节流
      if (this.hasFlag !== false) return
      const {
        data: { message, status, count }
      } = await this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}&limit=${this.limit}`)
      if (status !== 0) return this.$Toast(message)
      // message获取到某一页的数据 原来的+最新的message得到一个新数组
      this.comments = this.comments.concat(message)
      console.log(count)
      // 布尔值 逻辑控制
      this.hasFlag = this.pageindex * this.limit > count
      console.log(this.comments)
      // console.log(this.hasFlag)
    },
    getMore() {
      this.pageindex++
      this.getComments()
    },
    async postcomment(data) {
      // 到子组件使用某个方法接受一下
      // 发送请求
      const {
        data: { message, status }
      } = await this.$http.post(`api/postcomment/${this.id}`, { content: data })
      if (status !== 0) return this.$Toast('发表评论失败')
      console.log(message)
      this.comments.unshift({
        user_name: '匿名函数',
        content: data,
        add_time: Date.now()
      })
    }
  },
  // 2注册
  components: {
    Comment
  }
}
</script>
<style lang="less" scoped>
.newsinfo {
  padding:0 4px;
  .van-card {
    background-color: #fff;
  }
  .van-card__thumb {
    height: 55px;
  }
  .van-card__content {
    min-height: 55px;
    .van-card__title {
      margin-bottom: 20px;
    }
    .add_time {
      color: red;
    }
  }
  .more{
    width: 100%;
  }
}
</style>
