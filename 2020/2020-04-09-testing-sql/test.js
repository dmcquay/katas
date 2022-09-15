const { expect } = require('chai') 

const { GetAllOrders, GetAvgOrderAmountByDay } = require('./order-service');

it('returns a list of order', async () => {
    const orderList = await GetAllOrders()
    expect(orderList).to.have.lengthOf(4)
})

it('returns the avg amount per weekly day', async () => {
    const weeklyList = await GetAvgOrderAmountByDay()

    expect(weeklyList).to.eql([
    { averageOrderAmount: 1625, dayOfWeek: 0 },
    { averageOrderAmount: 941, dayOfWeek: 5 },
    { averageOrderAmount: 5489, dayOfWeek: 4 }
    ])
})