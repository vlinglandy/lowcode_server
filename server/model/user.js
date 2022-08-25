const {DataTypes} = require('sequelize')
const seq = require('../db/db')


const User = seq.define('user',{
    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        comment:'用户id，唯一'
    },
    result:{
        type:DataTypes.TEXT('long'),
        allowNull:false,
        comment:'用户json数据'
    }
})

User.sync({force:false})
module.exports = User