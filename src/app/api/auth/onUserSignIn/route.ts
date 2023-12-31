import Axios from "axios";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from 'next/headers';
import {cookieOptions} from "@lib/cookieOption";



export async function POST(req: NextRequest, res:NextResponse) {
    const requestBody = await req.json();
    
    try {
        const response = await Axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/login`, requestBody)
        if (response.data.result) {
           const token = response.data.data.sessionToken.token

            cookies().set('sp_token', token, cookieOptions);
        }
        return NextResponse.json({data: response.data}, {status: 200});
        
    } catch (error) {
        if (error) {
            return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
        }
    }
}

