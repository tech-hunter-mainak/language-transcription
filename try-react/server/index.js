const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// MySQL database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'csshacks'
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Test database connection
connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Database connected');
});

connection.query("SELECT * FROM `userregdetails`", function (err, result) {
    if (err) throw err;
    app.get("/api", (req, res) => {
        res.json(result);
    });
    console.log(result)
})


// Endpoint to handle data from React
app.post('/api/users', (req, res) => {
    const { u_uname, u_name, u_mail, u_pass } = req.body;
    const query = `INSERT INTO userregdetails (u_uname, u_name, u_mail, u_pass) VALUES (?, ?, ?, ?)`;

    connection.query(query, [u_uname, u_name, u_mail, u_pass], (err, result) => {
        if (err) {
            console.error('Query failed:', err);
            return res.status(500).send('Query failed');
        }
        res.send('Data inserted successfully');
    });
});

app.post('/api/register', (req, res) => {
    const { u_uname, u_name, u_mail, u_pass } = req.body;
    const query = `INSERT INTO userregistrationdetails (u_uname, u_name, u_mail, u_pass) VALUES (?, ?, ?, ?)`;

    connection.query(query, [u_uname, u_name, u_mail, u_pass], (err, result) => {
        if (err) {
            console.error('Query failed:', err);
            return res.status(500).send('Query failed');
        }
        res.send('Data inserted successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
