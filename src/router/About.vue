<template>
  <div class="container">
    <section>
      <nav class="menu">
        <a href="javascript:void(0)"><fa :icon="['fas', 'bars']" /></a>
        <a href="javascript:void(0)"><fa :icon="['far', 'sticky-note']" /></a>
      </nav>
      <article class="profile">
        <img src="https://avatars.githubusercontent.com/u/74242937?v=4" alt="프로필 이미지">

        <h1>JaeHong Min</h1>
        <h2>Front-End</h2>
      </article>
      <ul class="contact">
        <li>
          <fa :icon="['fab', 'github']" class="icon" />
          <span><a href="https://github.com/JaeHong94" target="_blank">Visit My Github page.</a></span>
        </li>
        <li>
          <fa :icon="['fas', 'blog']" class="icon" />
          <span><a href="https://coonihong.tistory.com/" target="_blank">Visit My Blog page.</a></span>
        </li>
        <li>
          <fa :icon="['fas', 'envelope']" class="icon" />
          <span><a href="mailto:moonshin123@naver.com">moonshin123@naver.com</a></span>
        </li>
      </ul>
    </section>
    <section>
      <nav class="menu">
        <a href="javascript:void(0)"><fa :icon="['fas', 'bars']" /></a>
        <a href="javascript:void(0)"><fa :icon="['far', 'sticky-note']" /></a>
      </nav>
      <article class="profile">
        <img src="https://avatars.githubusercontent.com/u/76811291?v=4" alt="프로필 이미지">

        <h1>SeungHyeon Kim</h1>
        <h2>Back-End</h2>
      </article>
      <ul class="contact">
        <li>
          <fa :icon="['fab', 'github']" class="icon" />
          <span><a href="https://github.com/kaki5507" target="_blank">Visit My Github page.</a></span>
        </li>
        <li>
          <fa :icon="['fas', 'blog']" class="icon" />
          <span><a href="https://w-giraffe.tistory.com/" target="_blank">Visit My Blog page.</a></span>
        </li>
        <li>
          <fa :icon="['fas', 'envelope']" class="icon" />
          <span><a href="mailto:ckdbioksh@naver.com">ckdbioksh@naver.com</a></span>
        </li>
      </ul>
    </section>
    <section>
      <nav class="menu">
        <a href="javascript:void(0)"><fa :icon="['fas', 'bars']" /></a>
        <a href="javascript:void(0)"><fa :icon="['far', 'sticky-note']" /></a>
      </nav>
      <article class="profile">
        <img src="https://avatars.githubusercontent.com/u/68156400?v=4" alt="프로필 이미지">

        <h1>InGyu Hwang</h1>
        <h2>Android</h2>
      </article>
      <ul class="contact">
        <li>
          <fa :icon="['fab', 'github']" class="icon" />
          <span><a href="https://github.com/hwang434" target="_blank">Visit My Github page.</a></span>
        </li>
        <li>
          <fa :icon="['fas', 'blog']" class="icon" />
          <span><a href="https://codingpracticing.tistory.com/" target="_blank">Visit My Blog page.</a></span>
        </li>
        <li>
          <fa :icon="['fas', 'envelope']" class="icon" />
          <span><a href="mailto:inqbator@knou.ac.kr">inqbator@knou.ac.kr</a></span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: calc(100vh - #{$logoHeight} - #{$footerHeight});
  section {
    width: 340px;
    padding: 30px;
    background-color: #fff;
    margin: 50px auto;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    .menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-content: center;
      a{
        font-size: 20px;
        color: #666;
      }
    }
    .profile {
      width: 100%;
      text-align: center;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 50px;
        box-shadow: 5px 15px 30px rgba(173, 216, 230, 0.8);
      }
      h1 {
        font-weight: bold;
        font-size: 22px;
        line-height: 1;
        color: #555;
        margin-bottom: 5px;
      }
      h2 {
        font-weight: normal;
        font-size: 12px;
        color: #bbb;
        margin-bottom: 30px;
      }
    }
    .btnView {
      display: block;
      width: 180px;
      height: 32px;
      margin: 0 auto 20px;
      border-radius: 16px;
      font-weight: bold;
      font-size: 10px;
      color: #fff;
      line-height: 32px;
      text-align: center;
      background: #444 linear-gradient(45deg, #3acbcb, #29abbe);
      box-shadow: 5px 10px 20px rgba(0, 255, 255, 0.493);
    }
    .contact {
      margin-bottom: 25px;
      li {
        width: 100%;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        list-style: none;
        &:last-child {
          border-bottom: none;
        }
        .icon {
          width: 20%;
          text-align: center;
          color: #555;
          font-size: 15px;
          text-shadow: 2px 2px 2px #ddd;
        }
        span {
          font-weight: normal;
          font-size: 11px;
          letter-spacing: 1px;
          a{
            color: #555;
            text-decoration: none;
          }
        }
      }
    }
  }
  @include media-breakpoint-down(xl) {
    height: calc(100% - #{$logoHeight} - #{$footerHeight});
    flex-wrap: wrap;
  }
}
</style>