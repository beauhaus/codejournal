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


STATE:  Video 30
A component can only modify it's own state.
It cannot modify another component's state.

components like this, thus far, don't have state. The input, for example, has an "untracked input"
-------
import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    <div>
      <h1>SVideo</h1>
      <input type="text" placholder="search" />
      {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})
    </div>
  </div>
);

export default Search;
-------
This needs to be transformed into an ES6 class component.

_______________
import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div>
          <h1><SVideo</h1>
          <input type="text" placholder="search" />
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})
        </div>
      </div>
    );
  }
}

export default Search;
_______________

What one thing MUST react component class have?

--A render method. and the render method MUST return markup
-------
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'this is a debug statement',
    };
  }
  // searchTerm will soon be set as an empty str ''
  render() {
    return (
      <div className="search">
        <div>
          <h1><span role="img" aria-label="react emoji">⚛️</span>SVideo</h1>
          <input value={this.state.searchTerm} type="text" placholder="search" />
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})
        </div>
      </div>
    );
  }
}
--------
At this state the initial value of input is tied to whatever the init value of state.
I type into input, it fires an event the event flows into the Component but value is always the state which is the string "This is (etc etc.)"

ENTER THE 'onChangehandler' 🎉👍🏼 woohoo!
-----
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'this is a debug statement',
    };
  }
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  // searchTerm will soon be set as an empty str ''
  render() {
    return (
      <div className="search">
        <div>
          <h1><span role="img" aria-label="react emoji">⚛️</span>SVideo</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placholder="search" />
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})
        </div>
      </div>
    );
  }
}
------------
We're still not there...
We need to call the event on the Search class.

We need to bind it to the context of Search...

There are may ways to bind the context to Search.
WARNING: There is one bad/lazy way.

onChange={this.handleSearchTermChange.bind(this)}

PROBLEM:
why is this bad?
render gets called alot! --everytime I call .bind() it creates a new func every time render gets called.
.bind() is an expensive call. This is bad do not do it.
22:23  error  JSX props should not use .bind()
SOLUTION:
in the constructor put:
this.handleSearchTermChange = this.handleSearchTermChange.bind(this);

it's super awkward, but it will solve all the problems.

-----
import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'this is a debug statement',
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="search">
        <div>
          <h1><span role="img" aria-label="react emoji">⚛️</span>SVideo</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placholder="search" />
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})
        </div>
      </div>
    );
  }
}

export default Search;

-----
BUT! We can do one better using a stage 2 ES6 proposal

//babelrc
"plugins": ["babel-plugin-transform-class-properties"]
...
this enables us to add class properties on to our ES6 classes.

Then go to eslin.json
add







then, delete this line:     this.handleSearchTermChange = this.handleSearchTermChange.bind(this);

then turn the handleSearchTermChange to an arrow funk


--------
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'this is a debug statement',
    };
    // this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  }
  -------

  YOU CAN ALSO GET RID OF the CONSTRUCTOR altogether and add state = {searchTerm: ''}

----------ENTIRE CODE--------------------

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <div>
          <h1><span role="img" aria-label="react emoji">⚛️</span>SVideo</h1>
          <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placholder="search" />
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})
        </div>
      </div>
    );
  }
}

export default Search;
----------
Video 30











"Untracked input"

An input that does not do anything. It doesn't connect anywhere.
It is not stateful.







PROPS:
with props we are passing down data from Parent to child

The child has no concept of who it's parents are.

It can only accept dat from parents

This data is immutable.
once you get {props.name} or {props.title} you cannot (within that component) say props.title = "Title Two" or something.

This throws an error.

This is called One-way data flow

The reason this is good:

if I have a problem with grandpa.
then I can eliminate the children as being the problem.
There is a strong siloing or detatchment between the two.

It optimizes debugability and maintainability.


STATE:






JSX COMMENTING:

