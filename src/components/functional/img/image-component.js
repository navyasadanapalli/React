

const ImageComponent = (prop)=>{
    const{imageurl}=prop

    // console.log(imageurl,"this is my image")
    return(
        <img src={imageurl} width={"100%"} height={400}></img>
    );
}
export default ImageComponent;