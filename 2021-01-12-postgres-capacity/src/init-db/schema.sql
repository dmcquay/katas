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
