const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

//Cuenta bancaria
class Cuenta extends Model{ }

Cuenta.init(
    {
    tipoCuenta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroCuenta: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    nombreBanco:{
        type: DataTypes.STRING,
        allowNull: false
    }
},

{
    sequelize,
    timestamps: false,
    modelName:"Cuenta",
}
)

//Relaciones


//Exportar modulo
module.exports = Cuenta;
