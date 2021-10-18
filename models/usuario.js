const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Usuario extends Model{ }

Usuario.init(
    {
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull:false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos:{
        type:DataTypes.STRING,
        allowNull: false
    },
    cc: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    celular:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:{
                msg:"No es una direccion de correo valida"
            }
        }
    }
},

{
    sequelize,
    timestamps: false,
    modelName:"Usuario",
}
)

//Relaciones


//Exportar modulo
module.exports = Usuario;
