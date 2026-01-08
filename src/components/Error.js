import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">

      <img
        src={new URL("../../images/error.jpg", import.meta.url)}
        alt="Error"
        className="w-[400px]"
      />

      <div className="mt-6">
        <h1 className="text-4xl font-bold">Oops!!!</h1>
        <h2 className="text-xl mt-2">Something went wrong</h2>

        {err?.status && (
          <h3 className="text-gray-600 mt-2">
            {err.status} : {err.statusText}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Error;
