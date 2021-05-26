import { SET_CATEGORY, SET_COUPON, SET_FAVOURITE, SET_FEATURED, SET_ITEMS, SET_ORDERS, SET_TRANSACTIONS, SET_USERS } from "./types";

export const set_category = (payload) => (
    {
        type: SET_CATEGORY,
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


