const express=require("express")
const coneccionMySql = require("./abrirConeccion")


const router = express.Router();

router.get("/", (req, res)=>{
    res.json({mensaje: "ok"})
})

router.post("/nuevo", (req, res)=>{
    coneccionMySql.query('INSERT INTO `hola`(`ID`, `titulo`) VALUES (0,"'+req.body.titulo+'")',  (error) => {
        if (error){console.log(error)}
        else{
            res.json({"mensaje":"ok"})
        }
        
      })
    
})

router.delete("/:id/eliminar", (req, res)=>{
    coneccionMySql.query("DELETE FROM `hola` WHERE `hola`.`ID` = "+req.params.id,  (error) => {
        if (error){console.log(error)}
        else{
            res.json({"mensaje":"eliminado"})
        }
      })
    
})



module.exports = router;