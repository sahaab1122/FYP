import { SET_CATEGORIES, SET_CATEGORY, SET_FAVOURITE,  SET_ITEMS,  SET_USERS } from "./Types";

export const set_categories = (payload) => (
    {
        type: SET_CATEGORIES,
        payload
    }
)
export const set_items = (payload) => (
    {
        type: SET_ITEMS,
        payload
    }
)
export const set_favourite = (payload) => (
    {
        type: SET_FAVOURITE,
        payload
    }
)
export const set_user = (payload) => (
    {
        type: SET_USERS,
        payload
    }
)


