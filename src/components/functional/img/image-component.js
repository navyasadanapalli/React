

const ImageComponent = (prop)=>{
    // const{imageurl}=prop

    // console.log(imageurl,"this is my image")
    return(
        // <img src={imageurl} width={"100%"} height={400}></img>
        <img src={prop.navya.image} width={"200px"} height={"200px"}/>
    );
}
export default ImageComponent;