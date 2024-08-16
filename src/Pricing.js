import React, { useState } from 'react';

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-500`}>
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pricing</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 border rounded"
          aria-label="Toggle dark mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold">Basic</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Perfect for individuals</p>
          <p className="mt-4 text-2xl font-bold">$19 / month</p>
          <ul className="mt-4 space-y-2">
            <li>1 Project</li>
            <li>10 GB Storage</li>
            <li>24/7 Support</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Started</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">For teams and professionals</p>
          <p className="mt-4 text-2xl font-bold">$49 / month</p>
          <ul className="mt-4 space-y-2">
            <li>10 Projects</li>
            <li>100 GB Storage</li>
            <li>Priority Support</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Started</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Custom solutions for enterprises</p>
          <p className="mt-4 text-2xl font-bold">Contact Us</p>
          <ul className="mt-4 space-y-2">
            <li>Unlimited Projects</li>
            <li>Unlimited Storage</li>
            <li>Dedicated Support</li>
          </ul>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Contact Us</button>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
