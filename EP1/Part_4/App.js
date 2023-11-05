const header = React.createElement("div",
{id :"header"},
[React.createElement("h1",
{id :"text1"},"This is Header 1"
),React.createElement("h1",
{id :"text2"},"This is Header 2"
)]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(header);