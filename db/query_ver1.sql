USE icom;


CREATE TABLE Company (
    company_id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    industry VARCHAR(255),
    website VARCHAR(255),
    description TEXT,
    rating FLOAT,
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
    roletag varchar(36) default	'',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
ALTER TABLE user MODIFY user_id VARCHAR(36);

drop table if exists user

alter table user
modify user_id varchar(100) not null;





CREATE TABLE Review (
    review_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    company_id VARCHAR(36) NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (company_id) REFERENCES Company(company_id)
);

CREATE TABLE Job (
    job_id VARCHAR(36) PRIMARY KEY,
    company_id VARCHAR(36) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    salary DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES Company(company_id)
);


DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS Job;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Company;
