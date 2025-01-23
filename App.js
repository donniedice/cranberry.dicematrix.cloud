import React from 'react';
import './App.css'; // This is still used for global resets and layout
import './themes/defaultTheme.css'; // Importing theme CSS
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'; // Import Footer component

function App() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main>
        <Home />
      </main>

      {/* Footer Section */}
      <Footer currentYear={currentYear} />
    </div>
  );
}

export default App;
