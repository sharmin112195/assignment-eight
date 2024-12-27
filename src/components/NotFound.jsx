import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="text-center space-y-4 mt-40">
            <h2 className="text-7xl">404</h2>
            <p className="text-2xl text-gray-500">Not Found This Url</p>
            <Link to={"/"}>
            <button className="btn bg-purple-700 text-white hover:text-gray-700 mt-5">Go Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;