import { combineReducers } from "redux";
const bearsReducer = (
    bears=[{latinName:"hyderabadBear",type:"IndianBear"},
           {latinName:"keralaBear",type:"BigBear"},
           {latinName:"BengalBear",type:"smallBear"}
    ],
    action) =>{
switch(action.type){
    // case GETBEARS:
    //     return bears;
    default:
        return bears;
}
};
const rootReducer = combineReducers({
    bears:bearsReducer
})
export default rootReducer;
