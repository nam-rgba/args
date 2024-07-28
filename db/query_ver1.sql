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

DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS Job;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Company;
