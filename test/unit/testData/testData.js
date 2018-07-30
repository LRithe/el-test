const goodsData = [
  {
    skuId: 1,
    spuId: '1a',
    spuName: '烤鸭',
    stock: 20,
    price: 100,
    pintuanPrice: 200
  }, {
    skuId: 2,
    spuId: '1a',
    spuName: '鸡腿',
    stock: 20,
    price: 100,
    pintuanPrice: 200
  }, {
    skuId: 31,
    spuId: '1a',
    spuName: '天津麻花',
    stock: 20,
    price: 100,
    pintuanPrice: 200
  }
]

const addGoodsData = [
  {
    skuId: 31,
    spuId: '1a',
    spuName: '天津麻花',
    stock: 20,
    price: 100,
    pintuanPrice: 200
  }, {
    skuId: 3,
    spuId: '1a',
    spuName: '夏威夷果',
    stock: 20,
    price: 100,
    pintuanPrice: 200
  }
]

const campaignData = {
  campaignName: 'test',
  startTime: Date.parse(new Date()) + 10000000,
  endTime: Date.parse(new Date()) + 20000000,
  teamValid: 36000,
  peopleNum: 20,
  goodsData: [
    {spuId: '3', skuId: '34dfs', spuName: 'test1', price: 20, stock: 200, pintuanPrice: 16},
    {spuId: '2', skuId: '3564dfs', spuName: 'test3', price: 22, stock: 220, pintuanPrice: 26}
  ]
}

const initCampaignData = {
  id: '8ad88c826300a5d3016300e6c5ed0001',
  name: 'test2',
  discount: 55,
  limitTimeSeconds: 86400,
  status: 'CREATED',
  limitNumber: 20,
  availablePeriod: {
    start: new Date(new Date().getTime() + 60000),
    end: new Date(new Date().getTime() + 960000)
  },
  productSkus: [
    {
      id: '0',
      salePrice: 100,
      netqty: 200,
      completedTeamsCount: 1,
      ongoingTeamsCount: 2,
      product: {
        id: 'a1',
        name: '商品0/SKU1'
      }}, {
      id: '1',
      salePrice: 200,
      netqty: 100,
      completedTeamsCount: 2,
      ongoingTeamsCount: 2,
      product: {
        id: 'a23',
        name: '商品1/SKU2',
      }}
  ]
}

const spuData = [
  {
    spuId: '3ABF',
    spuName: 'test',
    skuData: [{
      spuId: '3ABF',
      spuName: 'test',
      skuId: '4r23',
      img: 'http://iph.href.lu/200x200',
      price: 180,
      stock: 360
    }]}, {
    spuId: 'aABF',
    spuName: 'test1',
    skuData: [{
      spuId: '4ABF',
      spuName: 'test1',
      skuId: '4e23',
      img: 'http://iph.href.lu/200x200',
      price: 200,
      stock: 400
    }]}, {
    spuId: '7ABF',
    spuName: 'test5',
    skuData: [{
      spuId: '7ABF',
      spuName: 'test5',
      skuId: '4tr23',
      img: 'http://iph.href.lu/200x200',
      price: 220,
      stock: 410
    }]}
]

const campaignListData = {
  totalElements: 4,
  content: [
    {
      id: '2c9288416416756901641b1df62b000f',
      name: 'test620',
      status: 'CREATED',
      completedTeamsCount: 0,
      ongoingTeamsCount: 0,
      availablePeriod: {
        start: '2018-06-29T00:00+08:00',
        end: '2018-06-30T00:00+08:00'
      }
    },
    {
      id: '2c9287e0640670e5016415e31d67000b',
      name: 'wqwweq',
      status: 'ENDED',
      completedTeamsCount: 1,
      ongoingTeamsCount: 10,
      availablePeriod: {
        start: '2018-06-11T00:00+08:00',
        end: '2018-06-20T00:00+08:00'
      }
    },
    {
      id: '2c9287e0640670e5016415acf8e10003',
      name: 'auto test campaign1',
      status: 'STARTED',
      completedTeamsCount: 4,
      ongoingTeamsCount: 0,
      availablePeriod: {
        start: '2018-06-19T09:33:34+08:00',
        end: '2118-06-02T00:00+08:00'
      }
    },
    {
      id: '2c9287e0640670e5016415accd7f0002',
      name: 'auto test campaign2',
      status: 'STOPPED',
      completedTeamsCount: 0,
      ongoingTeamsCount: 0,
      availablePeriod: {
        start: '2118-05-02T00:00+08:00',
        end: '2118-06-02T00:00+08:00'
      }
    }]
}

module.exports = {
  campaignData,
  goodsData,
  addGoodsData,
  initCampaignData,
  spuData,
  campaignListData
}
