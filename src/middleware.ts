import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import * as process from "process";


export const middleware = async (req: NextRequest) => {
    const token = req.cookies.get('sp_token')?.value || null;


    const verifySession = async ({token}:{token:any}) => {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/v1/session/health-check', {
                headers: {
                    Authorization: token,
                }
            });
            
            if (res.status !== 200) {
                throw new Error('NOT_VALID_TOKEN');
            }
        } catch (e) {
            throw e;
        }
    };

    if (req.nextUrl.pathname === '/') {
        if (token) {
            try {
                await verifySession({token});
                return NextResponse.redirect(new URL('/main', req.url));
            } catch (e) {
                return NextResponse.next();
            }
        } else {
            return NextResponse.next();
        }
    } else {
        if (token) {
            try {
                await verifySession({token});
                return NextResponse.next();
            } catch (e) {

                return NextResponse.redirect(new URL('/', req.url));
            }
        } else {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }

}

export const config = {
    matcher:  '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
export default middleware;
