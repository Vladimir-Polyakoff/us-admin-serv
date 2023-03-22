<template>
  <v-card
    class="nav-bar overflow-hidden"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in navBarList" :key="item.id"
          @click="toPath(item)">
            <v-list-item-icon >
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
    group: null,
    navBarList: [
      {
        id: 1,
        path: '/',
        name: 'UserTable',
        title: 'UserTable',
        icon: 'mdi-home'
      },
      {
        id: 2,
        path: '/dragble-words',
        name: 'DragbleWords',
        title: 'DragbleWords',
        icon: 'mdi-account'
      },
      {
        id: 3,
        path: '/checkbox',
        name: 'Checkbox',
        title: 'Checkbox',
        icon: 'mdi-account'
      }
    ]
  }),
  methods: {
    toPath (item) {
      if (this.$router.currentRoute.name === item.name) return

      this.$router.push(item.path)
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-bar {
    height: 200px;
    width: 100%;
    margin-bottom: -120px;
  }
  ::v-deep .v-overlay__scrim {
    opacity: 0 !important;
  }
</style>
