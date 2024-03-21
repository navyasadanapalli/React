


const TextComponent=(props)=>{
    const {title,children}=props
    console.log(props,"props")
    return(
        <div>
<h3>{title}</h3>
        </div>
        
    );
}
export default TextComponent;