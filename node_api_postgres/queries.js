const { response, request } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'komisDB',
    password: 'zaq1@WSX',
    port: 5432,
})

const getCars = (request, response) =>{
    pool.query('SELECT * FROM pojazdy', (error,results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports ={
    getCars
}
