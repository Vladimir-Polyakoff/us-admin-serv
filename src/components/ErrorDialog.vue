<template>
  <div class="container-form">
    <form class="error-form">
      <div>
        <h1>{{ errorMessage }}</h1>
      </div>
      <div class="btn">
        <button style="background:grey;"
          @click.stop="$store.commit('setShowError', false)">закрыть
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ErrorDialog',
  computed: {
    ...mapGetters(['errorMessage'])
  }
}

</script>

<style scoped lang="scss">
  .container-form {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .error-form {
    border: 2px solid #26262680;
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px;
    background: white;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      button {
        width: 100px;
        height: 24px;
        border: 1px solid;
        border-radius: 4px;
        font-weight: 500;
      }
    }
  }
</style>
