'use client';

import { useState } from 'react';

export default function SNSTestPage() {
  const [status, setStatus] = useState<string>('');

  const handleNotify = async () => {
    try {
      const response = await fetch('/api/sns-pub', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'hello sns!!' }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">SNS Test Page</h1>
      <button
        onClick={handleNotify}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        notify!
      </button>
      {status && (
        <p className="mt-4 text-gray-600">{status}</p>
      )}
    </div>
  );
}
