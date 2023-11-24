import {NextRequest, NextResponse} from "next/server";
import Axios from "axios";
import {cookies} from "next/headers";


export async function POST(req: NextRequest) {
    const requestBody = await req.json();
    const token = cookies().get('sp_token')?.value || '';

    try {
        const response = await Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/lunch/inclusion`, requestBody, {
            headers: {
                Authorization: token,
            }
        })

        return NextResponse.json({data: response.data}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}
