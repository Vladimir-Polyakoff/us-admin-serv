<template>
  <div>
    <v-checkbox @change="change" v-model="checkbox">
    </v-checkbox>
    <ConfirmDialog @confirm="confirm" @cansel="showDialog = false" v-show="showDialog"></ConfirmDialog>
  </div>
</template>

<script>
import ConfirmDialog from '@/components/ConfirmDialog'

export default {
  name: 'TheCheckbox',
  components: {
    ConfirmDialog
  },
  data () {
    return {
      checkbox: false,
      showDialog: false
    }
  },
  methods: {
    change () {
      if (this.checkbox) {
        this.showDialog = true
      }
      // console.log(this.$refs)
      // this.checkbox && this.$refs.ConfirmDialog.openDialog()
    },
    confirm () {
      console.log('Checkbox : on')
      this.showDialog = false
    }
  }
}
</script>
