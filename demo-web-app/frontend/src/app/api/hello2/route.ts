// サーバーサイドで実行される
import { NextResponse } from 'next/server';

export async function GET() {
  console.log("start GET /api/hello2")
  try {
    // backendのコンテナへリクエスト host.docker.internal:18000でもOK
    const response = await fetch('http://backend:18000/hello');
    const data = await response.json();
    console.log("GET /api/hello2. response:", data)
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch from backend: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
} 