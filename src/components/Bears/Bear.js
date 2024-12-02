
const Bear = ({bear,idx}) =>{
      return <div>
        <li key={idx}>{bear.latinName}</li>
    </div>
}
export default Bear;