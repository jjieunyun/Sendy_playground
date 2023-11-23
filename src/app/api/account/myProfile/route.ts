import {NextResponse} from 'next/server'
import {cookies} from 'next/headers';
import Axios from "axios";

export async function GET() {
    const token = cookies().get('sp_token')?.value || '';

    try {
        const response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/profile`, {
            headers: {
                Authorization:token,
            }
        });

        return NextResponse.json({data: response.data}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}

export async function POST(req: any) {
    const token = cookies().get('sp_token')?.value || '';
    const {body} = req;

    try {
        const response = await Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/profile/update`, body, {
            headers: {
                Authorization:token,
            }
        });

        return NextResponse.json({data: response.data}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}