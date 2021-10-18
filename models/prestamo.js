const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Prestamo extends Model{ }

Prestamo.init(
    {
    monto: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    costoAsociado: {
        type: DataTypes.NUMBER,
        allowNull:false
    },
    fechaVencimiento:{
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaGeneracion:{
        type: DataTypes.DATE,
        allowNull:false
    },
    pagado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    desembolado:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    precio:{
        type: DataTypes.NUMBER,
        allowNull: false
    }
},

{
    sequelize,
    timestamps: false,
    modelName:"Prestamo",
}
)

//Relaciones

module.exports = Prestamo;
