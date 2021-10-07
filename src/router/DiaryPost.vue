<template>
  <div class="container">
    <div class="inner">
      <form action="#" method="post">
        <h2>일기작성</h2>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="제목">
          <label for="floatingInput">제목</label>
        </div>
        <textarea name="" id="" cols="100" rows="15"></textarea>
        <div class="button-inner">
          <button type="button" class="btn btn-secondary">작성 취소</button>
          <button type="submit" class="btn btn-primary">작성 완료</button>
        </div>
      </form>
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
  height: calc(100vh - #{$logoHeight} - #{$footerHeight} - 13px);
  .inner {
    width: 100%;
    text-align: left;
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
    textarea {
      width: 100%;
      border-bottom: 1px solid $gray-500;
      margin-bottom: 20px;
      outline: transparent;
    }
    .button-inner {
      display: flex;
      justify-content: space-between;
      .btn-secondary,
      .btn-primary {
        width: 48%;
        height: 50px;
      }
    }
  }
}
</style>