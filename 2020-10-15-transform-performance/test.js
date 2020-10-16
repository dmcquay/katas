const entities = []

for (let i = 0; i < 10000; i++) {
  entities.push(buildEntity())
}

function buildEntity() {
  return {
    foo: 'bar',
    compoundKey: `${Math.random()}|${Math.random()}|${Math.random()}`
  }
}

function transformEntity(entity) {
  const [key1, key2, key3] = entity.compoundKey.split('|')
  return {
    ...entity,
    key1,
    key2,
    key3
  }
}

console.time('transform')
const mappedEntities = entities.map(transformEntity)
console.timeEnd('transform')