import ButtonComponent from "./components/functional/button/button-components";
import CardComponent from "./components/functional/card/card-component";
import FormComponent from "./components/functional/form/form-component";
import ImageComponent from "./components/functional/img/image-component";
import OrderedList from "./components/functional/list/ordered/orderedlist-components";
import UnorderList from "./components/functional/list/unorderd/unorderdlist-component";
import TableComponent from "./components/functional/table/table-component";

function App() {
  return (
   <div>
    <ButtonComponent/>
    <ImageComponent/>
    <OrderedList/>
    <UnorderList/>
    <FormComponent/>
    <CardComponent/>
    <TableComponent/>
    </div>
  );
}

export default App;
