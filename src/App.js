import './App.scss';
import { Music } from './music/Music';
import { withOrientationChange } from 'react-device-detect'
import { FcRotateToLandscape} from "react-icons/fc";
import {
  isMobile
} from "react-device-detect";

let App = props => {
  const { isLandscape, isPortrait } = props
  if(isMobile){
    if (isLandscape) {
      return (
        <div className="App">
          <Music />
        </div>
      );
    }
  
    if (isPortrait) {
      return (
        <div className="flex flex-col justify-center items-center h-screen pb-16">
          <FcRotateToLandscape className="text-7xl text-white" />
          <span className="text-2xl text-violet font-bold">deita o celular</span>
        </div>
      )
    }
    else return <div></div>
  }

  else return (
    <div className="App">
      <Music />
    </div>
  );

}

App = withOrientationChange(App)


export default App
