<template>
  <div class="dragble-words">
    <h1>DragbleWords</h1>
    <input @keypress.enter="sendText" type="text" v-model="text">
  </div>
</template>

<script>
export default {
  name: 'DragbleWords',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    sendText () {
      if (!this.text.length) {
        alert('Для отправки заполните поле')
        return
      }
      this.$router.push({ name: 'Text', params: { word: this.text } })
    }
  }
}
</script>

<style scoped>
  .dragble-words {
  }
  input {
    width: 300px;
    height: 100px;
    margin-top: 30px;
    border: 1px solid;
  }
</style>
