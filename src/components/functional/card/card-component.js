import ImageComponent from "../img/image-component";
 import "./index.css"
const CardComponent = (prop)=>{
    return(
        <div className="imgsty">

        <ImageComponent navya={prop.item}/>
        <h3>{prop.item.firstName}</h3>
        {/* <img src="https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg" width={130} height={150}></img> */}
        <p>Its nice to you there!!</p>
        <a href="">see more</a>
        </div>
        );
}
export default CardComponent
