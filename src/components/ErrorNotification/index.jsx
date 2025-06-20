import styles from './styles.module.css';

export const ErrorNotification = ({ onRetry }) => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorText}>Произошла ошибка при загрузке данных</p>
      <button className={styles.retryButton} onClick={onRetry}>
        Повторить запрос
      </button>
    </div>
  );
};