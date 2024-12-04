import { connect, useSelector } from "react-redux";
import Bear from "./Bear";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GETBEARS,CREATEBEAR } from "../actions";
import axios from "axios";
const Bears = (props) => {
    const bears = props.bears;
    const [newBear,setBear] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        const api = "http://localhost:3000/api/bear"
        fetch(api)
            .then(response => response.json())
            .then(bears => dispatch({ type: GETBEARS, bears }))
    },[])
    const addBear = async () => {
        try {
            const api = "http://localhost:3000/api/bear"
            const payload = {
                "latinName": newBear,
                "species": "whiteBear"
            }
            const createBear = await axios.post(api,payload);
            dispatch({ type: CREATEBEAR, createBear:createBear })
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            <input name="bear" onChange={(e)=>setBear(e.target.value)}></input>
            <button onClick={addBear}>submit</button>
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
// const mapDispatchToProps = {
//     getBears,
// };
export default connect(mapStateToProps)(Bears);