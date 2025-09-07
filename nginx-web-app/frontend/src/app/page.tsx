// このファイルはサーバーサイドで実行される
import PageUi from "./page-ui";

export const fetchCache = 'default-no-store';

async function getHello2Data() {
  console.log("this is server side process. fetch /api/hello2")
  // frontendのコンテナへリクエスト
  const res = await fetch('http://frontend:13000/api/hello2');
  if (!res.ok) {
    throw new Error('Failed to fetch hello2 data');
  }
  return res.json();
}

export default async function Home() {
  const hello2Data = await getHello2Data();

  return (
    <PageUi data={hello2Data}/>
  );
}
