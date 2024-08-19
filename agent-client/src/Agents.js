import AgentList from "./AgentList";

function Agents() {
    return(<>
    <header>
        <h1>
            The Secret Agents List
        </h1>
    </header>
        <div className="container">
            <section className="row">
            <AgentList/>
            </section>
            <footer>
                <br/>
                <p>Agents are members of the Syncret Cohorts.
                </p>
            </footer>
        </div>
    </>);
}
export default Agents;