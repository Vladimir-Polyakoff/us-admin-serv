<template>
  <div>
    <ErrorDialog v-show="showError"></ErrorDialog>
    <NavBar></NavBar>
    <router-view style="padding: 32px; position: relative; min-height: 30vh;
    background: white;"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ErrorDialog from '@/components/ErrorDialog'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar,
    ErrorDialog
  },
  computed: {
    ...mapGetters(['showError'])
  }
}
</script>
