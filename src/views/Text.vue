<template>
  <div>
    <h1>{{ word }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TheText',
  // props: {
  //   word: {
  //     type: String,
  //     required: true
  //   }
  // }
  data () {
    return {
      word: ''
    }
  },
  created () {
    this.word = this.$router.currentRoute.params.word
  }
}
</script>
