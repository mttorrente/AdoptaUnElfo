const mongoose = require('mongoose')
const checkId = (req, res, next) => {
  !mongoose.Types.ObjectId.isValid(req.params.id) ? res.status(500).send({ message: 'ID inválido' }) : next()
}

module.exports = checkId