const skills = [
  { id: 1, skill: "Cooking", mastery: "Amateur" },
  { id: 2, skill: "Gaming", mastery: "Moderate" },
  { id: 3, skill: "Coding", mastery: "Amateur" },
  { id: 4, skill: "Sleeping", mastery: "Master" },
  { id: 4, skill: "Dancing", mastery: "Extremely Poor" },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  const idNum = parseInt(id);
  return skills.find((skill) => skill.id === idNum);
}
