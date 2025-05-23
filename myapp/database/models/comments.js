module.exports = function (sequelize, dataTypes ) {
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        productid: {
            type : dataTypes.INTEGER
        },
        userid: {
            type : dataTypes.INTEGER
        },
        commenttext: {
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
    }
    let config = {
        tableName: "comments",
        timestamps: false,
        underscored: false
    }
    let Comment = sequelize.define(alias, cols, config);
    Comment.associate = function (models) { //Linea para asociar Comment a User y a Product
        Comment.belongsTo(models.User, { //Muchos comentarios pertenecen a un usuario 
            as: "user", //Con belongsTo el alias va en SINGULAR
            foreignKey: "userid" 
        })
        Comment.belongsTo(models.Product, { //Muchos comentarios pertenecen a un producto
            as: "product", //Con belongsTo el alias va en SINGULAR
            foreignKey: "productid" // "productid" lo saco de FOREIGN KEY ("...") de la tabla de mysql (varía dependiendo la tabla)
        })
    }
    return Comment;
}