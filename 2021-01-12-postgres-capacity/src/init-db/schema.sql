CREATE TABLE test (
    id uuid,
    plan_id text,
    a uuid,
    b uuid,
    c text,
    d text
);
ALTER TABLE test SET UNLOGGED;

--ALTER TABLE test SET LOGGED;
--CREATE UNIQUE INDEX "test_pk" ON test(id uuid_ops);
--CREATE INDEX "test_plan_id" ON test(plan_id);

--ALTER TABLE test SET UNLOGGED;
--DROP INDEX "test_pk";
--DROP INDEX "test_plan_id";

create extension hstore;

CREATE TABLE channel_hstore (
	id text PRIMARY KEY,
	plan_id text,
	old_plan_ids hstore
);

CREATE TABLE channel_array (
	id text PRIMARY KEY,
	plan_id text,
	all_plan_ids text[]
);
-- CREATE INDEX channel_array_all_plan_ids_idx ON channel_array(all_plan_ids array_ops);