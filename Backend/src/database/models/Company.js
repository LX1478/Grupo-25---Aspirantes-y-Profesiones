module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        roleId: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 3,
            allowNull: false,
            references: {
                model: 'Role',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(1024),
            allowNull: false,
        },
        industry: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        webSite: {
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        logo: {
            type: DataTypes.STRING(255),
            defaultValue: "default.png",
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }

    }, {
        tableName: 'companies',
        timestamps: true,
        paranoid: true, // habilita deletedAt
    });

    Company.associate = (models) => {
        Company.hasMany(models.Applicant, {
            as: 'applicants',
            foreignKey: 'professionId'
        }),
        Company.belongsTo(models.Role, {
            as: "companyRole",
            foreignKey: "roleId"
        }),
        Company.belongsToMany(models.Profession, {
            as: "availableVacancies",
            through: "vacancies",
            foreignKey: "companyId",
            otherKey: "professionId",
            timestamps: true,
        }),
        Company.belongsToMany(models.Applicant, {
            as: "contract",
            through: "recruiting",
            foreignKey: "companyId",
            otherKey: "applicantId",
            timestamps: true,
        })
    };

    return Company;
}