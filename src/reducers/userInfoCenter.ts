import { GETUSERINFOCENTER } from '../constants/userInfoCenter'
import {
    userInfoCenterType
} from '../constants/commonType'


const INITIAL_STATE: userInfoCenterType = {
    userDetailInfo: {
        name: '',
        id: 0,
        userpermisson: [],
        timeout: 2000,
        code: 200,
        data: {},
        url: '',
        result: true
    }
}
   

export default function dj (state = INITIAL_STATE, action) {
    switch (action.type) {
      // 获取登录人信息详情
      case GETUSERINFOCENTER:
        const { djListDetailInfo } = action.payload
        return {
          ...state,
          djListDetailInfo: djListDetailInfo
        } 
      default:
        return state
    }
  }