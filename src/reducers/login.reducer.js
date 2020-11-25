import { loginConstants } from "../constants/login.constants";


const initialState = {
    userDetails:{},
    isLoggedIn:false
}

const loginDetails = {
    userName:"hruday@gmail.com",
    password :'hruday123'
    }

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginConstants.LOGIN_REQUEST:
            let loggedIn
                if(action.payload.userName == loginDetails.userName 
                    &&  action.payload.password == loginDetails.password){
                        loggedIn = true
                    }else{
                        loggedIn = false
                        }
            return {
              ...state,
              isLoggedIn:loggedIn
            };
          default:
            return state;
    }
}