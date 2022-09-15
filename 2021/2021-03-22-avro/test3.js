class MyClass {
  constructor() {
    this.name = 'Dustin'
  }
}

const dust = new MyClass()

console.log({
  dust,
  dustJsonParsed: JSON.parse(dust)
})