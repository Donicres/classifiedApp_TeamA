const {Router} = require('express')
const router = Router() 
const db = require("../config/db")



  
  
function queryPromise(sql,values=[]){
    return new Promise((resolve,reject)=>{
      db.query(sql,values,(error,result)=>{
        if(error){
          reject(error)
        }else{
          resolve(result)
        }
      })
    });
  }  
  

router.post('/create', async(request, respond) => {
    try{
        const {category_id, title, price, paddress } = request.body;
        if(!category_id || !title || !price || !paddress ){
            respond.send("Enter values")
        } 
        const uservalues = [category_id,title,price,paddress];
        const myquery = "INSERT INTO Products (category_id, title, price, paddress,created_on ) VALUES (?,?,?,?,now())"
        const result = await queryPromise(myquery,uservalues)
        respond.send("INSERTED OKAY")
  
  
    }catch(err){
        console.log(err)
    }
    
    });//GOLDEN

 router.get('/product', async(req, res) => {
  
}); //YVETTE

router.get('/product/:productID ', async(req, res) => {
  
 }); //VIVIAN


router.put('/update/:productID ', async(req, res) => {

  
 }); //BAUDWIN


 router.delete('/delete/:productID ', async(req, res) => {
  
 }); //DONADONI



module.exports=router