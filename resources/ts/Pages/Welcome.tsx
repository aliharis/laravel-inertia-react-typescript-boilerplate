import React from 'react';

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to Laravel x Inertia x React x TypeScript x TailwindCSS
          </h1>
          <p className="text-gray-700">
            This is a Laravel 10 boilerplate with the following libraries:
          </p>
          <ul className="text-gray-700 pl-4 mt-4">
            <li className="list-disc">Laravel v10</li>
            <li className="list-disc">Inertia v0.11</li>
            <li className="list-disc">React v18</li>
            <li className="list-disc">TypeScript v5</li>
            <li className="list-disc">Vite v4</li>
            <li className="list-disc">TailwindCSS + (Forms, Typography)</li>
            <li className="list-disc">HeadlessUI</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Welcome;
