import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorNotification } from '../../components/ErrorNotification';
import { ServiceCard } from '../../components/ServiceCard';
import { fetchServicesRequest } from '../../store/services/actions';
import styles from './styles.module.css';

export const Home = () => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchServicesRequest());
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorNotification onRetry={handleRetry} />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список услуг</h1>
      <div className={styles.servicesList}>
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/${service.id}/details`}
            className={styles.link}
          >
            <ServiceCard service={service} />
          </Link>
        ))}
      </div>
    </div>
  );
};
