export function register(data){
    return {
        url:'/api/user/register',
        method:'post',
        data:data,
    }
}
export function getOne(id){
    return {
        url:'/api/user/getOne',
        method:'post',
        data:id,
    }
}