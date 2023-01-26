const { UUID } = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "productos",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      
      },
      precio: {
        type: DataTypes.INTEGER,
  
      },
      descripcion: {
        type: DataTypes.STRING,
       
      },
    },
    {
      timestamps: false,
    }
  );
};
