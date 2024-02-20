module.exports = (sequelize, DataTypes) => {
    const Recruiting = sequelize.define("Recruiting", {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        companieId:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'Company', 
                key: 'id' 
              }
        },
        applicantId:{
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            references: {
                model: 'Applicant', 
                key: 'id' 
              }
        },
    },{
        tableNames: "roles",
        timestamps: true,
        paranoid: true,
    });
    
    return Recruiting;
}