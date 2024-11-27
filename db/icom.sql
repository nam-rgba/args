use icom;

create table Follow (
	id int,
    user_id varchar(100),
    company_id varchar(100)
);

create table review (
	id varchar(100),
    user_id varchar(100),
	company_id varchar(100),
    title text,
    overall int,
    work_life int,
    benefit int,
    trainning int, 
    culture int,
    workspace int,
    likes text,
    dislike text,
    recommend boolean
)