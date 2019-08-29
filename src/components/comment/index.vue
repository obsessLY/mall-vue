<template>
<div class="comment">
  <!-- <van-cell-group>
  <van-cell title="单元格" value="内容" label="描述信息" />
</van-cell-group> 用的时候还要找自定义插槽 方法1-->
<h2>发表评论</h2>
<hr />
<textarea v-model="text" cols="30" rows="10" placeholder="请输入你的评论内容" class="text"></textarea>
<van-button type="danger" class="btn" @click="addComment">发表评论</van-button>
<div class="comment-list" v-for="(comment,index) in comments" :key="comment.id">
  <div class="comment-title">
    <span>第{{index+1}}楼</span>
    <span>用户:{{comment.user_name}}</span>
    <span>发表时间:{{comment.add_time|datefmt}}</span>
  </div>
  <div class="comment-item">
{{comment.content}}
  </div>
</div>

</div>
</template>
<script>
export default {
  data: () => ({
    text: ''
  }),
  props: {
    comments: {
      type: Array
      // 父组件在newsinfo里 可以吧多个评论删去 直接遍历了
    }
  },

  created() {},
  methods: {
    addComment() {
      if (this.text.length === 0) return this.$Toast('请输入内容在发表')
      this.$emit('postcomment', this.text)
      // 调的时候把值传过去
      this.text = ''
      // 给用户更好的体验 发表后文本框清空
    }
  }
}
</script>
<style lang="less" scoped>
.comment{
  .text{
    font-size:16px;
    width: 100%;
    border:none;
    height:85px;
  }
  .btn{
    width: 100%;
  }
  .comment-list{
    font-size: 12px;
    margin-top:6px;
    .comment-title{
      background:#ccc;
      line-height: 30px;
      span{
      margin-right:4px;
    }
    }
  }
}
</style>
