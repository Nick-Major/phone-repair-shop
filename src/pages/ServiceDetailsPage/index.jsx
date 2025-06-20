import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorNotification } from '../../components/ErrorNotification';
import { ServiceDetails } from '../../components/ServiceDetails';
import { fetchServiceDetailsRequest } from '../../store/services/actions';
import styles from './styles.module.css';

export const ServiceDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { serviceDetails, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServiceDetailsRequest(id));
  }, [dispatch, id]);

  const handleRetry = () => {
    dispatch(fetchServiceDetailsRequest(id));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorNotification onRetry={handleRetry} />;
  }

  return (
    <div className={styles.container}>
      {serviceDetails && <ServiceDetails service={serviceDetails} />}
    </div>
  );
};
