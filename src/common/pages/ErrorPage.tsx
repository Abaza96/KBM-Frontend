import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
    <p className="text-lg text-gray-600 mb-6">
      The page you're looking for doesn't exist.
    </p>
    <Link
      to="/"
      className="bg-transparent text-black px-6 py-2 rounded-md transition"
    >
      Go Back Home
    </Link>
  </div>
);

export default ErrorPage;
