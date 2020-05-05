import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import styles from './App.module.scss';
import { Counter } from './features/counter/Counter'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Logo className={styles.AppLogo}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Counter/>
      </main>
    </div>
  );
}

export default App;
