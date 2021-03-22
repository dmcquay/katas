const { v4 } = require("uuid");

const randPlanId = () => {
  return `plan-${Math.floor(Math.random() * 100)}`;
};

const main = async () => {
  for (let i = 0; i < 10000; i++) {
    console.log(
      [v4(), randPlanId(), `"{${randPlanId()},${randPlanId()}}"`].join(",")
    );
  }
};

main();

/*
while true; do node print_copy_channels_array.js | docker-compose exec -T db psql -U postgres postgres -c 'COPY channel_array (id,plan_id,all_plan_ids) FROM STDIN WITH (FORMAT csv)'; done
*/
