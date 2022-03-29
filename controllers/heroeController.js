const dataScientist = require('../data/science')

const allScientist = dataScientist.lista
const heroesController = {
  index: (req,res)=>{
    res.send(allScientist)
  },
  detail: (req, res)=>{
    let idSelected = req.params.id

    for(let i=0; i<allScientist.length; i++){
      if(idSelected == allScientist[i].id){
        return res.send('Hola, mi nombre es '+allScientist[i].nombre  +' y soy ' + allScientist[i].profesion)
      }
    }      
    return res.send('No encontramos al científico indicado. Por favor, elija otro id')
    

  },
  bio: (req,res)=>{
    let idSelected = req.params.id
    let okExists = req.params.ok
    for(let i= 0; i < allScientist.length; i++){
      if(idSelected == allScientist[i].id && okExists != 'ok'){
      res.send( allScientist[i].nombre + ' Lamento que no desees saber mas de mi :(' )
      }else if(idSelected == allScientist[i].id && okExists == 'ok'){
      res.send(allScientist[i].nombre + ' ' + allScientist[i].resenia)
      }else{
      res.send('No encontramos al científico indicado para mostrar su biografía')
      }
    }
  }
}

module.exports =  heroesController