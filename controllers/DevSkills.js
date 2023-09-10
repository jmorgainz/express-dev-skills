const DevSkill = require('../models/DevSkill');


module.exports = {
    index,
    show,
    new: newDevSkill,
    create,
    delete: deleteDevSkill,
}

function index(req, res) {
    console.log(req.query)
    res.render('DevSkills/index',{
        DevSkills: DevSkill.getAll(),
        title: 'All Skills'
    
    })
}

function show(req, res) {
    res.render('DevSkills/show',{
        DevSkill: DevSkill.getOne(req.params.id),
        title: 'DevSkill Details'
    })
}

function newDevSkill(req, res) {
res.render('DevSkills/new',{
    title: 'New skill'
})
}

function create(req, res) {
// console.log(req.body)
DevSkill.create(req.body)
res.redirect('/DevSkills')
}

function deleteDevSkill(req, res) {
    DevSkill.deleteOne(req.params.id)
    res.redirect('/DevSkills')
}