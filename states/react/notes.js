//These are notes from different courses to eventually put into a view for react

/*
code snippets
common errors
vocab
quiz questions
commands
tooling notes
*/

/*

REACT VOCAB & NOTES:

State holds all of the data in the app in a master object called 'State"

Sharing State
We use something called "get initial state"
 react needs to know what state you have, it's type & what to expect...

This is done thus:

in es6 class...
constructor() {
super();
this.state = {
  fishes: []. or {}
};


ReactRouter 4 has 2 ways to do routing:
1) The declarative <Redirect> way...

2) The imperative API using transitionTo... & "context"..

---
There's State (to hold your data)

& Props to pass from one component(a parent) down to a child component

** But there's also context

StorePicker.contextTypes = {...}




------
super():

class StorePicker extends React.Component {
  constructor() {
    super();
  }
...
We cannot call the keyword 'this' because the react component that we are extending needs to be initialized first...

This super()
"runs" React.component in a constructor when the component is created.

Then once extended... we can add our own custom methods...

super(); also enables us to bind 'this' equal to the name of the class
---
class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
---
This ^ above, is one way to bind 'this' to the component.

Another way is:

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please enter a store</h2>



Value attr of <input> tags: in a component are connected to State
To avoid this:
<input type="text" required placeholder="Store Name"defaultValue={getFunName()} />

These are 2 more ways:
A)
<form className="store-selector" onSubmit={this.goToStore.bind(this)}>


B)
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>



The down-side is that it creates a new function for every single

PropTypes: Enable u 2
1) Verify that data is passed
2) Validate that the data is of the correct type

import './css/style.css';
// this just pops a <style> tag onto the <head> of the html.
(This happens in the index.js file...)

ES6 Modules: "import X from 'x';"


look up HTML5 PushState: what react uses to change urls --rather than refreshing the page.

look up "Named Import/ Named Export" in ES6

      <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />

This getFunName is exported thus (from it's own file):
export function getFunName() {



It is NOT export default function getFunName() {
because it is a named export (?)
& above the jsx in the component... it is imported thus:
import { getFunName } from '../helpers';
This is a Named Import.(?)

function-ref
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=>{this.storeInput = input}}/>


Stateless Functional Component:
if you have a component that only has a render()

Just put it on a variable
const Header= () => {
     <html stuff>
}



then....

const varname = (props) => {
----------JSX-----------
(if there is a 'this'... remove it [props is passed in]..)
}

Select component then, type in the console:
$r / $0



*/


// jsx comments:  {/* comment */}

/*

AND you must put them inside the element u r returning (in JSX)

-- before the return //any normal js comments are permissable

Mounting Point:
<div class="main"></div>
in the html when first creating a React App to which it connects or "renders" to via ReactDOM


JSX only ever returns one Parent Element
If not--err: "adjacent elems must be wrapped in parent.."

*/
