CREATE TABLE "order" (
    id TEXT NOT NULL,
    amount_cents INT NOT NULL,
    created_at Timestamp NOT NULL
);

INSERT INTO "order" (id, amount_cents, created_at) VALUES
('id-1', 1256, '2020-04-10'), ('id-2', 5489, '2020-04-02'), ('id-3', 625, '2020-04-03'), ('id-3', 1625, '2020-04-05');;