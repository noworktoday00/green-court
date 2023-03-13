<template>
  <ProductBanner />
  <div class="gradient-bg">
    <div class="container py-16 py-md-24">
      <div class="row row-cols-1 row-cols-md-2 mt-48">
        <div class="col px-16 px-md-80">
          <div class="fs-2 text-white mt-md-48">
        進行等級測驗
        <br>
        讓我們能共提供您更適合的方案
      </div>
          <p class="fs-6 text-white my-24">
            在這邊提供一個簡單的等級程度評量，
            還麻煩依照現在打球的狀況與經驗，仔細回答問題，
            我們可以依照您答題的結果進行球團以及教練的相關比對，
            協助您進行媒合，讓您能夠擁有更愉快的運動體驗！
          </p>
          <div class="d-grid">
            <a class="btn btn-outline-light"
           data-bs-toggle="modal" href="#quiz-1"
          role="button">開始測驗</a>
          </div>
        </div>
        <div class="col mt-48 mt-md-0">
          <img class="img-fluid"
               src="@/assets/badminton_smash_tips_tricks-1024x664.jpg" alt="">
        </div>
      </div>
      <!-- 測驗 modal -->
      <div class="modal fade"
           :id="item.id" aria-hidden="true"
           :aria-labelledby="item.id" tabindex="-1"
           v-for="item in quizModalData" :key="item.id">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content gradient-bg text-white">
            <div class="modal-header">
              <h5 class="modal-title" :id="item.id">{{ item.title }}</h5>
              <a href="#" data-bs-dismiss="modal" aria-label="Close">
                <i class="bi bi-x fs-3 text-white"></i>
              </a>

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
                <p  v-if="item.next && tempScore == 0" class="fs-3 mx-auto">
                  測驗開始
                </p>
              <button v-if="item.pre" class="btn btn-outline-light"
                      :data-bs-target="item.pre"
                      data-bs-toggle="modal">
                上一題
              </button>
              <button v-if="item.next && !tempScore == 0" class="btn btn-outline-light"
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
        <a href="#" data-bs-dismiss="modal" aria-label="Close">
          <i class="bi bi-x fs-3 text-white"></i>
        </a>
      </div>
      <div class="modal-body">
        <p class="fs-2">您的等級是 Lv.6</p>
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

<script>
import ProductBanner from '@/components/ProductBanner.vue';

