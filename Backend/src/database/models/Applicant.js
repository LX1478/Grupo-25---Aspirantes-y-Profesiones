module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define('Applicant', {
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
            allowNull: true,
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
    },{
      tableName: 'applicants',
      timestamps: true,      
      paranoid: true, // habilita deletedAt
   })

   Applicant.associate = (models)=> { 
    Applicant.belongsTo(models.Profession, {
        as: 'profession',
        foreignKey: 'professionId'
       })
    }

   return Applicant;
}
