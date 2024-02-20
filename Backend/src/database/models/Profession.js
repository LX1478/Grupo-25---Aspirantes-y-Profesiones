module.exports = (sequelize, DataTypes) => {
    const Profession = sequelize.define('Profession', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        description: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
        },
    }, {
        tableName: 'professions',
        timestamps: true,
        paranoid: true, // habilita deletedAt
    })

    Profession.associate = (models) => {
        Profession.hasMany(models.Applicant, {
            as: 'applicants',
            foreignKey: 'professionId'
        }),
        Profession.belongsToMany(models.Company, {
            as: "demanded",
            through: "vacancies",
            foreignKey: "professionId",
            otherKey: "companyId",
            timestamps: true,
        })
    };
    
    return Profession;
}