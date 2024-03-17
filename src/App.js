// import ConditionalRender from "./components/functional/exports-imports/conditional-render";
// import Navya,{ComponentB as Kavya,ComponentC} from "./components/functional/exports-imports/exports";

import { AccordionItem, Modal } from "react-bootstrap";
import TodoList from "./components/functional/styles";
import AccordionComponent from "./components/functional/styles/ReactBootstrap/accordion";
import ContentPage from "./components/functional/styles/bootstrap/content";
import Corousel from "./components/functional/styles/ReactBootstrap/corousel";
import Modals from "./components/functional/styles/ReactBootstrap/modals";
import NavBar from "./components/functional/styles/ReactBootstrap/navbar";
import Toasts from "./components/functional/styles/ReactBootstrap/toasts";
import Tables from "./components/functional/styles/ReactBootstrap/tables";
import Profile from "./components/functional/props/profile";



function App() {
  return (
    <div>
      <Wrapper bgcolor="red">
        <Profile />
      </Wrapper>
    </div>
  );
}


export default App;

function Wrapper(prop){
  const{bgcolor,children}=prop
  return(
    <div style={{flex:1, backgroundColor:bgcolor}}>
      {children}
    </div>
  )
}
