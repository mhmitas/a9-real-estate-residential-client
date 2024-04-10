import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    // console.error(error);

    return (
        <div className="flex flex-col justify-center h-screen">
            <h1 className="text-center text-3xl text font-bold">Oops! Looks like you followed a bad link.</h1>
            <p className="text-center text-5xl text-error font-bold">{error.status}</p>
            <p className="text-center text-3xl text font-bold">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link className="mx-auto">
                <button className="btn btn-success my-6">Go Back Home</button>
            </Link>
        </div>
    );
}


