import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <RecipeList />
      </main>
      <Footer />
    </div>
  );
}

export default App;