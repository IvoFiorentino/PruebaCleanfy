module.exports = (sequelize, dataTypes) => {
    let alias = "User"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname:{
            type: dataTypes.TEXT,
            allowNull: false,
        },
        lastname:{
            type: dataTypes.TEXT,
            allowNull: false,
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        category:{
            type: dataTypes.TEXT,
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: dataTypes.TEXT,
            allowNull: false,
        },
    }
    let config = {tableName: 'users', timestamps: false}
    const User = sequelize.define(alias, cols, config);
    User.associate = models => {
        User.belongsToMany(models.Product, {
            as: 'products', 
            foreignKey: 'product_id',
            through: 'products_users',
            otherKey: 'product_id'
        })
    }
    return User;
}