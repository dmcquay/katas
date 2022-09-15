const { v4 } = require("uuid");

const randItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

const planIds = [
  "plan1",
  "plan1",
  "plan1",
  "plan1",
  "plan1",
  "plan1",
  "plan1",
  "plan1",
  "plan1",
  "plan2",
  "plan3",
  "plan4",
];

const main = async () => {
  for (let i = 0; i < 1000000; i++) {
    console.log([v4(), randItem(planIds), v4(), v4(), v4(), v4()].join(","));
  }
};

main();

/*
while true; do node print_copy.js | docker-compose exec -T db psql -U postgres postgres -c 'COPY test (id,plan_id,a,b,c,d) FROM STDIN WITH (FORMAT csv)'; done
*/
