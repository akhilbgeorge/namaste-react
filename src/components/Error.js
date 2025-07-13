import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h3>Oops!</h3>
      <h4>Something went wrong</h4>
      <h4>
        {err.status}:{err.statusText}
      </h4>
    </div>
  );
};

export default Error;
