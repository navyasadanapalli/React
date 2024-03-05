import ImageComponent from "../../img/image-component"


const Card=()=>{
    return(
        <div className="container mt-3">

  <div className="card" style={{ width: "100%",textAlign:"center" }}>
  <ImageComponent/>
    <img
    //   className="card-img-top"
    //   src="../bootstrap4/img_avatar1.png"
    //   alt="Card image"
      style={{ width: "100%" }}
    />
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">
        Some example text some example text. John Doe is an architect and
        engineer
      </p>
      <a href="#" className="btn btn-primary">
        See Profile
      </a>
    </div>
  </div>
</div>

    )
}
export default Card