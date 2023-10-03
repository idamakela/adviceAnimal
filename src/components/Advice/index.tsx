import styles from './advice.module.scss';

interface AdviceProps {
  advice: any;
}

const Advice = ({ advice }: AdviceProps) => {
  return (
    <div className={styles.advice}>
      <h2>Pandy says:</h2>
      {advice ? <p>{advice.advice}</p> : <p>Do you want some advice?</p>}
    </div>
  );
};

export default Advice;