export default {
  components: {
    ProductBanner,
  },
  data() {
    return {
      tempScore: 0,
      scoreCount: [],
      totalScore: 0,
      // 題庫
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
          quiz: '2. 您平常進行羽球活動的頻率為何？',
          pre: '#quiz-1',
          next: '#quiz-3',
          option: [
            {
              name: 'option1',
              text: '開玩笑，每天打啊，不打會不舒服啊！',
              value: 4,
            },
            {
              name: 'option2',
              text: '平均大概一週一次吧',
              value: 2,
            },
            {
              name: 'option3',
              text: '一週應該有打個 3~5 天',
              value: 3,
            },
            {
              name: 'option4',
              text: '哎呀，我打球時間其實沒有固定說...',
              value: 1,
            },
          ],
        },
        {
          title: '第三題',
          id: 'quiz-3',
          quiz: '3. 最想在羽球上面有所進步的技巧是什麼呢?',
          pre: '#quiz-2',
          next: '#quiz-4',
          option: [
            {
              name: 'option1',
              text: '羽球基本技術（如正手、反手、步法等)',
              value: 1,
            },
            {
              name: 'option2',
              text: '網前技術（如上網、反網、撲球等）',
              value: 2,
            },
            {
              name: 'option3',
              text: '中場技術（如控球、跑位、變化球等）',
              value: 4,
            },
            {
              name: 'option4',
              text: '後場技術（如快攻、高追球、防守等）',
              value: 3,
            },
            {
              name: 'option5',
              text: '戰術應用（如配合、進攻、防守等）',
              value: 5,
            },
          ],
        },
        {
          title: '第四題',
          id: 'quiz-4',
          quiz: '4. 平常有上過羽球教練課嗎？',
          pre: '#quiz-3',
          next: '#quiz-5',
          option: [
            {
              name: 'option1',
              text: '我還沒有上過教練課，都是自己摸索的',
              value: 1,
            },
            {
              name: 'option2',
              text: '我從打球到現在大概上過 1~5 次教練課而已',
              value: 2,
            },
            {
              name: 'option3',
              text: '我有固定每個月大概 2 次教練課的安排',
              value: 3,
            },
            {
              name: 'option4',
              text: '我每週都有一次以上的教練課',
              value: 4,
            },
            {
              name: 'option5',
              text: '我每週會上 2~3 次以上的教練課',
              value: 5,
            },
          ],
        },
        {
          title: '第五題',
          id: 'quiz-5',
          quiz: '5. 通常都參與什麼樣的羽球活動呢？',
          pre: '#quiz-4',
          next: '#quiz-6',
          option: [
            {
              name: 'option1',
              text: '我是跟同事或朋友一起的簡單社團活動',
              value: 1,
            },
            {
              name: 'option2',
              text: '目前都在上教練課，很少出去打球耶',
              value: 2,
            },
            {
              name: 'option3',
              text: '我喜歡報臨打團，跟不同的人打球',
              value: 3,
            },
            {
              name: 'option4',
              text: '我其實我有參加過業餘的杯賽哦！',
              value: 4,
            },
            {
              name: 'option5',
              text: '打一個專業的，我曾經打過排名賽',
              value: 5,
            },
          ],
        },
        {
          title: '第六題',
          id: 'quiz-6',
          quiz: '6. 在這項運動當中你有什麼樣的目標呢？',
          pre: '#quiz-5',
          next: '#quiz-7',
          option: [
            {
              name: 'option1',
              text: '就是一個跟朋友一起好玩的運動',
              value: 1,
            },
            {
              name: 'option2',
              text: '我享受那種跑動與策略的感覺',
              value: 2,
            },
            {
              name: 'option3',
              text: '打羽球就是廝殺啊，熱愛擊敗別人的感覺',
              value: 3,
            },
            {
              name: 'option4',
              text: '沒想過耶，我只對自己能不能一直進步比較在意',
              value: 4,
            },
            {
              name: 'option5',
              text: '我想去比賽！我想去比賽！我想去比賽！',
              value: 5,
            },
          ],
        },
        {
          title: '第七題',
          id: 'quiz-7',
          quiz: '7. 對戰雙打跑位有什麼樣的認知呢？',
          pre: '#quiz-6',
          next: '#quiz-8',
          option: [
            {
              name: 'option1',
              text: '有球過來我一定會跑去打，不落地最重要',
              value: 1,
            },
            {
              name: 'option2',
              text: '我能理解相對的空擋是什麼意思，並且補上去',
              value: 2,
            },
            {
              name: 'option3',
              text: '進攻跟防守的時候，我能判斷應該如何移動，讓自己不會受迫',
              value: 3,
            },
            {
              name: 'option4',
              text: '我可以思考在進攻防守的過程中，怎麼讓對方跑出讓我方好進攻的位置',
              value: 4,
            },
          ],
        },
        {
          title: '第八題',
          id: 'quiz-8',
          quiz: '8. 感覺一下在打高遠球的時候，最出力的地方是哪裡呢？',
          pre: '#quiz-7',
          next: '#quiz-9',
          option: [
            {
              name: 'option1',
              text: '哈哈，我沒有思考過這個問題耶',
              value: 1,
            },
            {
              name: 'option2',
              text: '我會用整個手臂揮動，讓球又高又遠',
              value: 2,
            },
            {
              name: 'option3',
              text: '真的出力的地方應該是前臂吧',
              value: 3,
            },
            {
              name: 'option4',
              text: '好像是打到球的瞬間運用手指與手腕的方式擊球',
              value: 4,
            },
          ],
        },
        {
          title: '第九題',
          id: 'quiz-9',
          quiz: '9. 如果我的站位在前排，有一顆球用一個有點尷尬好像打得到又好像打不到的高度飛來，你會怎麼做呢？',
          pre: '#quiz-8',
          next: '#quiz-10',
          option: [
            {
              name: 'option1',
              text: '跳起來，我一定可以的',
              value: 1,
            },
            {
              name: 'option2',
              text: '後退啊，退了就可以打到了',
              value: 2,
            },
            {
              name: 'option3',
              text: '會依照上一球隊友可能在的位置，判斷我到底要退後還是蹲下',
              value: 3,
            },
            {
              name: 'option4',
              text: '那麼勉強了，這種交給後面處理就好，沒問題的',
              value: 4,
            },
          ],
        },
        {
          title: '第十題',
          id: 'quiz-10',
          quiz: '10. 你知道啟動步、墊步、橫向移動的技巧嗎？',
          pre: '#quiz-9',
          option: [
            {
              name: 'option1',
              text: '不太清楚耶，這些分別是什麼啊？',
              value: 1,
            },
            {
              name: 'option2',
              text: '大概知道，但不太熟悉',
              value: 2,
            },
            {
              name: 'option3',
              text: '在跑動上基本上步伐都可以做到，但有時候還是會來不及',
              value: 3,
            },
            {
              name: 'option4',
              text: '所有跑動方式都沒問題，我都可以做到啟動步，並且等對方擊球之後才開始移動',
              value: 4,
            },
          ],
        },
      ],
      resultData: [
        {
          title: 'Lv.1',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.2',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.3',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.4',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.5',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.6',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.7',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.8',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.9',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.10',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.11',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
        },
        {
          title: 'Lv.12',
          content: '看來，您是個小萌新呢！歡迎加入打羽球的行列，這裡是個友善的羽球環境，希望你能夠在這邊的活動當中找尋到羽球的快樂！',
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
