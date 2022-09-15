export const updateVehicle = (vehicle: Vehicle, elapsedMillis: number):Vehicle => {
  return {
    ...vehicle,
    position: vehicle.position + (vehicle.speedInMetersPerSecond * elapsedMillis / 1000)
  }
}