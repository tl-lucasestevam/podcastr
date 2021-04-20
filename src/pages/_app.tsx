import '../styles/global.css';
import styles from '../styles/app.modules.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp;
