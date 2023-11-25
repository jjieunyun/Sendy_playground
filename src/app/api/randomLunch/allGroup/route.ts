import {NextRequest, NextResponse} from 'next/server'
import {cookies} from 'next/headers';
import Axios from "axios";

export async function GET(req: NextRequest, res: NextResponse) {
    const token = cookies().get('sp_token')?.value || '';
    const searchParams = req.nextUrl.searchParams.toString();

    try {
        const response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/random-lunch/total-group?${searchParams}`,{
            headers: {
                Authorization:token,
            }
        });

        return NextResponse.json({data: response.data}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}