{ /* blahblah */ }    /*







DISPLY json data:

import preload from '../data.json';

.map() is just an array to an array.

Array of data to an array of components...

React as opposed to angularjs... There is very little "domain-specific" language.
yes, of course, there is "className" instead of 'class' (in html code)...

but React just uses map() thus:

//     <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> // this is just preliminarily to show all data.

In order to clean it up to show a property of that json in a tidy html format, here's a small example:

Search.jsx
{preload.shows.map((show) => <h1>{show.title}</h1>)}

so map() is called once on every element. it will return a new array of react components.

if you have exactly one param... arrow Fn don't need parentheses so prettier takes them away:
{preload.shows.map(show => <h1>{show.title}</h1>)}
------
import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {preload.shows.map(show => <h1>{show.title}</h1>)}
    <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
  </div>
);
-----

_______________
import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {preload.shows.map(show => (
      <div className="show-card">
        <img alt={`${show.title} Show Poster`} src={`/public/img/posters/${show.poster}`} />
        <div>
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </div>
    ))}
  </div>
);
_______________
NB: Here, there are 2 ideas going on. It's a search page initially, but I also have results here... --Stuff!

So this is a good hint that this component is bloated and it's time to make a new component.

(props) is going to be whatever Parent passes down into showCard.
_______________
//Search.jsx
import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    {preload.shows.map(show => <ShowCard show={show} />)}
  </div>
);

export default Search;
_______________

//ShowCard.jsx
_______________
import React from 'react';

const ShowCard = props => (
  <div className="show-card">
    <img alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </div>
);

export default ShowCard;
_______________


There are proptype linting errors with this... but --essentially.

These have become deterministic, testable components. vid22

These components are rendered a LOT! --So it's important that the codepath is performant.

It's not a good idea to put date.now() or lots of js functionality inside the render method. (end of vid 22)

--Rather do the function outside and pass it into props.





export default Search;
_______________

as of react 15.5

They've stripped out prop-types.

(once you use flow, it will obviate the necessity for using prop-types)

--but it's still useful.

proptype is a runtime check to see if you're including the appropriate kind of prop types.

It's most useful for documentation.
Another author would come in and say "okay this object requires this this and this..."


Object Spread for JSX
//search.jsx
Explicitly:
{preload.shows.map(show => (
  <ShowCard title={show.title} description={show.description} year={show.year} poster={show.poster} />
)
OR... you can use the spread operator.
<div className="search">{preload.shows.map(show => <ShowCard {...show} />)})



KEY/PROP
console error: "Warning: Each child in an array or iterator should have a unique "key" prop."

If the data fed into react is resorted and reorganized (which it always is) into nested components,
this could get really expensive.

The way to side-step this:
react gives you a "handle to hold on to"

so...
key={show.imdbID}
the only thing that is required is that it's unique for that object.

It seems to be like using a foreign key in SQL. (It finds one thing unique to that entry (Obj) in the array of objects).



Important explanation of using:  (vid 28)

      {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})

_______________
//ShowCard.jsx
import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

const Search = () => (
<div className="search">
<div>
{preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)})
</div>
</div>
);

export default Search;
_______________

The key={show.imdbID}
The objects may always be changing...
but the id "travels" with each obj in that array.
This is a reliable way to hit the object you need--rather than relying on an "index" parameter in .map(index)...etc.

attr key is a special property that is not passed in props and cant be used within a component













StyledComponents vs cssComponents:

"&" also works in styled components
$media also works!!

cssComponents import css files at the top of a component:
import '../ShowCard.css'

this would be the styling exclusively for this particular component.
In dev... if I don't need (and so, delete) ShowCard.jsx --> then I'm certain to be able to delete ShowCard.css !

BrianHolt's opinion is THAT is the way to go in production.

However, StyledComponents offer amazing possibilities.

It is a departure from react's optimized model because the css is parsed TWICE !

parsed in js... they output a style tag which then gets parsed by the css parser.

"We have deviated from the optimized path."

import styled from 'styled-components';



// tagged template literal
const Wrapper = styled.div`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
`;

const ShowCard = props => (
  <Wrapper>
    <div className="show-card">
      <img alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
      <div>
        <h3>{props.title}</h3>
        <h4>({props.year})</h4>
        <p>{props.description}</p>
      </div>
    </div>
  </Wrapper>
);

Here, above, a hash is generated that becomes a class that is placed on the component with all of the styling for this component.


HashRouter:
It is a higher-order component. It is easer server-side... and really SEO UNFRIENDLY.

Better URLS means people will remember then and share them, etc.

It doesn't actuallly render itself out.
It introduces behavior (takes care of routing) but it doesn't render markup

It encapsulates behavior it doesn't encapsulate style or markup.

A word about the "#" in the url.

Taking it out is 1000,000000 times more SEO friendly.

It's really lazy and don't do it.


RouterNotes solves it.
uses the DOM's "history" api
so you get back button, fwd button... all that works automatically.

< Link > tags
<Link to="/search">or browse all</Link>
All this does is generate an <a> tag with a correct URL to go to.


BrowserRouter:
change HashRouter to BrowserRouter

and in webpack edit:

devServer: {
  publicPath: '/public/',
  historyApiFallback: true
},

then, reset server....

"      <Route component={FourOhFour} />" (without a path)
If nothing else matches then render this.

<Switch>
Switch says "ONLY RENDER ONE COMPONENT"
it goes in order...
component says ONLY RENDER 404 if nothing else matches.

Variable arity:
React components have variable arity:

This simply means that multiple instances of a component can be created.






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

/* default proptypes look like this (for non required things)

ShowCard.defaultProps = {
  foo: 'stuff',
};
      <p>{props.stuff}</p>
           (cf vid23: 7minutes)     */


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

