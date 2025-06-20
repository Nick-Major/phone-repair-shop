import styles from './styles.module.css';

export const ServiceDetails = ({ service }) => {
  return (
    <div className={styles.details}>
      <h2 className={styles.title}>{service.name}</h2>
      <p className={styles.price}>Цена: {service.price} ₽</p>
      <div className={styles.content}>
        <h3>Описание:</h3>
        <p>{service.content}</p>
      </div>
    </div>
  );
};
