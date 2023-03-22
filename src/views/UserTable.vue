<template>
  <v-app>
    <Table @edit="editUser" @delete="checkUser"
    :data="dataTable" style="margin-bottom:40px"></Table>
    <DialogForm ref="DialogForm"
    @updateUser="updateUser"
    @saveUser="createUser"
    ></DialogForm>
    <DialogDelete ref="DialogDelete" @delete="deleteUser"></DialogDelete>
    <router-view/>
  </v-app>
</template>

<script>
import DialogForm from '@/components/DialogForm'
import Table from '@/components/TableCustom'
import DialogDelete from '@/components/DialogDelete'
import server from '@/server/server.js'

export default {
  name: 'UserTable',
  components: {
    DialogForm,
    Table,
    DialogDelete
  },
  data () {
    return {
      dataTable: []
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    showError (message) {
      this.$store.commit('setErrorMessage', message)
      this.$store.commit('setShowError', true)
    },
    getUsers () {
      const response = server.getUsers()
      if (response.status === 'success') {
        this.dataTable = response.users
      }
    },
    createUser (newUser) {
      const response = server.createUser(newUser)
      if (response.status === 'success') {
        // this.getUsers()
        this.dataTable.unshift(newUser)
      } else if (response.status === 'error') {
        this.showError(`Ошибка при создании user: ${newUser.name} ${newUser.sursname}`)
      }
    },
    updateUser (updatedUser) {
      const response = server.editUser(updatedUser)

      if (response.status === 'success') {
        this.dataTable = this.dataTable.map(user => {
          if (user.id === updatedUser.id) {
            user = updatedUser
          }
          return user
        })
      } else if (response.status === 'error') {
        this.showError(`Ошибка при редактировании user: ${updatedUser.name} ${updatedUser.sursname}`)
      }
    },
    editUser (id) {
      for (const user of this.dataTable) {
        if (user.id === id) {
          this.$refs.DialogForm.openEditForm(user)
          return
        }
      }
    },
    checkUser (id) {
      this.dataTable.forEach(user => {
        if (user.id === id) {
          this.$refs.DialogDelete.openDialog({ id: user.id, name: user.name, surename: user.surename })
        }
      })
    },
    deleteUser (id) {
      const response = server.deleteUser(id)
      if (response.status === 'success') {
        this.dataTable = this.dataTable.filter(user => user.id !== id)
      } else if (response.status === 'error') {
        const deletingUser = this.dataTable.find(user => user.id === id)
        this.showError(`Ошибка при удалении user: ${deletingUser.name} ${deletingUser.sursname}`)
      }
    }
  }
}
</script>
