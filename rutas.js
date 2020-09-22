const express=require("express")
const coneccionMySql = require("./abrirConeccion")


const router = express.Router();

router.get("/", (req, res)=>{
    res.json({mensaje: "ok"})
})

router.post("/1", (req, res)=>{
    coneccionMySql.query('INSERT INTO `hola`(`ID`, `titulo`) VALUES (0,"'+req.body.titulo+'")',  (error) => {
        if (error){console.log(error)}
        res.json({"mensaje":"ok"})
      })
    
})

module.exports = router;