import api from '../../api/api';
import { login,  } from '../actions/authActions'
// import { set_loading,  } from '../actions/globalActions' 
import path from '../../api/path';

export const _login = (param) => {

    return async (dispatch, getState) => {
        // dispatch(set_loading(true))

        



        let response = await api(path.login,"POST",param)
            
        console.log(response)
       
        if (response.success == true) { 
            
           
            
            dispatch(login(response.result))
            
        }
        else {
            // response.success == "false"
            alert(response.success)
            

            

        }
       

        // dispatch(set_loading(false));
        // return false
    }
}


 



