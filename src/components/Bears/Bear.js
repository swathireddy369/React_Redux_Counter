
const Bear = ({bear,idx}) =>{
    console.log("bear",bear);
    
    return <div>
        <li key={idx}>{bear.latinName}</li>
        
    
    </div>
}
export default Bear;