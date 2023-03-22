<template>
  <v-form
    ref="Form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="surename"
      :rules="surenameRules"
      label="Surename"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <div style="display: flex; justify-content: space-between;">
      <v-btn style="color: white;"
        :disabled="!valid"
        :color="!isEditMode ? 'success' : 'blue'"
        class="mr-4"
        @click="validate"
      >
        {{ buttonTitle }}
      </v-btn>
      <div>
        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Сбросить
        </v-btn>

        <v-btn
          @click="close"
        >
          Закрыть
        </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>

export default {
  name: 'TheForm',
  props: {
    isOpenForm: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Обязательно к заполнению',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    surename: '',
    surenameRules: [
      v => !!v || 'Обязательно к заполнению'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Обязательно к заполнению',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    editUser: {}
  }),
  computed: {
    buttonTitle () {
      return this.isEditMode ? 'Редактировать' : 'Сохранить'
    },
    isEditMode () {
      return Boolean(this.editUser.id)
    }
  },
  watch: {
    isOpenForm (value) {
      if (!value) {
        this.reset()
        this.editUser = {}
      }
    }
  },
  methods: {
    validate () {
      if (!this.$refs.Form.validate()) return

      this.isEditMode ? this.edit() : this.save()
    },
    edit () {
      const editedUser = {
        id: this.editUser.id,
        name: this.name,
        surename: this.surename,
        email: this.email
      }
      this.$emit('edit', editedUser)

      this.close()
    },
    save () {
      const idByDate = new Date()

      const newUser = {
        id: String(idByDate.getTime()),
        name: this.name,
        surename: this.surename,
        email: this.email
      }

      this.$emit('save', newUser)

      this.close()
    },
    setEditUser (user) {
      this.editUser = user
      this.name = user.name
      this.surename = user.surename
      this.email = user.email
    },
    reset () {
      this.$refs.Form.reset()
    },
    close () {
      this.$emit('close')

      this.reset()
    }
  }
}
</script>
