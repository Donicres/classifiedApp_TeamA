const { Router } = require('express')
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



router.post('/create', async (request, respond) => {
    try {
        const { category_id, title, price, paddress } = request.body;
        if (!category_id || !title || !price || !paddress) {
            respond.send("Enter values")
        }
        const uservalues = [category_id, title, price, paddress];
        const myquery = "INSERT INTO Products (category_id, title, price, paddress,created_on ) VALUES (?,?,?,?,now())"
        const result = await queryPromise(myquery, uservalues)
        respond.send("INSERTED OKAY")


    } catch (err) {
        console.log(err)
    }

});//GOLDEN

router.get("/allProduct", async (req, res) => {
    try {
        const findClient = req.body.q
        const myquery = await queryPromise(`SELECT * FROM Products`)
        res.json(myquery)
      } catch (error) {
        res.send(error)
      }

}); //YVETTE

router.get('/product/:productID ', async (req, res) => {

}); //VIVIAN


router.put("/update/:productID", async (req, res) => {
    const product_id = req.params.productID
    const { category_id, title, price, paddress, pstatus } = req.body
    const newUpdate = [title, price, paddress, product_id]

    const mysqlCommand = `UPDATE products 
    SET title = ?, price = ?, paddress = ?, updated_on = now()
    WHERE id = ?`

    try {
        if (!title && !price && !paddress) {
            res.send("INSERT VALUES")
        }
        await queryPromise(mysqlCommand, newUpdate)
        // res.send("PRODUCT UPDATED SUCCESSFULLY")
        updatedProduct = `SELECT * FROM products WHERE id = ?`
        // const result = await queryPromise(myquery, uservalues)
        let [product] = await queryPromise(updatedProduct, product_id)
        res.json(product)
    }
    catch (error) {
        res.send(error.message)
    }
});   //BAUDWIN


router.delete("/delete/:productID", async (req, res) => {
    try{
        const id = request.params.id
        const myquery = "DELETE from Products WHERE id=?"
        const result = await queryPromise(myquery,[id])
        if(result.affectedRows > 0){
            response.status(200).json({message:'User deleted successfully'})
        }else{
           response.status(401).json({message:'No user was deleted'}) 
        }
    }catch(err){
        console.log(err)
    }
}); //DONADONI





module.exports = router