var express = require("express");
var router = express.Router();

var skillsCtrl = require("../controllers/skills");
const skills = require("../controllers/skills");

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id/edit", skillsCtrl.edit)
router.get("/:id", skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.put('/:id', skillsCtrl.update);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
