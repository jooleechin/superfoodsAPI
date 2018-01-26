const model = require('../model')

function getAll(req, res, next) {
  let superfood = model.getAll()
  res.status(200).json({data: superfood})
}

function getByID(req, res, next) {
  let id = req.params.id
  const superfood = model.getByID(id)
  if (superfood) {
    res.status(200).json({data: superfood})
  } else {
    next({status:400, message: `Could not find ID: ${id}` })
  }
}

function createSuperfood(req, res, next) {
  const { name, type } = req.body
  if (name && type) {
    const superfood = model.createSuperfood(name, type)
    res.status(201).json({data: superfood})
  } else {
    next({status:400, message: `Please enter the name and type!` })
  }
}

function updateSuperfood(req, res, next) {
  const id = req.params.id
  const { name, type } = req.body
  const superfood = model.updateSuperfood(id, name, type)
  if (superfood) {
    res.status(200).json({data: superfood})
  } else {
    next({status:400, message: `Could not find ID: ${id}` })
  }
}

function deleteSuperfood(req, res, next) {
  const id = req.params.id
  const superfood = model.deleteSuperfood(id)
  debugger
  if (superfood) {
    res.status(200).json({data: superfood})
  } else {
    next({status:400, message: `Could not find ID: ${id}` })
  }
}

module.exports = {
  getAll,
  getByID,
  createSuperfood,
  updateSuperfood,
  deleteSuperfood
}
