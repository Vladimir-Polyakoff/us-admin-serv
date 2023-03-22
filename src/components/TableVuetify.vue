<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'TheTable',

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      search: '',
      headers: [
        {
          text: 'First name',
          align: 'start',
          // filterable: false,
          value: 'name'
        },
        { text: 'Last name', value: 'surename' },
        { text: 'E-mail', value: 'email' }
      ]
    }
  }
}
</script>
