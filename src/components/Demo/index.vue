<template>
  <div class="demo-cls">
    <div style="margin-bottom: 10px;"><a>Hello Vue!</a></div>
    <div @click="testRequest" class="btn">click</div>
    <div class="result">
      请求结果：
      <span v-if="result !== ''">{{result}}</span>
      <span v-else>无</span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        result: ''
      }
    },
    methods: {
      ...mapActions(['getRequest']),
      testRequest() {
        const param = {
          id: 0
        }
        // action 请求数据
        // this.getRequest(param).then(res => {
        //   if (res.code === 'A00000') {
        //     this.$toast.success(res.msg)
        //     this.result = res.data
        //   }
        // })

        // $http 请求数据
        this.$http.testRequest(param).then(res => {
          if (res.code === 'A00000') {
            this.$toast.success(res.msg)
            this.result = res.data
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .demo-cls {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: #42b983;
  }
  .btn {
    width: 327px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #ff9934;
    color: #ff9934;
    text-align: center;
  }
  input {
    border: 1px solid grey;
  }
  .result {
    width: 100%;
    padding: 10px 24px;
    color: grey;
    font-size: 12px;
  }
</style>
