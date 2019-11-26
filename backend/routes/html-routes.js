const mysql = require('mysql');

module.exports = function(app,conn){

    app.use((req,res,next)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();
    })

    app.get('/',(req,res)=>{
        conn.query('SELECT * FROM nhanvien',function(err,data){
            (err)?res.send(err):res.json({nhanvien: data});
        });

    });
};