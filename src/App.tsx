import React from 'react';
import {Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {CoolFeatureMainScreen} from "./screens/cool-feature/main/CoolFeatureMainScreen";
import {CoolFeatureDetailedScreen} from "./screens/cool-feature/detailed/CoolFeatureDetailedScreen";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={ <CoolFeatureMainScreen/> }/>
          <Route path="/todo/:todoId" element={ <CoolFeatureDetailedScreen/> }/>
      </Routes>
    </div>
  );
}

export default App;
