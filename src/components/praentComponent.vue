<template>
    <div class="main">
        <div @click="openMask">打开弹窗</div>
        <childComponent v-model="sendVal" type="danger" :title="title" :content="content" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete">
       <div>
           <p>猪小屁</p>
        
       </div>
        </childComponent>
    </div>
</template>
<script>
import childComponent from "./childComponent.vue";
export default {
  components: {
    childComponent: childComponent
  },
  data() {
    return {
      sendVal: false,
      title: "我是标题",
      content: `
      <div> <p @click='app()' v-model='pan'>哈哈哈</p> </div>
      `
    };
  },
  methods: {
    app() {
      console.log("123");
    },
    openMask(index) {
      this.sendVal = true;
    },
    clickCancel() {
      console.log("点击了取消");
    },
    clickDanger() {
      console.log("这里是danger回调");
    },
    clickConfirm() {
      console.log("点击了confirm");
    }
  }
};
</script>
<style scoped>
</style>