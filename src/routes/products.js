const { Router } = require('express')
const router = Router()
const db = require("../config/db")


router.post('/create', async (req, res) => {

    
}); //GOLDEN

router.get("/product", async (req, res) => {

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
        await db.query(mysqlCommand, newUpdate)
        // res.send("PRODUCT UPDATED SUCCESSFULLY")
        updatedProduct = `SELECT * FROM products WHERE id = ?`
        let [product] = await db.query(updatedProduct, product_id)
        res.json(product[0])
    }
    catch (error) {
        res.send(error.message)
    }
});   //BAUDWIN



router.delete("/delete/:productID", async (req, res) => {

}); //DONADONI





module.exports = router