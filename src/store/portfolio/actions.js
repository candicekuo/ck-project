export function getContentList( _, data) {
  // 作品 detail data
  const opts = {
    taxbi: {
      title: '稅務系統使用 vue2 + queaer 框架製作符合設計稿的頁面，功能開發，串接API',
      type: '',
      classes: 'isShadow',
      list: [
        { imgPath: require('@/assets/img/tax0.png') },
        { imgPath: require('@/assets/img/tax1.png') },
        { imgPath: require('@/assets/img/tax2.png') },
        { imgPath: require('@/assets/img/tax3.png') },
        { imgPath: require('@/assets/img/tax4.png') },
        { imgPath: require('@/assets/img/tax5.png') },
        { imgPath: require('@/assets/img/tax6.png') },
        { imgPath: require('@/assets/img/tax7.png') },
        { imgPath: require('@/assets/img/tax8.png') },
        { imgPath: require('@/assets/img/tax9.png') },
      ],
    },
    mc: {
      title: '稅務系統使用 vue2 + queaer 框架製作符合設計稿的頁面，功能開發，串接API',
      type: '',
      classes: 'isShadow',
      list: [
        { imgPath: require('@/assets/img/mc1.png') },
        { imgPath: require('@/assets/img/mc2.png') },
        { imgPath: require('@/assets/img/mc3.png') },
        { imgPath: require('@/assets/img/mc4.png') },
        { imgPath: require('@/assets/img/mc5.png') },
        { imgPath: require('@/assets/img/mc6.png') },
        { imgPath: require('@/assets/img/mc7.png') },
      ],
    },
    kc: {
      title: '稅務系統使用 vue2 + queaer 框架製作符合設計稿的頁面，功能開發，串接API',
      type: '',
      classes: 'isShadow',
      list: [
        { imgPath: require('@/assets/img/kc1.png') },
        { imgPath: require('@/assets/img/kc2.png') },
        { imgPath: require('@/assets/img/kc3.png') },
        { imgPath: require('@/assets/img/kc4.png') },
        { imgPath: require('@/assets/img/kc5.png') },
        { imgPath: require('@/assets/img/kc6.png') },
      ],
    },
    sd: {
      title: '開獎系統使用 vue2 + queaer 框架製作符合設計稿的頁面，功能開發，串接API',
      type: '',
      classes: 'isShadow',
      list: [
        { imgPath: require('@/assets/img/sd0.png') },
        { imgPath: require('@/assets/img/sd1.png') },
        { imgPath: require('@/assets/img/sd2.png') },
        { imgPath: require('@/assets/img/sd3.png') },
        { imgPath: require('@/assets/img/sd4.png') },
        { imgPath: require('@/assets/img/sd5.png') },
        { imgPath: require('@/assets/img/sd6.png') },
      ],
    },
    admin: {
      title: '後台系統使用 vue3 + queaer 框架製作，各種需求功能開發，UIUX設計，串接API',
      type: '',
      classes: 'isShadow',
      list: [
        { imgPath: require('@/assets/img/adm5.png') },
        { imgPath: require('@/assets/img/adm6.png') },
        { imgPath: require('@/assets/img/adm7.png') },
        { imgPath: require('@/assets/img/adm8.png') },
        { imgPath: require('@/assets/img/adm9.png') },
        { imgPath: require('@/assets/img/adm10.png') },
        { imgPath: require('@/assets/img/adm11.png') },
        { imgPath: require('@/assets/img/adm12.png') },
        { imgPath: require('@/assets/img/adm13.png') },
        { imgPath: require('@/assets/img/adm14.png') },
        { imgPath: require('@/assets/img/adm15.png') },
        { imgPath: require('@/assets/img/adm16.png') },
        { imgPath: require('@/assets/img/adm17.png') },
      ],
    },
    ehr: {
      title: '系統介面設計，以扁平化風格為基礎設計',
      type: 'LR',
      classes: '',
      list: [
        { imgPath: require('@/assets/img/1hr-1.png') },
        { imgPath: require('@/assets/img/1hr-2.png') },
      ],
    },
    user: {
      title: '使用者介面與編輯頁面操作與狀態切換UI、UX的規劃設計示意圖',
      type: '',
      classes: 'isShadow',
      list: [
        { imgPath: require('@/assets/img/user1.png') },
        { imgPath: require('@/assets/img/user2.png') },
        { imgPath: require('@/assets/img/user3.png') },
        { imgPath: require('@/assets/img/user4.png') },
        { imgPath: require('@/assets/img/user5.png') },
        { imgPath: require('@/assets/img/user6.png') },
        { imgPath: require('@/assets/img/user7.png') },
      ],
    },
    banner: {
      title: '依照不同需求製作手繪、形象、產品、特賣不同風格的視覺設計',
      type: 'LR',
      classes: 'isShadow',
      list: [
        { imgPath: require('@/assets/img/b1.jpg') },
        { imgPath: require('@/assets/img/b2.jpg') },
        { imgPath: require('@/assets/img/b3.jpg') },
        { imgPath: require('@/assets/img/b4.jpg') },
        { imgPath: require('@/assets/img/b5.jpg') },
        { imgPath: require('@/assets/img/b6.jpg') },
        { imgPath: require('@/assets/img/b7.jpg') },
        { imgPath: require('@/assets/img/b8.jpg') },
        { imgPath: require('@/assets/img/b9.jpg') },
        { imgPath: require('@/assets/img/b10.jpg') },
      ],
    },
    pic: {
      title: '童裝的穿搭拍攝，以孩童給人活潑的印象為概念，拍攝出一系列的產品視覺',
      type: 'LR',
      classes: '',
      list: [
        { imgPath: require('@/assets/img/photo1.png') },
        { imgPath: require('@/assets/img/photo2.png') },
        { imgPath: require('@/assets/img/photo3.png') },
      ],
    },
    edition: {
      title: '購物網站版型設計，配合不同時期的活動需求，設計變動的版型，使其能夠更靈活運用',
      type: '',
      classes: '',
      list: [
        { imgPath: require('@/assets/img/type1.png') },
        { imgPath: require('@/assets/img/type2.png') },
        { imgPath: require('@/assets/img/type3.png') },
      ],
    },
  }

  return new Promise((resolve, reject) => {
    let list = {};
    Object.keys(opts).forEach(item => {
      if(item === data.name){
        list = opts[item];
      } 
    });
    if(Object.keys(list).length > 0){
    resolve(list);
    } else {
      reject('error')
    }
  })
}

