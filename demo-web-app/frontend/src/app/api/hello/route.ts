// サーバーサイドで実行される
import { NextResponse } from 'next/server';

export async function GET() {
  console.log("this is server side process. start GET /api/hello")
  return NextResponse.json({ message: "hello" });
} 