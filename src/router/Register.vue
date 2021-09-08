<template>
  <div class="container">
    <div class="inner">
      <h2>회원가입</h2>
      <input type="text" placeholder="아이디">
      <input type="password" placeholder="비밀번호">
      <input type="text" placeholder="이름">
      <input type="email" placeholder="이메일">
      <input type="tel" placeholder="휴대전화">
      <button class="btn btn-secondary">회원가입</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - #{$logoHeight} - #{$footerHeight});
  .inner {
    width: 430px;
    text-align: center;
    h2{
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
      &:focus {
        outline: transparent;
      }
    }
    .btn-secondary {
      width: 100%;
      height: 50px;
    }
  }
}
</style>