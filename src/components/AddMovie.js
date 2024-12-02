const AddMovie = ({newMovie,handleChange,addNewMovie})=>{
return <><input value={newMovie} placeholder="enter movie" onChange={(e)=>handleChange(e)}  ></input>
<button onClick={()=>addNewMovie()}>Add</button></>
}
 export default AddMovie;