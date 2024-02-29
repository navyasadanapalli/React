import ButtonComponent from "./components/functional/button/button-components";
import ImageComponent from "./components/functional/img/image-component";
import OrderedList from "./components/functional/list/ordered/orderedlist-components";
import UnorderList from "./components/functional/list/unorderd/unorderdlist-component";

function App() {
  return (
   <div>
    <ButtonComponent/>
    <ImageComponent/>
    <OrderedList/>
    <UnorderList/>
    </div>
  );
}

export default App;
