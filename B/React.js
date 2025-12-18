

const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child"}, 
        [React.createElement("h1", {}, "Hey i am h1 from child-1"), 
            React.createElement("h2", {}, "Hey i am h2")
        ]),
    React.createElement("div", {id : "child2"}, 
        [React.createElement("h1", {}, "Hey i am h1 from child-2"), 
            React.createElement("h2", {}, "Hey i am h2")
        ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//If we want to pass multiple h1's or multiple of div we need to create an array []