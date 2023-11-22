import Axios from "axios";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from 'next/headers';

export async function POST(req: NextRequest, res: NextResponse) {
    const token = cookies().get('sp_token')?.value || '';

    try {
        const response = await Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/logout`, {}, {
            headers: {
                Authorization:token,
            }
        });

        if (response.data.result) {
            cookies().delete('sp_token');
        }

        return NextResponse.json({data: response.data}, {status: 200});

    } catch (error) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}
