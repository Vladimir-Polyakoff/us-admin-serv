<template>
  <v-row justify="center">
    <v-dialog
      v-model="showDialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-text>Вы действительно хотите удалить user: </v-card-text>
        <v-card-text>{{ name }} {{ surename }} </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray darken-1"
            text
            @click="cansel"
          >
            Закрыть
          </v-btn>
          <v-btn
            color="warning darken-1"
            text
            @click="deleteUser"
          >
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false,
      id: null,
      name: '',
      surename: ''
    }
  },
  methods: {
    openDialog (user) {
      this.id = user.id
      this.name = user.name
      this.surename = user.surename
      if (this.id && this.name && this.surename) {
        this.showDialog = true
      }
    },
    cansel () {
      this.showDialog = false
      this.reset()
    },
    reset () {
      this.id = null
      this.name = ''
      this.surename = ''
    },
    deleteUser () {
      this.$emit('delete', this.id)
      this.showDialog = false
      this.reset()
    }
  }
}
</script>
