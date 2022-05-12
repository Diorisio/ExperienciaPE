
const {Experiencia} = require ("../database/models")
const axios =require ('axios');
// All requests made with the client will be authenticated

const ApiKey="563492ad6f91700001000001434072764fd34ca28f5798ca1dc1982e"
const Url="https://api.pexels.com/v1/search?query="
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const experiencia=async(req,res)=>{
    try {
        const allexperiencia=await Experiencia.findAll()

        res.json(allexperiencia)
    } catch (error) {
        console.log(error)
        
    }
}
const addexperiencia = async(req,res)=>{
    try {
        const numero=random(0,10);
        
        const {Titulo,Descripcion,SalaInteractiva}=req.body;
        const Imagendata = await axios.get(Url+req.body.SalaInteractiva+"&per_page=10&page=1",{headers:{"Authorization":ApiKey}})
        const Imagen=Imagendata.data.photos[numero].src.original
        await Experiencia.create({Titulo,Descripcion,Imagen,SalaInteractiva})
        const allexperiencia=await Experiencia.findAll()
        res.json(allexperiencia)
        
    } catch (error) {
        res.json("Eliga otra palabra o eliga una palabra en ingles")
    }

}
const updateexperiencia= async(req,res)=>{
    
    try {
        const expId=req.params.id
    const {Titulo,Descripcion,Imagen,SalaInteractiva}=req.body;
    await Experiencia.update({Titulo,Descripcion,Imagen,SalaInteractiva},{where:{id:expId}})
    const allexperiencia=await Experiencia.findAll()
    res.json(allexperiencia)
        
    } catch (error) {
        console.log(error)
    }
}

const detalleexpereciencia=async(req,res)=>{
    try {
        const expId=req.params.id
        const detalle=await Experiencia.findOne({where:{id:expId}})
        res.json(detalle)
        
    } catch (error) {
        console.log(error)
        
    }

}
const deleteexpereciencia=async(req,res)=>{
    try {
        const expId=req.params.id
        await Experiencia.destroy({where:{id:expId}})
        const allexperiencia=await Experiencia.findAll()
        res.json(allexperiencia)
        
    } catch (error) {
        console.log(error)
        
    }

}
const filtroexpereciencia=async(req,res)=>{
    try {
        const nombre=req.params.nombre
        const sala=await Experiencia.findAll({where:{SalaInteractiva:nombre}})
        res.json(sala)
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports={
    experiencia,
    addexperiencia,
    updateexperiencia,
    deleteexpereciencia,
    detalleexpereciencia,
    filtroexpereciencia    
}