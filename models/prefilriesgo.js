const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class PerfilRieso extends Model{ }

PerfilRiesgo.init(
    {
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min: 0,
            max: 100,
        }
    },
    apto: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
},
{
    sequelize,
    timestamps: false,
    modelName:"PerfilRiesgo",
}
)

//Relaciones


//Exportar modulo
module.exports = PerfilRieso;
