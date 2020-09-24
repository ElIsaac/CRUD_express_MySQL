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
router.put("/:id/editar", (req, res)=>{

    var customQuery

    if(!req.body.id){
        customQuery="UPDATE `hola` SET `titulo` = '"+req.body.titulo+"' WHERE `hola`.`ID` = "+req.params.id
    }
    if(!req.body.titulo){
        customQuery="UPDATE `hola` SET `ID` = '"+req.body.id+"' WHERE `hola`.`ID` = "+req.params.id
    }
    if(req.body.id && req.body.titulo){
        customQuery="UPDATE `hola` SET `ID` = '"+req.body.id+"', `titulo` = '"+req.body.titulo+"' WHERE `hola`.`ID` = "+req.params.id
    }
    coneccionMySql.query( customQuery,  (error) => {
        if (error){console.log(error)}
        else{ 
            res.json({"mensaje":"editado"})
        }
      })
    
})


module.exports = router;