export function getList( _, data) {
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
    admin: {
      title: '後台系統使用 vue3 + queaer 框架製作，各種需求功能開發，UIUX設計，串接API',
      type: 'LR',
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
    resolve(list);

  })

}