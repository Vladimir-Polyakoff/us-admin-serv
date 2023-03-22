<template>
    <table>
      <tr>
        <th style="width:27%">Name</th>
        <th style="width:27%">Surename</th>
        <th style="width:27%">E-mail</th>
        <th style="width:19%">Actions</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td style="width:27%" @click="openUser(item.id)">{{ item.name }}</td>
        <td style="width:27%" @click="openUser(item.id)">{{ item.surename }}</td>
        <td style="width:27%" @click="openUser(item.id)">{{ item.email }}</td>
        <td style="width:19%">
          <span @click="$emit('edit', item.id)" style="margin-right: 8px;">Редактировать</span>
          <span @click="$emit('delete', item.id)">Удалить</span>
        </td>
      </tr>
    </table>
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
  methods: {
    openUser (id) {
      this.$router.push({ name: 'UserId', params: { id } })
    }
  }
}
</script>

<style scoped lang="scss">
  table, tr {
    width: 100%;
  }

  td, th {
    text-align: start;
    height: 40px;
    border-bottom: 1px solid #262626;
    padding-left: 8px;
    &:not(:last-child){
      border-right: 1px solid rgba(0,0,0,05);
    }
  }
</style>
