<template>
  <div>
    <BackToTable buttonTitle="вернуться к таблице" @click="$router.push('/')"></BackToTable>
    <h1 style="margin-top: 40px">{{ userData }}</h1>
  </div>
</template>

<script>
import server from '@/server/server.js'
import Button from '@/components/common/Button'

export default {
  name: 'UserId',
  components: {
    BackToTable: Button
  },
  data () {
    return {
      userData: ''
    }
  },
  created () {
    const userId = this.$router.currentRoute.params.id
    this.getUser(userId)
  },
  methods: {
    getUser (id) {
      const response = server.getUser(id)
      if (response.status === 'success') {
        this.userData = `${response.user.name} | ${response.user.surname} | ${response.user.email}`
      } else if (response.status === 'error') {
        this.userData = 'Пользователь не существует!'
      }
    }
  }
}
</script>
