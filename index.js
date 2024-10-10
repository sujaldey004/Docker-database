const {pg} = require('pg');
const Client = require('pg/lib/client');

const connectionString = "postgresql://postgres:**********@localhost:5432/postgres";

const client = new Client({
    connectionString: connectionString
});

client.connect(err => {
    if(err) {
        console.log("connection error", err.stack)
    }
    else{
        console.log("connected to the database");
    }
});

client.query('SELECT NOW()', (err, res) => {
    if(err){
        console.error(err)
    }
    else{
        console.log(res.rows[0]);
    }
    client.end();
})




// docker run -d -p 27017:27017 mongo
// docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
// docker ps # for listing #