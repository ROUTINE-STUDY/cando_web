<template>
  <div class="container">
    <div class="inner">
      <form action="#" method="post">
        <h2>Login</h2>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="아이디">
          <label for="floatingInput">아이디</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="비밀번호">
          <label for="floatingPassword">비밀번호</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPasswordCheck" placeholder="비밀번호확인">
          <label for="floatingPasswordCheck">비밀번호확인</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingName" placeholder="이름">
          <label for="floatingName">이름</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingEmail" placeholder="이메일">
          <label for="floatingEmail">이메일</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPhone" placeholder="휴대전화">
          <label for="floatingPhone">휴대전화</label>
        </div>
        <button type="submit" class="btn btn-secondary">회원가입</button>
      </form>
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