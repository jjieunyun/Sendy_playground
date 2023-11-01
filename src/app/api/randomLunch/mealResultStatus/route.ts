import {NextRequest, NextResponse} from 'next/server'
import {cookies} from 'next/headers';
import Axios from "axios/index";

export async function GET(req: NextRequest, res: NextResponse) {
    const token = String(cookies().get('token'))
    const searchParams = req.nextUrl.searchParams

    try {
        const response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/random-lunch/finalize-validation`, {
            headers: {
                token: token,
            },
            params: {
                searchParams
            }
        });

        return NextResponse.json({data: response.data.data}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}