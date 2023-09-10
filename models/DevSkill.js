const DevSkills = [
    {id: 100000, DevSkill: 'JavaScript', done: true},
    {id: 127904, DevSkill: 'HTML', done: true},
    {id: 139608, DevSkill: 'CSS', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
  function getAll() {
    return DevSkills
  }
 function getOne(id) {
    id = parseInt(id)
    return DevSkills.find(DevSkill => DevSkill.id === id);
 }

 function create(DevSkill) {
    DevSkill.id = Date.now() % 100000
    DevSkills.done = false;
    DevSkills.push(DevSkill);
 }

 function deleteOne(id) {
    id = parseInt(id)
    const index = DevSkills.findIndex(DevSkill => DevSkill.id === id);
    DevSkills.splice(index, 1);
 }