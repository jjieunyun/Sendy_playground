import {NextApiRequest, NextApiResponse} from "next";
import {cookies} from 'next/headers';

function apiHandler(handler: (req: any, res: any) => void) {
    const token = cookies().get('token');
    
    return async function (req: NextApiRequest, res: NextApiResponse) {
        try {

            if (!token && !(req.url === '/api/auth/onUserSignIn' || req.url === '/api/auth/onUserSignOut')) {
                return res.status(401).json({error: '세션이 만료되었습니다.'});
            }
            await handler(req, res);
        } catch (error:any) {
            if (error.response) {
                console.log(error.response)
                return res.status(error.response.status).json(error.response.data || error);
            } else {
                return res.json(error);
            }
        }
    }
}

export function apiServerHandler(handler: (req: any, res: any) => void) {
    return apiHandler(handler)
}