import styles from './advice.module.scss';
import Loading from '../Loading';

interface AdviceProps {
  advice: {
    id: number;
    advice: string;
  } | null;
  loading: boolean;
}

const Advice = ({ advice, loading }: AdviceProps) => {
  return (
    <div className={styles.advice}>
      <h2>Pandy says:</h2>
      {loading ? (
        <Loading />
      ) : !advice ? (
        <p>Do you want some advice?</p>
      ) : (
        <p>{advice.advice}</p>
      )}
    </div>
  );
};

export default Advice;
