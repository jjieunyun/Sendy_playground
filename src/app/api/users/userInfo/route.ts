import {NextResponse} from 'next/server'
import {cookies} from 'next/headers';

export async function GET() {
  const cookie = cookies().get('userInfo') || null;

  if(cookie){
    const userInfo = JSON.parse(cookie?.value || '')
    return NextResponse.json({result: true, data: userInfo})
  }
  return NextResponse.json({result: false, data: null})
}