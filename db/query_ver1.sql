USE icom;

CREATE TABLE Company (
    company_id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    website VARCHAR(255),
    description TEXT,
    rating FLOAT,
    vote_quantity INT,
    image TEXT,
    avatar VARCHAR(255),
    industry varchar(50),
    country varchar(50),
    city varchar(50),
    ot boolean,
    techstack json,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE User (
    user_id VARCHAR(255) PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,	
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,		
    isverified boolean default false,
    yoe int default 0,
    roletag varchar(100) default	'',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE Review (
    review_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    company_id VARCHAR(36) NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
select * from user;


DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS Job;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Company;
