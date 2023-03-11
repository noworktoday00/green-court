<template>
    <div class="container-fluid px-0">
    <div class="page-banner"></div>
  </div>
  <div class="gradient-bg">
    <div class="container py-80">
      <div class="my-80">
        <a class="btn btn-outline-light"
           data-bs-toggle="modal" href="#quiz-1"
          role="button">開始測驗</a>
      </div>
      <div class="modal fade"
           :id="item.id" aria-hidden="true"
           :aria-labelledby="item.id" tabindex="-1"
           v-for="item in quizModalData" :key="item.id">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content gradient-bg text-white">
            <div class="modal-header">
              <h5 class="modal-title" :id="item.id">{{ item.title }}</h5>
              <button type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
            </div>
            <div class="modal-body px-48">
              {{ item.quiz }}
              <ul class="list-unstyled mt-24" v-for="option in item.option" :key="option.value + 1">
                <li>
                  <input class="form-check-input"
                         type="radio"
                         :name="item.id"
                         :id="option.name"
                         :value="option.value"
                         v-model="tempScore">
                  <label class=" ms-16 form-check-label"
                         :for="option.name">
                    {{ option.text }}
                  </label>
                </li>
              </ul>
            </div>
            <div class="modal-footer">
              <button v-if="item.pre" class="btn btn-outline-light"
                      :data-bs-target="item.pre"
                      data-bs-toggle="modal">
                上一題
              </button>
              <button v-if="item.next" class="btn btn-outline-light"
                      :data-bs-target="item.next"
                      data-bs-toggle="modal"
                      @click="countScore()">
                下一題
              </button>
              <button v-if="!item.next" class="btn btn-outline-light"
                      data-bs-target="#total-score"
                      data-bs-toggle="modal"
                      @click="countScore();countTotal()">
                看總分
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- 結算 modal -->
      <div class="modal fade"
           id="total-score"
           aria-hidden="true"
           aria-labelledby="total-score"
           tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content gradient-bg text-white">
      <div class="modal-header">
        <h5 class="modal-title" id="score-modal">恭喜您完成測驗</h5>
        <button type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
      </div>
      <div class="modal-body">
        您的得分是： {{ totalScore }}
      </div>
      <div class="modal-footer">
        <button type="button"
                      class="btn btn-outline-light"
                      data-bs-dismiss="modal"
                      aria-label="Close">結束測驗</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<style lang="scss">
.page-banner {
  background-image: url('@/assets/group_add_FILL0_wght400_GRAD0_opsz48.jpeg');
  background-size: cover ;
  background-position: center center;
  height: 240px;
}
</style>

<script>
export default {
  data() {
    return {
      tempScore: 0,
      scoreCount: [],
      totalScore: 0,
      quizModalData: [
        {
          title: '第一題',
          id: 'quiz-1',
          quiz: '1. 請問您的羽球年資有多少經驗呢？',
          next: '#quiz-2',
          option: [
            {
              name: 'option1',
              text: '我剛接觸羽球不到半年',
              value: 1,
            },
            {
              name: 'option2',
              text: '大概一年到兩年',
              value: 2,
            },
            {
              name: 'option3',
              text: '我已經打了三五年了',
              value: 3,
            },
            {
              name: 'option4',
              text: '經驗老道的五年以上',
              value: 4,
            },
          ],
        },
        {
          title: '第二題',
          id: 'quiz-2',
          quiz: '這是第2題',
          pre: '#quiz-1',
          option: [
            {
              name: 'option1',
              text: '選項一',
              value: 1,
            },
            {
              name: 'option2',
              text: '選項二',
              value: 2,
            },
            {
              name: 'option3',
              text: '選項三',
              value: 3,
            },
            {
              name: 'option4',
              text: '選項四',
              value: 4,
            },
          ],
        },
      ],
    };
  },
  methods: {
    countScore() {
      this.scoreCount.push(this.tempScore);
    },
    countTotal() {
      this.totalScore = this.scoreCount.reduce((a, b) => a + b);
      this.scoreCount = [];
    },
  },
  mounted() {
  },
};
</script>
