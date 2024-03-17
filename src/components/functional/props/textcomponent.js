


const TextComponent=(prop)=>{
    const {title,children}=prop
    console.log(prop,"props")
    return(
        <div>
<h3>{children}</h3>
        </div>
        
    );
}
export default TextComponent;