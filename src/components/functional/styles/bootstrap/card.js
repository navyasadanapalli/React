import ImageComponent from "../../img/image-component"


const Card=(prop)=>{
  const{title,category,image  }=prop.item
    return(
        <div className="container mt-3">

  <div className="card" style={{ width: "50%" }}>
  <ImageComponent imageurl={image}/>
    <img
    //   className="card-img-top"
    //   src="../bootstrap4/img_avatar1.png"
    //   alt="Card image"
      style={{ width: "100%" }}
    />
    <div className="card-body">
      <h4 className="card-title">{category}</h4>
      <p className="card-text">
{title}
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