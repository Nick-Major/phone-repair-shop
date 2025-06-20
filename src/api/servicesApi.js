export const fetchServices = async () => {
  const response = await fetch('http://localhost:3000/api/services');
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return await response.json();
};

export const fetchServiceDetails = async (id) => {
  const response = await fetch(`http://localhost:3000/api/services/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch service details');
  }
  return await response.json();
};
