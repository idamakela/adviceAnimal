import PantaWave from '../../assets/pixel-panda-wave.png';
import styles from './animal.module.scss';

interface AnimalProps {
  handleClick: () => void;
}

const Animal = ({ handleClick }: AnimalProps) => {
  return (
    <div className={styles.animal}>
      <div className={styles['animal__img']}>
        <img
          className={styles['animal__img--img']}
          src={PantaWave}
          alt='waving pixelated panda'
          height='100'
          width='100'
        />
      </div>
      {/* <a href="https://www.vecteezy.com/free-vector/pixel-animal">Pixel Animal Vectors by Vecteezy</a> */}
      <div className={styles['animal__button']}>
        <button className={styles['animal__button--btn']} onClick={handleClick}>
          advice me
        </button>
      </div>
    </div>
  );
};

export default Animal;
