let express = require('express');
let mysql = require('mysql');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/../../'));      //--- Static Folder Setting ---//
app.locals.pretty = true;
app.set('view engine', 'pug');      //--- PUG Engine 사용 ---//
app.set('views', './src/html');
let con = mysql.createConnection({      //--- MySQL DB Connect ---//
  host: `localhost`,
  user: `c16st10`,
  password: `*************`,
  database: `c16st10`
});
app.get("/tetris", (req,res)=>{      //--- '/tetirs' Get Mode ---//
  con.connect(function(err){
    // if (err) throw err;
    let select_all = 'SELECT * FROM `tetris` order by score DESC';
    con.query(select_all, (err2, result, fields) => {      //--- Get `tetris` Table List ---//
      // if (err2) throw err2;
      res.render('tetris',{ rank_list: result });      //--- PUG render & Variable Setting ---//
    });
  });
});
app.post('/tetris', function(req,res){      //--- '/tetris' Post Mode ---//
  let user_name = req.body.current_id;
  let user_score = req.body.current_score;
  con.connect(function(err){
    // if (err) throw err;
      let insert_sql = 'INSERT into `tetris` values (null, "' + user_name + '", ' + user_score + ')';
      con.query(insert_sql, function(err1, result){      //--- Insert `tetris` Table Column Current ID & SCORE ---//
        // if(err1) throw err1;
      })
  });
  res.redirect('/tetris');      //--- Page Refresh & To Get Mode ---//
});
app.listen(30101, function(){      //--- port 30101 Connection ---//
  console.log('Connection node js OK');
});
