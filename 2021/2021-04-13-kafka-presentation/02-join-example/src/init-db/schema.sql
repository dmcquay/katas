CREATE TABLE content (
	content_id TEXT NOT NULL,
	content_type TEXT NOT NULL,
	title TEXT NOT NULL
);
CREATE UNIQUE INDEX content_pk ON content (content_id, content_type);