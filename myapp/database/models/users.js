module.exports = function (sequelize, dataTypes ) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
         username: {
            type : dataTypes.STRING(500)
        },
        mail: {
            type : dataTypes.STRING
        },
        userpassword: {
            type : dataTypes.STRING(500)
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        },
        birthday: {
            type : dataTypes.DATE
        },
        dni: {
            type : dataTypes.STRING(8) //VER
        },
        profileimage: {
            type : dataTypes.STRING(500)
        },
   }
    let config = {
        tableName: "users",
        timestamps: false,
        underscored: false
    }
    let User = sequelize.define(alias, cols, config);
    User.associate = function (models) { //Linea para asociar User a Product y a Comment
        User.hasMany(models.Product, { //Un usuario tiene muchos productos
            as: "products", //Con hasMany el alias va en PLURAL
            foreignKey: "userid" //Queda igual (la comparte con products.js)
        }),
        User.hasMany(models.Comment, { //Un usuario tiene muchos comentarios 
            as: "comments",
            foreignKey: "userid" // "userid" lo saco de FOREIGN KEY ("...") de la tabla de mysql
        })
    }
    return User;
}