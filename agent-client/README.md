
# React Field Agent Assessment

## Tasks

* [X] Continue working in the repo from last week's Field Agent API repository (.5 hours)
  * [X] Add a README in the `client` folder with the contents from this file

* [X] Review the requirements (1 hours)

* [X] Identify any research that I need to do (.5 hours)

### Part 1: Project Setup and Agents List

* [X] Create a new React project with CRA (create-react-app) (.5 hours)
  * [X] Remove the cruft (refer back to the Components and JSX exercise for instructions) (.5 hours)

* [X] Add Bootstrap (or other CSS framework) to the `public/index.html` file
  * [X] Add a link to the Bootstrap CSS using the [CDN from the official docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/#css)
  * [X] Add the [`container` CSS class](https://getbootstrap.com/docs/4.6/layout/overview/#containers) to the `<div id="root"></div>` element (.5 hours)

* [X] Create `Agents` component (stub) (.5 hours)
  * [X] Update `App` component to render `Agents` (.5 hours)

* [X] Update `Agents` to render list of agents (.5 hours)
  * [X] Use `fetch` to `GET` a list of agents from the Field Agent API when the component is first loaded (.5)
  * [X] Write JSX to render the agents array (.5 hours)
  * [X] Stub out click event handlers ("Add Agent", "Edit Agent", "Delete Agent") as necessary (1 hours)

**Commit all changes and push to GitHub**

### Part 2: Add Agent and Delete Agent

* [X] Create a form to add an agent (3 hours)
  * [X] Add form JSX (.5 hours )
  * [X] Decide between using individual state variables for input elements or a single object (.5 hours)
  * [X] Add onChange event handlers to input elements (.5 hours)
  * [X] Add onSubmit event handler to form element (be sure to prevent the form from submitting!) (.5 hours)
  * [X] Create agent object
  * [X] Use `fetch` to `POST` the new agent's information to the Field Agent API
  * [X] On success, update the agents array (don't modify the original array!), or on failure, display any validation errors from the API in the UI

* [X] Support deleting agents (2 hours)
  * [X] Confirm the deletion with the user
  * [X] Use `fetch` to `DELETE` the agent from the Field Agent API
  * [X] On success, update the agents array (don't modify the original array!)

* [X] Conditionally render sections of the component (2 hours)
  * [X] Add state variable to track the current view
  * [X] Add conditional logic to the JSX to display the appropriate view

**Commit all changes and push to GitHub**

### Part 3: Edit Agent

* [X] Support editing agents (3 hours)
  * [X] Store the "edit agent ID" in a new state variable 
  * [X] Retrieve the agent to edit
  * [X] Update form state variable(s)
  * [X] Add form JSX
  * [X] Add onChange event handlers to input elements
  * [X] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [X] Create agent object
  * [X] Use `fetch` to `PUT` the updated agent's information to the Field Agent API
  * [X] On success, update the agents array (don't modify the original array!), or on failure, display any validation errors from the API in the UI

* [X] Apply Bootstrap styling (1 hours)
  * [X] Update the agents list
  * [X] Update the add agent form
  * [X] Update the edit agent form
  * [X] Update the delete agent confirmation

**Commit all changes and push to GitHub**

### Part 4: Client-Side Routes

* [X] Implement the required client-side routes (2 hours)
  * [X] Install `react-router-dom`
  * [X] Define the necessary client-side routes (see the list of routes below)
  * [X] Stub out any components that are needed to support the client-side routes
    * _Note: Stub out the individual Agents CRUD UI components but hold off on moving any code from last week's monolithic Agents CRUD UI component to the individual components_
  * [X] Display a "Not Found" message if a route doesn't match one of the defined routes

### Part 5: Agents CRUD UI Component Refactoring

* [X] Update the "Agents" list component (2 hours)
  * [X] Update the "Add Agent" button to redirect the user to the "Add Agent" route (if not already completed)
  * [X] Update the individual agent "Edit" buttons to redirect the user to the appropriate route (if not already implemented)

* [X] Update the "Add Agent" form component (2 hours)
  * [X] Move code from the "Agents" list component into the "Add Agent" form component
  * [X] After a successful `POST` to the Field Agent API, redirect the user to the "Agents" route

* [X] Update the "Edit Agent" form component (2 hours)
  * [X] Move code from the "Agents" list component into the "Edit Agent" form component
  * [X] Use the `useParams` hook to get the agent's ID from the route
  * [X] Use `fetch` to `GET` the agent from the Field Agent API when the component is first loaded
  * [X] After a successful `PUT` to the Field Agent API, redirect the user to the "Agents" route

_Note: A single form component can be used for both "Add Agent" and "Edit Agent"._

## High-Level Requirements

* Implement a full CRUD UI for agents (display, add, update, and delete).
* Implement the required client-side routes.
* Display a "Not Found" message if a route doesn't match one of the defined routes.
* Create React components as needed to support the required client-side routes.

## Technical Requirements

* Use Create React App.
* Use `fetch` for async HTTP.
* Use React Router to implement the client-side routes.
* Use React Router's `useHistory` hook to programmatically redirect users and `useParams` hook to access parameters, paths, and other data.
* You are not allowed to change the Field Agent HTTP Service or database (unless there's a confirmed bug and your instructor approves).
* Use a CSS framework.

## Client-Side Routes

- "Home" `/` - Renders a component that displays a welcome message and a link to the "Agents" route
  - Links to other parts of the website could be added in the future
- "Agents" `/agents` - Renders a component that displays a list of agents
- "Add Agent" `/agents/add` - Renders a component that displays a form to add an agent
- "Edit Agent" `/agents/edit/:id` - Renders a component that displays a form to edit the agent specified by the `:id` route parameter
- "Delete Agent" `/agents/delete/:id` (optional) - Renders a component that displays a confirmation message to delete the agent specified by the `:id` route parameter
  - _Note: If this route isn't implemented, handle agent deletion within the "Agents" route._
- "Not Found" - Renders a component that displays a friendly "not found" message if the requested route doesn't match one of the defined routes
