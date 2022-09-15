const { v4 } = require("uuid");

const randPlanId = () => {
  return `plan-${Math.floor(Math.random() * 100)}`;
};

const planIds = ["plan1", "plan2", "plan3", "plan4"];

const main = async () => {
  for (let i = 0; i < 10000; i++) {
    console.log(
      [
        v4(),
        randPlanId(),
        `"""${randPlanId()}"" => TRUE, ""${randPlanId()}"" => TRUE"`,
      ].join(",")
    );
  }
};

main();

/*
while true; do node print_copy_channels_hstore.js | docker-compose exec -T db psql -U postgres postgres -c 'COPY channel_hstore (id,plan_id,old_plan_ids) FROM STDIN WITH (FORMAT csv)'; done
*/
