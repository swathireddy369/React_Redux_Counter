import { useState } from "react";
import { connect } from "react-redux";
import Bear from "./Bear";
const Bears = (props) => {
    const bears=props.bears;

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
}
export default connect(mapStateToProps)(Bears);