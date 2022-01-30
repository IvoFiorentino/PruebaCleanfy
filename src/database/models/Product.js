module.exports = (sequelize, dataTypes) => {
    let alias = "Product"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        discount:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        category:{
            type: dataTypes.STRING,
            allowNull: false,
        }
    }
    let config = {tableName: 'products', timestamps: false}
    const Product = sequelize.define(alias, cols, config);
    Product.associate = models => {
        Product.belongsToMany(models.User, {
            as: 'users', 
            foreignKey: 'user_id',
            through: 'products_users',
            // otherKey: 'user_id'
        })
    }
    return Product;
}