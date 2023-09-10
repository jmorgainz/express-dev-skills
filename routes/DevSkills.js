var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();
// Require the controller that exports DevSkill crud functions
var DevSkillCtrl = require('../controllers/DevSkills');
// Starts with /DevSkills

// Get/DevSkills 
router.get('/', DevSkillCtrl.index);

// get /DevSkills/new
router.get('/new', DevSkillCtrl.new);

// Get/DevSkills/:id
router.get('/:id', DevSkillCtrl.show);

// Post/DevSkills
router.post('/', DevSkillCtrl.create);

// DELETE /DevSkills/:id
router.delete('/:id', DevSkillCtrl.delete);




module.exports = router;
