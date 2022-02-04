/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define(
      "Customer",
      {
        customerId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        customerName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        customerAddress: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        customerPhone: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },

      },
      {
        tableName: "Customer",
      }
    );
  
    return Customer;
  };
  