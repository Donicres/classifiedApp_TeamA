const express = require("express")
const mysql = require("mysql2")


const db = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    database: "ClassifiedApp",
    user: "root",
    password: "General@123"//"Michealtutu123"
  })
  


   module.exports = db
