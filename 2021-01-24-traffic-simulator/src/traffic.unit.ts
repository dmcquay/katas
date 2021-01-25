import {expect} from 'chai'
import {updateVehicle} from './traffic'

it('vehicle moving 1 meter per second moves 1 meter in 1 second', () => {
  const route:Route = {}
  const vehicle:Vehicle = {
    speedInMetersPerSecond: 1,
    position: 0,
    route
  }
  const elapsedMillis = 1000
  const updated = updateVehicle(vehicle, elapsedMillis)
  expect(updated).to.eql({
    speedInMetersPerSecond: 1,
    position: 1,
    route
  })
})

it('vehicle moving 5 meters per second moves 2.5 meters from a non-zero starting position in .5 seconds', () => {
  const route:Route = {}
  const vehicle:Vehicle = {
    speedInMetersPerSecond: 5,
    position: 1.25,
    route
  }
  const elapsedMillis = 500
  const updated = updateVehicle(vehicle, elapsedMillis)
  expect(updated).to.eql({
    speedInMetersPerSecond: 5,
    position: 3.75,
    route
  })
})

it('vehicle approaching a slower vehicle will slow down', () => {
  const route:Route = {}
  const vehicle:Vehicle = {
    speedInMetersPerSecond: 5,
    position: 1.25,
    route
  }
  const elapsedMillis = 500
  const updated = updateVehicle(vehicle, elapsedMillis)
  expect(updated).to.eql({
    speedInMetersPerSecond: 5,
    position: 3.75,
    route
  })
})