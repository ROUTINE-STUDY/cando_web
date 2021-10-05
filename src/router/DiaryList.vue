<template>
  <div class="container">
    <div class="inner">
      <div v-for="list in diaryList" :key="list.diaryNumber" class="diary-card">
        <div class="diary-info">
          <h2 class="title">{{ list.title }}</h2>
          <p>
            <span class="writer">{{ list.writer }}</span>
            <span class="date">{{ list.date }}</span>
          </p>
        </div>
        <p class="content">{{ list.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diaryList: [
        {
          title: 'title1',
          diaryNumber: 1,
          writer: '홍길동',
          content: 'accede',
          date: '2021-10-05',
          viewCount: 1
        },
        {
          title: 'title2',
          diaryNumber: 2,
          writer: '이순신',
          content: 'abased',
          date: '2021-10-05',
          viewCount: 2
        },
        {
          title: 'title3',
          diaryNumber: 3,
          writer: '세종대왕',
          content: 'abacus',
          date: '2021-10-05',
          viewCount: 3
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  .inner {
    display: flex;
    flex-direction: column;
    .diary-card {
      padding: 10px 5px;
      margin-bottom: 20px;
      border: 1px solid #d5d0d0;
      border-bottom: 1px solid #9d9a9a;
      border-radius: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      .diary-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        .writer {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>