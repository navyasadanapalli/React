import { Component } from "react";
import { InfinitySpin } from "react-loader-spinner";


class Spinner extends Component{
    render(){
        return(
            <>
            <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
            </>
        )
    }
}
export default Spinner;