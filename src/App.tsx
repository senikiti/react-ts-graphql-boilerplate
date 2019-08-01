import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hello from './components/statefulHello';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout title="Sample react">
        <Hello name="world"/>
      </Layout>
    </div>
  );
}

export default App;