export function getPortfolioList( _, ) {
  // 目錄資料
  const opts = {
    frontend: {
      title: `Vue Cli 前端專案功能開發 \/ 稅務系統 \/ 後台系統<br/>以下僅為作品展示用`,
      list: [
        {
          label: '稅務系統 - Taxbi',
          content: 'Vue2 + Quasar 框架，修改 UI 符合設計稿 ＆ 串接API',
          imgPath: require('@/assets/img/p13.png'),
          type: 1,
          name: 'taxbi',
        },
        {
          label: '稅務系統 - Merchant',
          content: 'Vue2 + Quasar 框架，修改 UI 符合設計稿 ＆ 串接API',
          imgPath: require('@/assets/img/p15.png'),
          type: 1,
          name: 'mc',
        },
        {
          label: '稅務系統 - Kodecomm',
          content: 'Vue2 + Quasar 框架，修改 UI 符合設計稿 ＆ 串接API',
          imgPath: require('@/assets/img/p16.png'),
          type: 1,
          name: 'kc',
        },
        {
          label: '開獎系統 - SmartDraw',
          content: 'Vue2 + Quasar 框架，修改 UI 符合設計稿 ＆ 串接API',
          imgPath: require('@/assets/img/p17.png'),
          type: 1,
          name: 'sd',
        },
        {
          label: '後台系統',
          content: 'Vue3 + Quasar 框架，自行設計 UIUX ＆ 串接API',
          imgPath: require('@/assets/img/p14.png'),
          type: 1,
          name: 'admin',
        },
      ],
    },
    web: {
      title: `網頁設計 \/ RWD響應式網頁 \/ EDM mail格式發送頁 \/ 測驗互動網頁<br/>以下僅為作品展示用`,
      list: [
        {
          label: '自訂功能系統頁面',
          content: '由視覺設計師設計出圖，主要負責切板，寫網頁互動功能的部分。',
          imgPath: require('@/assets/img/p1.png'),
          goto: './20190506-Custom-Resume/backstage.htm',
          type: 0,
        },
        {
          label: '測驗活動網站',
          content: '從主視覺開始發想，動畫安排、網頁互動設計至完成所有頁面。',
          imgPath: require('@/assets/img/p2.png'),
          goto: './2018-Cstar/cstar.htm',
          type: 0,
        },
        {
          label: '系統功能性介面',
          content: '系統改版，主要負責頁面操作流程、UI UX規劃，頁面設計切版製作。',
          imgPath: require('@/assets/img/p3.png'),
          goto: './recruit2019/default.htm',
          type: 0,
        },
        {
          label: '履歷表使用介面',
          content: '系統改版，主要負責頁面操作流程、UI UX規劃，頁面設計切版製作。',
          imgPath: require('@/assets/img/p4.png'),
          goto: './20190606_resume-preview/resume-preview.htm',
          type: 0,
        },
        {
          label: '使用者介面規劃',
          content: '系統改版，主要負責頁面操作流程規劃，UI UX規劃，頁面設計。',
          imgPath: require('@/assets/img/p5.png'),
          type: 1,
          name: 'user',
        },
        {
          label: '系統介面規劃',
          content: '系統改版，主要負責頁面操作流程規劃，UI UX規劃，頁面設計。',
          imgPath: require('@/assets/img/p6.png'),
          type: 1,
          name: 'ehr',
        },
        {
          label: 'EDM問卷頁面',
          content: '負責主要風格與信件、網頁切板製作。',
          imgPath: require('@/assets/img/p7.png'),
          goto: './ytu2017/index.html',
          type: 0,
        },
        {
          label: '信件發送格式',
          content: '重新規劃系統信件風格與呈現方式。',
          imgPath: require('@/assets/img/p8.png'),
          goto: './20180614_new_letter/letter8-2.htm',
          type: 0,
        },
      ],
    },
    flat: {
      title: `平面設計 \/ Banner 設計 \/ 商業攝影 \/ 版型設計</br>以下僅為作品展示用`,
      list: [
        {
          label: 'Banner 設計',
          content: '依不同的使用需求製作出適合的視覺設計',
          imgPath: require('@/assets/img/p10.png'),
          type: 1,
          name: 'banner',
        },
        {
          label: '商業攝影',
          content: '電商產品拍攝',
          imgPath: require('@/assets/img/p11.png'),
          type: 1,
          name: 'pic',
        },
        {
          label: '版型設計',
          content: '購物網站首頁規劃設計，配合不同需求調整使用',
          imgPath: require('@/assets/img/p12.png'),
          type: 1,
          name: 'edition',
        },
      ],
    },
  }
  return new Promise((resolve, reject) => {
    if(Object.keys(opts).length > 0){
      resolve(opts);
      } else {
        reject('error')
      }
  })
}

export function getPersonalInfo( _, ) {
  // 目錄左側資訊
  const opts = {
    name: 'Candice',
    add: 'Taiwan, Taipei',
    mail: 'candiceworker@gmail.com',
    phone: '0952 620 651',
    use: `<i class="bi bi-credit-card-2-front"></i> Web Frontend</br>Html、Scss、Jquery、Js ES6</br>Bootstrap、Vue.js、Quasar、Git</br>RWD 響應式網站</br>Photoshop、Illustrator、Figma`,
  }
  return new Promise((resolve, reject) => {
    if(Object.keys(opts).length > 0){
      resolve(opts);
      } else {
        reject('error')
      }
  })
}
