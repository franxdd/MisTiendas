const { UUID } = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "tiendas",
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
      ubicacion: {
        type: DataTypes.STRING,
      },
      rubro: {
        type: DataTypes.STRING,
      },
      whatsApp:{
        type: DataTypes.STRING
      },
      horariosM:{
        type: DataTypes.STRING
      },
      horariosT:{
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false,
    }
  );
};
