const db = require("../database/models");

module.exports = {
  findAll: function (req, res) {
    db.Customer.findAll({order: [["customerName", "ASC"]]})
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
//   findByCustId: function (req, res) {
//     db.Customer.findOne({ where: { id: parseInt(req.params.customerId) } })
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
  create: function (req, res) {
    db.Customer.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log(err));

      // .catch((err) => {
      //   console.log(err.parent);
      //   res.status(400).json(err);
      // });
  },
//   update: function (req, res) {
//     db.Department.update(req.body, { where: { id: req.params.deptId } })
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
  remove: function (req, res) {
    db.Customer.destroy({ where: { customerId: parseInt(req.params.custId) } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
