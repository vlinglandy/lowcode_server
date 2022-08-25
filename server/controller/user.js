const {
    createUser,
    getUserInfo
} = require('../service/user')
class UserController {
    async register(ctx, next) {
        console.log(ctx.request.body)

        const {
            id,
            result
        } = ctx.request.body
        try {
            const res = await createUser(id, result)
            // console.log(res)
            ctx.body = {
                code: 0,
                message: '成功',
                result: {
                    id: res.id,
                    result: res.result,
                },
            }
        } catch (error) {
            ctx.app.emit('error', error)
        }
    }

    async getOne(ctx, next) {
        const {
            id
        } = ctx.request.body
        console.log(ctx.request.body)
        try {
            const res = await getUserInfo({id})
            ctx.body = {
                code: 0,
                message: '成功',
                result: {
                    result: res.result,
                },
            }
        } catch (error) {
            ctx.app.emit('error', error)
        }

    }
}

module.exports = new UserController()