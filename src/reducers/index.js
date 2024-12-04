import { combineReducers } from "redux";
import { GETBEARS ,CREATEBEAR} from "../components/actions";
const bearsReducer = (
    bears=[{latinName:"blackBear"},{latinName:"whiteBear"},{latinName:"Bear"}] ,
    action) => {
        switch (action.type) {
        case GETBEARS:
            return [...bears,...action.bears];
        case CREATEBEAR:
             return [...bears,action.createBear.data]    
        default:
            return bears;
    }
};
const rootReducer = combineReducers({
    bears: bearsReducer
})
export default rootReducer;
