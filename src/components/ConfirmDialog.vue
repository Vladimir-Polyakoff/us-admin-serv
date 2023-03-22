<template>
  <div class="container-form">
    <form class="form">
      <div>
        <h1>Confirm Dialog Form</h1>
      </div>
      <div class="btn">
        <button style="background:red;"
          @click="emit('cansel')">Отмемнить
        </button>
        <button style="background:green;"
          @click="emit('confirm')">Подтвердить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog'
}
</script>

<style scoped lang="scss">
  .container-form {
    position: absolute;
    top: -32px;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.678);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form {
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
