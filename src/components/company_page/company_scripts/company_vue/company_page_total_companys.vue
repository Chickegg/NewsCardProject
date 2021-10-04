<template>
  <div class="total_company_container">
    <h3 class="title">기업 목록</h3>
    <ul class="companys">
      <li v-for="( company, i ) in companys[pageNum - 1]" v-bind:key="i">
        <img :src="company.logo" alt="">
        <button class="subscribe_button" v-on:click ="clickButton">구독</button>
      </li>
    </ul>
    <div class="page_btn_cover">
      <button class="prev_button" v-on:click="movePage">이전</button>
      <span class="page_count">{{ pageCount }}</span>
      <button class="next_button" v-on:click="movePage">다음</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'companys' : Array
  },
  data() {
    return{
      pageNum : 1,
    }
  },
  computed: {
    pageCount() {
      let total = this.companys.length;
      return `${this.pageNum} / ${total}`
    }
  },
  methods: {
    clickButton() {
      alert("구독되었습니다.")
    },
    movePage(event) {
      let btnClass = event.target.className;
      let nextButton = "next_button";

      if (btnClass === nextButton) {
        if ( this.pageNum < this.companys.length ) {
          this.pageNum += 1;
        }
      } else {
        if ( this.pageNum > 1) {
          this.pageNum -= 1;
        }
      }
    }
  }
}
// - 기업의 로고에 마우스를 올렸을 경우 버튼이 나타나는가?
//     (구독한 기업 : 구독취소 / 구독하지 않은 기업 : 구독하기) 
// - 기업의 로고의 버튼을 클릭했을 경우 구독 or 구독취소 기능이 정상적으로 작동하는가?
// - 기업페이지 내에서 최상단의 검색창을 통해 검색했을 경우 해당 기업의 로고가 나타나는가?
// - 페이지 이동버튼을 클릭 시 회사 데이터들이 변화하는가?
// - 현재 페이지가 "현재페이지 번호 / 총 페이지 수" 로 잘 보이는가?

// 논의사항
// - 기업페이지 내부 기업명 검색 목적의 작은 검색창이 별도로 존재해야 하는가?
// - 기업페이지 내부에서 나의 구독기업을 바 형식으로 보여주는가?

// issue
// - 아래로 스크롤시 일정 수준까지는 잘 진행이 되나 계속해서 내릴 시 전체페이지의 스크롤이 내려감으로써
// - 검색창과 메뉴가 사라지는 현상 발생 (position을 absolute와 같은걸로 선언해야 하는가?)
</script>

<style>
  .total_company_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1000px;

    overflow: scroll;
  }
  .total_company_container .title {
    font-size: 35px;
    font-weight: bold;

    margin-top: 20px;
  }
  .total_company_container .companys {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
  }
  .total_company_container .companys li {
    width: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0;
    border: 1px solid gray;
    border-radius: 25px;
    margin: 20px;
  }
  .total_company_container .companys li img {
    width: 300px;
    height: 300px;
    display: block;
    
    border-radius: 25px;
  }
  .total_company_container .companys li .subscribe_button {
    display: none;
  }
  .total_company_container .companys li:hover {
    opacity: 0.5;
  }
  .total_company_container .companys li:hover .subscribe_button {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;

    border-radius: 25px;

    font-size: 30px;
    font-weight: bold;
  }
  .page_btn_cover {
    display: flex;
    align-items: center;

    font-size: 20px;
  }
  .page_btn_cover button {
    width:auto;
    height: auto;

    font-size: inherit;

    border: 1px solid black;
    margin: 0 10px;
  }
</style>
