import { useEffect, useState } from 'react';

type ServiceHealth = {
  service_name: string;
  region: string;
  health: string;
};

const ServiceHealth = () => {
  const [data, setData] = useState<ServiceHealth[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      fetch('/api/v1/servicehealth')
      .then((response) => response.json())
      .then((data: ServiceHealth[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error received:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px 10px', borderRadius: '10%'  }}>
      <h1>Service Health:</h1>
      {loading ? (
        <p>Please wait sometime...</p>
      ) : (
        <table border={1} style={{ width: '100%'}}>
          <thead style={{color: 'blue'}}>
            <tr>
                <th style={{ width: '10%'}}>Serial Number</th>
              <th>Service Name</th>
              <th>Region</th>
              <th>Health Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{list.service_name}</td>
                <td>{list.region}</td>
                <td>{list.health}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServiceHealth;
