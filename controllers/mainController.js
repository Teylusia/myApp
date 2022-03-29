const dataScientist = require('../data/science')

const mainController = {
  home: (req, res) => {
    res.send('Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.')
  },
  credits: (req, res ) =>{
    res.send('Esta pagina fue hecha por Gabriel Alejandro, Agustin Alcaraz y Taylor.')
  }
}
module.exports = mainController