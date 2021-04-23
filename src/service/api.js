import {get ,getAwait} from './http'
export function getLogin(username,password){
    return get('/getLogin',username,password)
}
export function getUserInfo(param){
    return getAwait('/getUser',param)
}
export function getRego(regoName,regoPaw){
    return get('/getRego',regoName,regoPaw)
}