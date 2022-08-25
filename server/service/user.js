const User = require('../model/user')
class UserService{
    async createUser(id,result){
       const res = await User.create({id,result})
       return res.dataValues
    }
    async getUserInfo({id}){
        const whereOpt = {}
        id&& Object.assign(whereOpt,{id})
        const res = await User.findOne({
            attributes:['id','result'],
            where:whereOpt
        })

        return res? res.dataValues :null
    }
}
module.exports = new UserService()