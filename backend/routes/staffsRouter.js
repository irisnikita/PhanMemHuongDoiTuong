
const bodyParser = require('body-parser')

module.exports = function(app,conn){

    app.use(bodyParser.json());

    app.use((req,res,next)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        next();
    })

    app.get('/staffs',(req,res)=>{
        conn.query(`SELECT * FROM nhanvien`,function(err,data){
            (err)?res.send(err):res.send(data);
        });

    });

    //get an id 
    app.get('/staffs/:id',(req,res)=>{
        conn.query(`SELECT * FROM nhanvien WHERE id = ?`,[req.params.id],(err,data,fields)=>{
            if(err)
            res.send(err)
            else
            res.send(data)
        })
    })
    //Delete
    app.delete('/staffs/:id',(req,res)=>{
        conn.query('DELETE FROM nhanvien WHERE id = ?',[req.params.id],(err,data,fields)=>{
            if(!err)
            res.send('Deleted successfully.');
            else
            res.send(err);
        })
    })

    //Insert
    app.post('/staffs/',(req,res)=>{
        let sta = req.body;
        var query1= "INSERT INTO nhanvien (msnv,tennv,date,phone,address) VALUES (?)"
        conn.query(query1,[[sta.msnv,sta.tennv,sta.date,sta.phone,sta.address]],(err,data,fields)=>{
            if(!err)
            res.send(sta)
            else
            res.send(err)
        })
    })
    //Update
    app.put('/staffs/:id',(req,res)=>{
        let sta = req.body;
        var query2 = 'UPDATE nhanvien SET msnv = ?, tennv = ?, date=? , phone=? , address=?  WHERE id = ?; ';
        conn.query(query2,[sta.msnv,sta.tennv,sta.date,sta.phone,sta.address,parseInt(req.params.id)],(err,data,fields)=>{
            if(!err)
            res.send(sta)
            else
            res.send(err)
        })
        
    })

};