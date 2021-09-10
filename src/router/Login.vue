<template>
  <div class="container">
    <div class="inner">
      <h2>Login</h2>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="아이디">
        <label for="floatingInput">아이디</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="비밀번호">
        <label for="floatingPassword">비밀번호</label>
      </div>
      <button class="btn btn-secondary">로그인</button>
      <button class="btn btn-secondary">아이디 / 비밀번호 찾기</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - #{$logoHeight} - #{$footerHeight});
  .inner {
    width: 430px;
    text-align: center;
    h2 {
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      height: 50px;
      padding: 10px 15px;
      margin-bottom: 15px;
      border-color: transparent;
      border-bottom: 1px solid $gray-500;
      box-sizing: border-box;
      &.form-control:focus {
        outline: transparent;
      }
    }
    .btn-secondary {
      width: 100%;
      height: 50px;
      margin-bottom: 10px;
      //border-radius: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>