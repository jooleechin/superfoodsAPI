const uuid = require('uuid/v4')
let superfoods = [
  {
    id: uuid(),
    name: 'Kale',
    type: 'Vegetable'
  }
]

function getAll() {
  return superfoods
}

function getByID(id) {
  const idFound = superfoods.find(superfood => superfood.id === id)
  return idFound
}

function createSuperfood(name, type) {
  const superfood = {
    id: uuid(),
    name: name,
    type: type
  }
  superfoods.push(superfood)
  return superfood
}

function updateSuperfood(id, name, type) {
  const findID = superfoods.find(superfood => superfood.id === id)
  findID.name = name
  findID.type = type
  return findID
}

function deleteSuperfood(id) {
  const findID = superfoods.find(superfood => superfood.id === id)
  const index = superfoods.indexOf(findID)
  superfoods.splice(index, 1)
  return findID
}

module.exports = {
  getAll,
  getByID,
  createSuperfood,
  updateSuperfood,
  deleteSuperfood
}
