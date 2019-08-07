import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout title="Sample react">
      </Layout>
    </div>
  );
}

export default App;
