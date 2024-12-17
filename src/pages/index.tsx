import { useEffect, useState } from 'react';
import styles from  "./main.module.css";

type ServiceStatus = {
    east_us: string;
    west_us: string;
    west_europe: string;
    east_asia: string;
    canary: string;
    staging: string;
  };
  
  type Service = {

    name: string;
    status: ServiceStatus;
  };
  
const ServiceHealth = () => {
  const [data, setData] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      fetch('/api/v1/servicehealth')
      .then((response) => response.json())
      .then((data: Service[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error received:', error);
        setLoading(false);
      });
  }, []);
  const renderHealthStatus = (health: string) => {
    if (health === 'Healthy') {
      return <span className={styles.greenTick}>✅</span>;  
    } else if (health === 'Unhealthy') {
      return <span className={styles.redTick}>❌</span>;  
    }else if (health === 'Degraded') {
        return <span className={styles.yellowTick}>⚠️</span>;
    }
    return <span>Unknown</span>; 
  };

  return (
    <div style={{ padding: '20px 10px', borderRadius: '10%'  }}>
      <h1 className={styles.title}>Service Health:</h1>
      {loading ? (
        <p>Please wait sometime...</p>
      ) : (
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trHead}>
                <th className={styles.th} >Services</th>
              <th className={styles.th}>East US</th>
              <th className={styles.th}>West US</th>
              <th className={styles.th}>West Europe</th>
              <th className={styles.th}>East Asia</th>
              <th className={styles.th}>Canary</th>
              <th className={styles.th}>Staging</th>
            </tr>
          </thead>
          <tbody className={styles.trBody}>
            {data.map((list, index) => (
              <tr key={index}>
                <td className={styles.td}>{list.name}</td>
                <td className={styles.td}>{renderHealthStatus(list.status.east_us)}</td>
                <td className={styles.td}> {renderHealthStatus(list.status.west_us)}</td>
                <td className={styles.td}> {renderHealthStatus(list.status.west_europe)}</td>
                <td className={styles.td}>{renderHealthStatus(list.status.east_asia)}</td>
                <td className={styles.td}> {renderHealthStatus(list.status.canary)}</td>
                <td className={styles.td}> {renderHealthStatus(list.status.staging)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServiceHealth;
