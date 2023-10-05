import { motion } from 'framer-motion';
import styles from './loading.module.scss';

const Loading = () => {
  const dotTransition: any = {
    duration: 0.75,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles['container__dot']}
        initial={{ y: 0 }}
        animate={{ y: -5 }}
        transition={dotTransition}
      />
      <motion.div
        className={styles['container__dot']}
        initial={{ y: 0 }}
        animate={{ y: -5 }}
        transition={{
          ...dotTransition,
          delay: 0.25,
        }}
      />
      <motion.div
        className={styles['container__dot']}
        initial={{ y: 0 }}
        animate={{ y: -5 }}
        transition={{
          ...dotTransition,
          delay: 0.5,
        }}
      />
    </div>
  );
};

export default Loading;
