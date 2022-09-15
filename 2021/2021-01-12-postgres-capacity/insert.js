const { v4 } = require('uuid')
const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres'
})

const randItem = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

const randInt = () => {
  return Math.floor(Math.random() * 100)
}

const preOrPost = ['pre', 'post']

const createEntity = () => {
  return {
    id: v4(),
    completion_report_id: v4(),
    user_handle: v4(),
    plan_id: v4(),
    pre_or_post_check: randItem(preOrPost),
    cr_topic_name: v4(),
    test_form_id: v4(),
    session_total_correct: randInt(),
    session_total_incorrect: randInt(),
    item_id: v4(),
    item_score: randInt(),
    option_response: randInt(),
    option_order_presented: [randInt(), randInt(), randInt(), randInt()],
    form_attempt_count: randInt(),
    last_updated: new Date().toISOString(),
    event_name: 'bogus',
    event_date: new Date().toISOString()
  }
}

const createEntities = (count) => {
  const ret = []
  for (let i = 0; i < count; i++) {
    ret.push(createEntity())
  }
  return ret
}

const insertBatch = async (entities) => {
  let i = 1
  const buildPlaceholdersLine = () => {
    const ret = [
      i++, i++, i++, i++, i++, i++, i++, i++, i++,
      i++, i++, i++, i++, i++, i++, i++, i++
    ].map(x => `$${x}`).join(',')
    return `(${ret})`
  }

  const sql = `
    INSERT INTO dvs_criterion_ref_user_option_report
    (${Object.keys(entities[0]).join(',')})
    VALUES
    ${entities.map(buildPlaceholdersLine).join(',\n')}
  `
  
  await pool.query(sql, entities.flatMap(e => Object.values(e)))
}

const main = async () => {
  const batchSize = 1000
  const total = 100000
  let completed = 0
  console.time('asdf')
  while (true) {
    await insertBatch(createEntities(batchSize / 8)),
    completed += batchSize
  }
  console.timeEnd('asdf')
  pool.end()
}

main()