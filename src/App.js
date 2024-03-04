import ConditionalRender from "./components/functional/exports-imports/conditional-render";
import Navya,{ComponentB as Kavya,ComponentC} from "./components/functional/exports-imports/exports";


function App() {
  return (
   <div>
    <Navya/>
    <Kavya/>
    <ComponentC/>

    <ConditionalRender/>
    </div>
  );
}

export default App;
