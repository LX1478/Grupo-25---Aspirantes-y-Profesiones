module.exports = (sequelize, DataTypes) => {
    const Aplicant = sequelize.define('Aplicant', {
        id:{
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dni:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        name:{
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        surname:{
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        phone:{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        urlLinkedin:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        dateOfBirth:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        sex:{
            type: DataTypes.ENUM,
            values: ['Masculino', 'Femenino', 'Otro'],
            allowNull: false
        },
        image:{
            type: DataTypes.STRING(255),
            allowNull: false,
            default: 'default.png'
        },
        professionId:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'Profession', 
                key: 'id' 
              }
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
        deleteAt:{
            type: DataTypes.DATE,
        }, 
    },{
      tableName: 'aplicants'
   })

   Aplicant.associate = (models)=> { 
    Aplicant.belongsTo(models.Profession, {
        as: 'profession',
        foreignKey: 'professionId'
       })
    }

   return Aplicant;
}
