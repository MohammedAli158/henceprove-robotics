"use client"
import { useEffect, useState } from 'react';
const Transactions = () => {
  const [hasCourses, setHasCourses] = useState<boolean | null>(null);

  // Placeholder for database check
  const checkUserTransactions = async (): Promise<boolean> => {
    // TODO: Implement actual DB check logic here
    return false; // default for now
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await checkUserTransactions();
      setHasCourses(result);
    };
    fetchCourses();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      
      {hasCourses === null ? (
        <p>Loading...</p>
      ) : hasCourses ? (
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* Dummy course cards */}
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>Transaction 1</h3>
            <p>Description of Transaction 1</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>Transaction 2</h3>
            <p>Description of Transaction 2</p>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className='font-bold text-center' >{"You Haven't made any Transactions yet"}</h1>
        </div>
      )}
    </div>
  );
};

export default Transactions;