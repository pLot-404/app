/* eslint-disable import/extensions */
import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <h1>Hello Jikennya!</h1>
      <div className={`test-class ${styles.test}`}>
        hello css-modules with sass
      </div>
      <div className={styles['dummy-text']}>dummy-text</div>
    </>
  );
}

export default App;
