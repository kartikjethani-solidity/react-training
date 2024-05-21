import "./App.css";
import { BaseRoom } from "./RTKnewImplementation/components/baseRoom";
import { WrapperDiv } from "./RTKnewImplementation/components/WrapperDiv";
// import Counter from "./components/counter";

export const App: React.FC = () => {
  return (
    <WrapperDiv>
      <BaseRoom></BaseRoom>
      <BaseRoom></BaseRoom>
      <BaseRoom></BaseRoom>
      <BaseRoom></BaseRoom>
    </WrapperDiv>
  );
};

export default App;
