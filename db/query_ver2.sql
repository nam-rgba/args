create database icom_review;
use icom_review;
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