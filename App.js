import ReactDOM from "react-dom/client";

const HeadingComponent1 = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const jsxHeading = (
  <div>
    <h1 id="heading">Namaste React using JSX</h1>
    <HeadingComponent1 />
  </div>
);

const HeadingComponent2 = () => (
  <div>
    {jsxHeading}
    <h1>Namaste React Functional Component 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);