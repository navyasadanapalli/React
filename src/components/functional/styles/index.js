import "./index.css"
import styles from "./index.module.css"

export default function TodoList() {
    const style={
        color:"blue"
    }
   
    return (
      <>
        <h1 className="highLightText">Hedy Lamarr's Todos</h1>
        <img 
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Hedy Lamarr" 
          className="photo" 
        />
        <ul>
          <li style={
            {color:"red"}
          }>Invent new traffic lights</li>
          <li style={style}>Rehearse a movie scene</li>
          <li className={styles.newText}>Improve the spectrum technology</li>
        </ul>
      </>
    );
}