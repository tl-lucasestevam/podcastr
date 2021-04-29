import '../styles/global.scss'

import Router from "next/router";

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'

import ProgressBar from "@badrap/bar-of-progress";
import { PlayerContextProvider } from '../contexts/PlayerContext';

const progress = new ProgressBar({
  size: 5,
  color: "#04D361",
  className: "bar-of-progress"
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp