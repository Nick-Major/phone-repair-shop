import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{service.name}</h3>
      <p className={styles.price}>{service.price} ₽</p>
      <Link to={`/${service.id}/details`} className={styles.link}>
        Подробнее
      </Link>
    </div>
  );
};
