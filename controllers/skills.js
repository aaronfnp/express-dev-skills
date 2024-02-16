const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
  });
  res.redirect('/skills')
}

function newSkill(req, res) {
  res.render('skills/new', {title: 'New Skill'});
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  const skillId = req.params.id;

  const skill = Skill.getOne(skillId);

  res.render('skills/edit', {skill: skill});
}

function update(req, res) {
  const {id} = req.params;
  const updatedData = req.body;

  Skill.updateOne(id, updatedData)
    res.redirect('/skills')
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};