vid7
eslint
airbnb configurals

Vid 10 Note

There is no
const react = require('react')
(dynamic importing)...
There is only static importing...
The advantage of this is that we can include only what we need to include.

static modules enables tree shaking... (which is a misnomer)... it's actually "live-code inclusion"
rather than removing dead code.

so
import { render } from 'react-dom'
means "include only render from reactDOM"

Therfore...
at the bottom...
reactDOM.render... is not necessary...
instead
render(React.createElement(MyFirstComponent), document.getElementById('app'));

import React from 'react' is including the entire package.

vid11 babel:
--------
A preset is just a group of plugins
react is 3 plugins: babel -jsx comprehension, transformation and the last is "flow"

env is the auto prefixer for javascript

loose: true
is about edge-cases... but true doesn't cover every single imaginable edge-case.
There's potential for breakage, but code is smaller

"modules": false
"babel,  don't transpile modules!"
webpack will worry about it.
babel will run on js code

THis enables live-code inclusion or "tree-shaking"

_______________
vid 13
const path = require('path')
this is meant for node...

//webpack.config.js
test: /\.jsx?$/,
loader: 'babel-loader'


Anything that runs thru .js or .jsx, run thru babel
--It will then hand it back to webpack.

------------------
Towards the start:

Question.

The MyFirstComponent is feeding into children via props...
How do we get < inputs > to flow back out again?


const ce = React.createElement
    const SubComp = function(props) {
        return (
            ce('div', {id:'dad'},
                ce('h1', {style: {color: props.color} }, props.title)
            )
        )
    }

    const MyFirstComponent = function () {
        return ce('div', {id:'grandpa'},
            ce(SubComp, {title: 'john', color: '#5df'}),
            ce(SubComp, {title: 'paul', color: '#2f0'}),
            ce(SubComp, {title: 'george', color: '#0de'}),
            ce(SubComp, {title: 'ringo', color: '#fa5'})
        )
    }

    ReactDOM.render(
        React.createElement(MyFirstComponent),
            document.getElementById('app')
    )
*/
