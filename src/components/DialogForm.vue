<template>
  <div class="text-center">
    <v-dialog
      v-model="showDialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ formTitle }} User
        </v-card-title>

        <v-card-text>
          <Form ref="Form" @close="showDialog = false"
          @save="newUser => $emit('saveUser', newUser)"
          @edit="editedUser => $emit('updateUser', editedUser)"
          :isOpenForm="showDialog"
          ></Form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ToggleButton :buttonTitle="buttonTitle + ' форму'"
      @click="toggleVisibleForm"
      >
    </ToggleButton>
  </div>
</template>

<script>
import Form from '@/components/Form'
import ToggleButton from '@/components/common/Button'

export default {
  name: 'DialogForm',
  components: {
    Form,
    ToggleButton
  },
  data () {
    return {
      showDialog: false,
      isEditMode: false
    }
  },
  computed: {
    buttonTitle () {
      return this.showDialog ? 'Закрыть' : 'Открыть'
    },
    formTitle () {
      return this.isEditMode ? 'Редактирование' : 'Создание'
    }
  },
  watch: {
    showDialog (value) {
      if (!value) {
        this.isEditMode = false
      }
    }
  },
  methods: {
    openEditForm (user) {
      this.isEditMode = true
      this.toggleVisibleForm()
      this.$nextTick(() => this.$refs.Form.setEditUser(user))
    },
    toggleVisibleForm () {
      this.showDialog = !this.showDialog
    }
  }
}
</script>
