import uuid from 'uuid'

export const fakeApi = {
  list: [
    {
      name: "Apple MacBook Pro 13.3英寸苹果笔记本电脑2018新款带Touch Bar定制版 银色 Z0VA0009U i7+16G+1TB固态",
      price: '21888.00',
      img: "http://img11.360buyimg.com/n1/jfs/t1/29274/22/14899/246421/5cad4618Ec2787c76/afc166465640e767.jpg",
      id: uuid()
    }
  ],
  shoppingCar: [],
  getList: function(callback) {
    callback(this.list)
  },

  getDetail: function(id, callback) {
    callback(
      this.list.filter((e) => e.id = id)[0]
    )
  },
  add: function(id, callback) {
    this.shoppingCar.push(
      this.list.filter(e => e.id === id)[0]
    )
    callback({code: 200, msg: "添加成功"})
  },
  getShoppingCar: function(callback) {
    callback(this.shoppingCar)
  }
}
