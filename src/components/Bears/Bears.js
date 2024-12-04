import { connect } from "react-redux";
import Bear from "./Bear";
import { useEffect } from "react";
import { getBears } from "../actions";
import { useDispatch } from "react-redux";
import { GETBEARS } from "../actions";
import axios from "axios";
const Bears = (props) => {
    console.log("================all",props);
    
    const bears = props.bears;
    const dispatch = useDispatch();

    useEffect(() => {
        const api = "http://localhost:3000/api/bear"
        fetch(api)
        .then(response =>response.json())
        .then(bears =>dispatch({ type: GETBEARS, bears: bears }))
    },[])
    return (
        <>
            <ul>
                {bears.map((bearItem, i) => (
                    <Bear
                        bear={bearItem}
                        key={i}
                    />
                ))}

            </ul>
        </>
    );

}
const mapStateToProps = (state) => {
    return {
        bears: state.bears,
    }
};
const mapDispatchToProps = {
    getBears,
};
export default connect(mapStateToProps, mapDispatchToProps)(Bears);