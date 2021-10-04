import CompanyPageBar from './company_vue/company_page_bar.vue'
import CompanyPageSearch from './company_vue/company_page_search.vue'
import CompanyPageUserCompanys from './company_vue/company_page_user_companys.vue'
import CompanyPageTotalCompanys from './company_vue/company_page_total_companys.vue'

export default {
  components: {
    CompanyPageSearch,
    CompanyPageBar,
    CompanyPageUserCompanys,
    CompanyPageTotalCompanys,
  },
  data() {
    return {
      UserCompanys: [
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
      ],
      companys: [
        [
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
        ],
        [
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png", name: "쿠팡"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
          { logo: "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg", name: "네이버"},
          { logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png", name: "카카오"},
        ],
      ]
    }
  },
}