var MongoClient = require('mongodb').MongoClient,
    test = require('assert');
var express = require('express');
var app = express();

var url = 'mongodb://admin:Ntoucse11@140.121.197.12:27017';


app.get('/',function(req,res){
    
    console.log(req.query);
    
    MongoClient.connect(url,function(err,db){
        
        var DB = db.db('Release');
        var col = DB.collection('Fingerling');
        
        SetnetCol.find().toArray(function(err,docs){
             
                    catchCol.aggregate([{ $sort: { "流放日期": 1 } },
                        {$match :{ '魚種名稱': {$ne:"總合"} }},
                        {
                        $group : {
                            _id:{name:'$定置網名稱',year:'$年份',month:'$月份'},
                            max : {$max:'$加總-重量(公斤)'},
                            type:{ $first : '$魚種名稱'},
                            //value :{$first : '$加總-實價'},
                            total : { $sum : '$加總-重量(公斤)'},
                            //totalValue : { $sum : '$加總-實價'}
                        }
                    }],function(err,result){
                        
                       
                    });
                
                });        

        res.setHeader('Access-Control-Allow-Origin','*');
        res.send(data);
        db.close();
    });
    
});



app.listen(8000,function(){
    console.log('App listening on port 8000');
});