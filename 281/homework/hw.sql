CREATE TABLE IF NOT EXISTS performance_test (
    id INTEGER PRIMARY KEY,
    category TEXT,
    score INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM performance_test;