<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-btn
    @click="$emit('click')"
    >
      {{buttonTitle}}
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'theButton',

  props: {
    buttonTitle: {
      type: String,
      required: true
    }
  }
}
</script>
