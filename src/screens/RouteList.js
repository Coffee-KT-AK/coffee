import { Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import CallScreen from "./CallScreen";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/call/:username/:room" element={<CallScreen />} /> 
    </Routes>
  );
}

export default RouteList;