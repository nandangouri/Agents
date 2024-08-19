import AgentList from "./AgentList";
import AgentForm from "./AgentForm";
import Agents from "./Agents";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import{BrowserRouter as Router} from "react-router-dom";

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Agents/>}/>
                <Route path="/agents" element={<AgentList/>}/>
                <Route path="/agents/add" element={<AgentForm/>}/>
                <Route path="/agents/edit/:id" element={<AgentForm/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
} 

export default App;