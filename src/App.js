import './App.css';
import {YourFirstComponent} from "./items/YourFirstComponent";
import {RefereningValuesWithRefs} from "./items/RefereningValuesWithRefs";
import {PassingPropsToAComponent} from "./items/PassingPropsToAComponent";

function App() {
    return (
        <div>
            {/*<RefereningValuesWithRefs/>*/}
            {/*<YourFirstComponent/>*/}
            <PassingPropsToAComponent/>
        </div>
    );
}

export default App;