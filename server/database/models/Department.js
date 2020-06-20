/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  var Department = sequelize.define(
    "Department",
    {
      departmentName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Department",
    }
  );

  return Department;
};
