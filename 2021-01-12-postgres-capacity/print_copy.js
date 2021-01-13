const { v4 } = require('uuid')

const randItem = (items) => {
  return items[Math.floor(Math.random() * items.length)]
}

const planIds = [
  'plan1',
  'plan1',
  'plan1',
  'plan1',
  'plan1',
  'plan1',
  'plan1',
  'plan1',
  'plan1',
  'plan2',
  'plan3',
  'plan4'
]

const main = async () => {
  for (let i = 0; i < 1000000; i++) {
    console.log([v4(), randItem(planIds), v4(), v4(), v4(), v4()].join(','))
  }
}

main()

/*
echo 'b184e722-a640-475e-b52f-407145cbf216,a0ec8c47-5e20-4425-8590-f514e892fedb,7c799c58-7f88-4587-89f9-8b23d2595f53,24acffea-030e-464a-a2c5-6554c020bbf5,pre,0a7b7cff-9fdf-4733-bcab-437a18ca7c10,e7c0452d-7b44-41bd-92e1-0b6f56806e45,24,4,b9ac0603-ce6a-49db-89ef-a67b2cfc6217,98,95,"{53,26,89,22}",15,2021-01-13T05:49:24.811Z,bogus,2021-01-13T05:49:24.811Z' | \
docker-compose exec -T db psql -U postgres postgres -c 'COPY dvs_criterion_ref_user_option_report (id,completion_report_id,user_handle,plan_id,pre_or_post_check,cr_topic_name,test_form_id,session_total_correct,session_total_incorrect,item_id,item_score,option_response,option_order_presented,form_attempt_count,last_updated,event_name,event_date) FROM STDIN WITH (FORMAT csv)'

node print_copy.js | docker-compose exec -T db psql -U postgres postgres -c 'COPY test (id,plan_id,a,b,c,d) FROM STDIN WITH (FORMAT csv)'

while true; do node print_copy.js | docker-compose exec -T db psql -U postgres postgres -c 'COPY test (id,plan_id,a,b,c,d) FROM STDIN WITH (FORMAT csv)'; done
*/