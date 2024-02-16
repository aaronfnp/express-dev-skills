const skills = [
  { id: 41231, skill: "Cooking", mastery: "Amateur" },
  { id: 12363, skill: "Gaming", mastery: "Moderate" },
  { id: 12377, skill: "Coding", mastery: "Amateur" },
  { id: 74562, skill: "Sleeping", mastery: "Master" },
  { id: 93457, skill: "Dancing", mastery: "Extremely Poor" },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  const idNum = parseInt(id);
  return skills.find((skill) => skill.id === idNum);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 100000
  skill.mastery = 'amateur';
  skills.push(skill);
}

function updateOne(id, inputSkill)
{ 
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills[idx] = inputSkill;
  console.log(idx);
}
