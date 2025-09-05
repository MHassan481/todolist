import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <nav className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm space-y-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h1>
        <Link
          to="/login"
          className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Login Page
        </Link>

        <Link
          to="/register"
          className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Register Page
        </Link>

        <Link
          to="/formikForm"
          className="block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
        >
          FormikForm Page
        </Link>
        <Link
          to="/formikFormData"
          className="block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          FormikFormData Page
        </Link>
        <Link
          to="/to-doList"
          className="block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          To-do List
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
