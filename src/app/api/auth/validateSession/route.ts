import {NextRequest, NextResponse} from 'next/server'
import {cookies} from 'next/headers';
import Axios from "axios/index";
import {cookieOptions} from "@lib/cookieOption";

export async function GET(req: NextRequest, res: NextResponse) {
    const token = String(cookies().get('token'))
    
    try {
        const response = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/checkSession`, {
            headers: {
                token: token,
            }
        });
        
        if (response.data.result) {
            const {sessionToken: {token}} = response.data.data;
            cookies().set('token', token, cookieOptions);
            // cookies().set('userInfo', JSON.stringify(response.data.data), cookieOptions);
        }
        
        return NextResponse.json({
            data: response.data.data.dta,
        }, {status: 200});
        
    } catch (error) {
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
    }
}