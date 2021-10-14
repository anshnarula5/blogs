import * as api from "../../api"

export const signin = (blogData, history) => async (dispatch) => {
    try {
        const {data} = api.signin(blogData)
        dispatch({type : "AUTH", data})
        history.push("/blogs")
    } catch (error) {
        console.log(error)
    }
}
export const signup = (blogData, history) => async (dispatch) => {
    try {
        const {data} = api.signup(blogData)
        dispatch({type: "AUTH", data})
        history.push("/blogs")
    } catch (error) {
        console.log(error)
    }
}