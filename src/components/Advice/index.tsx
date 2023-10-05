import styles from './advice.module.scss';
import Loading from '../Loading';

interface AdviceProps {
  advice: {
    id: number;
    advice: string;
  } | null;
}

const Advice = ({ advice }: AdviceProps) => {
  return (
    <div className={styles.advice}>
      <h2>Pandy says:</h2>
      {advice ? <p>{advice.advice}</p> : <p>Do you want some advice?</p>}
      <Loading />
    </div>
  );
};

export default Advice;
