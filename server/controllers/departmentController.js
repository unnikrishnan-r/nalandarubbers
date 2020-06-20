const db = require("../database/models");

module.exports = {
  findAll: function (req, res) {
    db.Department.findAll({})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByDepartment: function (req, res) {
    db.Department.findOne({ where: { id: parseInt(req.params.deptId) } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //   findByUsername: function(req, res) {
  //     db.User.findOne({
  //       where: { username: req.params.username },
  //       include: [{ model: db.UserRole }]
  //     })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  create: function (req, res) {
    db.Department.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err.parent);
        res.status(400).json(err.parent.errno);
      });
  },
  update: function (req, res) {
    db.Department.update(req.body, { where: { id: req.params.deptId } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Department.destroy({ where: { id: parseInt(req.params.deptId) } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
