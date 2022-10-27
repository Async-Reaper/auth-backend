CREATE TABLE users (
    id serial primary key,
    name varchar(255),
    surname varchar(255),
    email varchar(255),
    login varchar (255),
    password varchar(255)
);

CREATE TABLE todos (
    id serial primary key,
    title varchar(255),
    content varchar(255),
    user_id integer,
    foreign key(user_id) references users (id)
);