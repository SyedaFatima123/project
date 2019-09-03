import { SUBMIT_FORM } from "./types";

export const submitForm = formData => dispatch => {
    console.log("See", formData)
    dispatch({
        type : SUBMIT_FORM,
        payload : formData
    })
}