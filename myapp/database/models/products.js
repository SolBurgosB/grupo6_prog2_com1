module.exports = function (sequelize, dataTypes ) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        productimage: {
            type : dataTypes.STRING(500)
        },
        productname: {
            type : dataTypes.STRING(500)
        },
        productdescription: {
            type : dataTypes.STRING(500)
        },
        userid: {
            type : dataTypes.INTEGER
        },
         createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
   }
    let config = {
        tableName: "products",
        timestamps: false,
        underscored: false
    }
    let Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) { //Linea para asociar Product a User y a Comment
        Product.belongsTo(models.User, { //Muchos productos pertenecen a un usuario 
            as: "user", //Con belongsTo el alias va en SINGULAR
            foreignKey: "userid" //Queda igual (la comparte con users.js)
        }),
    Product.hasMany(models.Comment, { //Un producto tiene muchos comentarios
            as: "comments",
            foreignKey: "productid" // "productid" lo saco de FOREIGN KEY ("...") de la tabla de mysql (varía dependiendo la tabla)
        })
    }
    return Product;
}