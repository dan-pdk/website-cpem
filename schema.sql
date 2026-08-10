DROP SCHEMA IF EXISTS cpem_schema CASCADE;
CREATE SCHEMA cpem_schema;

SET search_path TO cpem_schema;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,

    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(256) NOT NULL,
    is_admin BOOLEAN NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags (
    tag_id SERIAL PRIMARY KEY,

    name VARCHAR(30) UNIQUE NOT NULL,
    color VARCHAR(7)
);

CREATE TABLE topics (
    topic_id SERIAL PRIMARY KEY,

    title VARCHAR(100) NOT NULL,

    author_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE embeds (
    embed_id SERIAL PRIMARY KEY,

    title VARCHAR(100),
    file_reference TEXT UNIQUE NOT NULL,

    uploader_id INT REFERENCES users(user_id) ON DELETE SET NULL
);

CREATE TABLE materials (
    material_id SERIAL PRIMARY KEY,

    title TEXT UNIQUE NOT NULL,
    text_content TEXT,

    author_id INT REFERENCES users(user_id) ON DELETE SET NULL,

    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,

    text_content TEXT,

    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    parent_message_id INT REFERENCES messages(message_id) ON DELETE SET NULL,
    author_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    associated_topic_id INT REFERENCES topics(topic_id) ON DELETE CASCADE
);

CREATE TABLE material_tags (
    tag_id INT REFERENCES tags(tag_id) ON DELETE CASCADE,
    material_id INT REFERENCES materials(material_id) ON DELETE CASCADE,
    PRIMARY KEY (tag_id, material_id)
);

CREATE TABLE material_embeds (
    embed_id INT REFERENCES embeds(embed_id) ON DELETE SET NULL,
    material_id INT REFERENCES materials(material_id) ON DELETE CASCADE,
    PRIMARY KEY (embed_id, material_id)
);

CREATE TABLE topic_tags (
    tag_id INT REFERENCES tags(tag_id) ON DELETE CASCADE,
    topic_id INT REFERENCES topics(topic_id) ON DELETE CASCADE,
    PRIMARY KEY (tag_id, topic_id)
);