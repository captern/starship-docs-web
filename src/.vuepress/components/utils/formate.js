import Cookies from 'js-cookie'
import { en, zh } from '../data/base'
export const formateMsg = (string) =>{
  let lang = Cookies.get('lang')|| 'zh-CN'
  let stringArray = string.split("\.")
  if(lang === 'zh-CN'){
    return zh[stringArray[stringArray.length - 1]]|| stringArray[stringArray.length - 1]
  }else{
    return en[stringArray[stringArray.length - 1]]|| stringArray[stringArray.length - 1]
  }
  
}