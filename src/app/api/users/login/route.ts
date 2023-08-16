import Axios from "axios";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from 'next/headers';

export async function POST(req: NextRequest, res: NextResponse){
  const data = await req.json();
  const cookieOption = {
    httpOnly: true,
    sameSite: "none" as const,
    path: "/",
    secure: true,
    maxAge: 3600 * 2
  }

  return await Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/manager/login`, data, {
    headers: {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  })
    .then((response) => {
      if (response.data.result) {
        const {token, data} = response.data;
        // console.log(JSON.stringify(data))
        cookies().set('token', token, cookieOption);
        cookies().set('userInfo', JSON.stringify(data), cookieOption);

        return NextResponse.json({
          data: response.data,
        }, {status: 200});
      }
    })
    .catch((error) => {
      if (error?.response) {
        // 서버 응답이 있는 경우
        return NextResponse.json({ message: error.response.data.message }, { status: error.response.status });
      } else {
        // 서버 응답이 없는 경우 또는 기타 에러
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
      }
    });
}

