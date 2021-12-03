import React from 'react';
import styles from './App.module.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <main className={styles['app']}>
      <ProfileCard/>
    </main>
  );
}

export default App;
