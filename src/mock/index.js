import uuidV4 from "uuid/v4";

const dayData = [
  {
    id: uuidV4(),
    date: '2020-4-2', // 时间
    price: 1200, // 价格
    surplus: true,  // 是否有余位
    priceInfo: {
      adult: 3180,  // 成年人
      childrenHasBed: 3980, //儿童占床
      children: 3980, // 儿童不占床
      single: 3980  // 单间
    }
  }, {
    id: uuidV4(),
    date: '2020-4-3', // 时间
    price: 1200, // 价格
    surplus: true,  // 是否有余位
    priceInfo: {
      adult: 3180,  // 成年人
      childrenHasBed: 3980, //儿童占床
      children: 3980, // 儿童不占床
      single: 3980  // 单间
    }
  }, {
    id: uuidV4(),
    date: '2020-4-8', // 时间
    price: 1200, // 价格
    surplus: true,  // 是否有余位
    priceInfo: {
      adult: 3180,  // 成年人
      childrenHasBed: 3980, //儿童占床
      children: 3980, // 儿童不占床
      single: 3980  // 单间
    }
  }
];

const monthData = {
  current: 4,
  list: [
    {
      id: 4,
      label: '4月',
      info: '￥1810/人'
    }, {
      id: 5,
      label: '5月',
      info: '￥2120/人'
    }, {
      id: 6,
      label: '6月',
      info: '电询'
    }, {
      id: 7,
      label: '7月',
      info: ''
    }, {
      id: 8,
      label: '8月',
      info: ''
    }, {
      id: 9,
      label: '9月',
      info: ''
    }, {
      id: 10,
      label: '10月',
      info: ''
    }, {
      id: 11,
      label: '11月',
      info: ''
    }, {
      id: 12,
      label: '12月',
      info: ''
    }
  ]
}

export {
  dayData,
  monthData
}