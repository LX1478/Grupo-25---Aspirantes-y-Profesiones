module.exports = (sequelize, DataTypes) => {
    const Profession = sequelize.define( 'Profession', {
        id:{
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        createdAt:{
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
        },
        deleteAt:{
            type: DataTypes.DATE,
        }
    },{
      tableName: 'professions', 
      timestamps: true
   })

 Profession.associate = (models)=> { 
    Profession.hasMany(models.Aplicant, {
        as: 'aplicants',
        foreignKey: 'professionId'
    })
}


   return Profession;
}