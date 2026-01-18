// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-gray-600">
        Sorry, this page doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 text-red-500 underline"
      >
        Go home
      </Link>
    </div>
  );
}
