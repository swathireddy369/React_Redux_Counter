import { combineReducers } from "redux";
import { GETBEARS } from "../components/actions";
const bearsReducer = (
    bears=[] ,
    action) => {
        console.log("coming here",action);
    switch (action.type) {
        case GETBEARS:
            console.log("action", action,bears);
            
            return [...bears, ...action.bears];
        default:
            return bears;
    }
};
const rootReducer = combineReducers({
    bears: bearsReducer
})
export default rootReducer;
