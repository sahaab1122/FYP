import api from '../../api/api';
import path from '../../api/path';
// import { setError, setLoading } from '../actions/globalActions'
import { set_items,  set_featured, set_user,set_categories  } from '../actions/appAction'


export const _getItems = () => {

    return async (dispatch, getState) => {


        let res = await api(path.getitem, "GET",);
        if (res) {
            dispatch(set_items(res.result))
        }
    }
}
export const _getFeatured = () => {

    return async (dispatch, getState) => {

        let res = await api.getFeatured();
        if (res) {
            dispatch(set_featured(res.result))
        }
    }
}
export const _getCategories = () => {

    return async (dispatch, getState) => {


        let res = await api(path.getcategories, "GET",);
        if (res) {
            dispatch(set_categories(res.result))
        }
    }
} 
 
export const _deleteItems = () => {

    return async (dispatch, getState) => {


        let res = await api(path.deleteItem, "DELETE",);
        if (res) {
            // dispatch(set_items(res.result))
        }
    }
}
// export const _getFavourite = (token, uid) => {

//     return async (dispatch, getState) => {

//         let res = await api.getFavourite(token, uid);
//         if (res) {
//             dispatch(set_favourite(res.result))
//         }
//     }
// }

export const _getUsers = (token) => {

    return async (dispatch, getState) => {

        let res = await api.getUsers(token);
        if (res) {
            dispatch(set_user(res.result))
        }
    }
}
 
 
 


