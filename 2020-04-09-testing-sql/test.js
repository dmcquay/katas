const { expect } = require('chai') 

const { GetAllOrders } = require('./order-service');

it('returns a list of order', async () => {
    const orderList = await GetAllOrders()
    expect(orderList).to.have.lengthOf(3)
})