import React from 'react';

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Welcome to Laravel Boilerplate 🚀</h1>
          <p className="text-gray-700">This is a Laravel starter kit with the following stack:</p>
          <ul className="text-gray-700 pl-4 mt-4">
            <li className="list-disc">Laravel v11</li>
            <li className="list-disc">Inertia v1.0 (dev-master)</li>
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
