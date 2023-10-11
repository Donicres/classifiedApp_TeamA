const {Router} = require('express')
const router = Router() 
const db = require("../config/db")

function queryPromise(sql, values = []) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    });
}



router.post('/category/create ', async(req, res) => {
    try{
        const {title,created_on} = req.body;
        if(!title){
          res.send('Please Enter Values')
        }
        const titlevalue = [title];
        const myquery = "INSERT INTO Category (title,created_on) VALUES(?,now())";
        const result = await queryPromise(myquery,titlevalue);
        res.send('Successfully inserted')
        res.json({id: result.insertId,title,created_on}) // to display last add...
        
        }catch(err){
          console.log(err)
        }
}); //DENIS

router.get('/category/:categoryID ', (req, res) => {
  
}); //ELIAS

router.get("/allCategory", async(req,res)=>{
    try {
      const findCategory = req.body.q
      const myquery = await queryPromise(`SELECT * FROM Category`)
      res.json(myquery)
    } catch (error) {
      res.send(error)
    }
  
    })//DONADONI



module.exports=router