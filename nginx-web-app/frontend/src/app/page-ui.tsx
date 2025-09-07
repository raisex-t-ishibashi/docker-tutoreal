"use client"; // このファイルはクライアントサイド(ブラウザ)で実行される

import { useEffect, useState } from 'react';

interface Data {
  message: string;
}

export default function PageUi({ data }: { data: Data }) {
  const [helloData, setHelloData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchHelloData = async () => {
      console.log("this is client side process. fetch /api/hello")
      // frontendのコンテナへリクエスト
      const res = await fetch('/api/hello');
      const data = await res.json();
      setHelloData(data);
    };

    fetchHelloData();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Hello</h2>
        <div>
          {helloData ? JSON.stringify(helloData, null, 2) : 'Loading...'}
        </div>
      </div> 
      <div>
        <h2 className="text-2xl font-semibold mb-4">Hello2</h2>
        <div>
          {JSON.stringify(data, null, 2)}
        </div>
      </div>
    </div>
  );
}