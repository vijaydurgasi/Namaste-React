// const headding = React.createElement("h1", {id : "head"}, "Namaste React");
// console.log(headding); // headding is an react element it creates an object in js
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headding);


// task   <div id = "parent">
//            <div id = "child"> 
//                 <h1> I am leaning</h1>
//             </div>
//        </div>

const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id : "child"}, 
        React.createElement("h1", {}, "I am learning React")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
