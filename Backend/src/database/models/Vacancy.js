module.exports = (sequelize, DataTypes) => {
    const Vacancy = sequelize.define("Vacancy", {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        companyId:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'Company', 
                key: 'id' 
              }
        },
        professionId:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'Profession', 
                key: 'id' 
              }
        },
        description:{
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        modality:{
            type: DataTypes.ENUM,
            values: ['Presencial', 'Remoto', 'Semipresencial'],
            allowNull: false,
        }
    },{
        tableNames: "roles",
        timestamps: true,
        paranoid: true,
    });        

    return Vacancy;
}