CREATE TABLE upvote (
	id uuid NOT NULL,
	guide_id uuid NOT NULL,
	user_id uuid NULL,
	guest_id uuid NOT NULL,
	created_at timestamp NOT NULL
);
