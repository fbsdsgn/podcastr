import styles from "./styles.module.scss";

export const Player = () => {
  return (
    <div className={styles.player}>
      <header>
        <img src="/assets/svg/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.player__empty}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.player__progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.player__empty_slider}></div>
          </div>
          <span>00:00</span>
        </div>
        <div className={styles.player__buttons}>
          <button type="button">
            <img src="/assets/svg/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button">
            <img src="/assets/svg/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" className={styles.player__btn_play}>
            <img
              
              src="/assets/svg/play.svg"
              alt="Tocar"
            />
          </button>
          <button type="button">
            <img src="/assets/svg/play-next.svg" alt="Tocar próxima" />
          </button>
          <button type="button">
            <img src="/assets/svg/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
};
