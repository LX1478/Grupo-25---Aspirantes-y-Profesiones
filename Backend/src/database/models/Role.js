const Applicant = require("./Applicant");

module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("Role", {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING(120),
            allowNull: false,
        },
    },{
        tableNames: "roles",
        timestamps: false
    });

    Role.associate = (models) => {
        Role.hasMany(models.Applicant, {
            as: "applicants",
            foreignKey: "roleId"
        }),
        Role.hasMany(models.Company, {
            as: "companies",
            foreignKey: "roleId"
        })
    };

    return Role;
}