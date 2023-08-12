const heading = React.createElement("div",{id:"parents"},
React.createElement("div",{id:"childs"},
[React.createElement("h1",{id:"children"},"Iam an H1 Tag"),React.createElement("h2",{id:"children"},"Iam an H2 Tag"),React.createElement("h3",{id:"children"},"Iam an H3 Tag")] )) 
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);