// import {withIronSessionApiRoute} from 'iron-session/next'
// import {NextApiRequest, NextApiResponse} from "next";
//
// export const ironOptions = {
//     password: process.env.NEXT_PUBLIC_SESSION_PW,
//     cookieName: "sendy_playground_cookie",
//     cookieOptions: {
//         secure: true,
//         sameSite: "none" as "none",
//         path: "/",
//     }
// };
//
// function apiHandler(handler: (req: any, res: any) => void) {
//     return async function (req: NextApiRequest, res: NextApiResponse) {
//         try {
//             // @ts-ignore
//             if (!req.session.token && !(req.url === '/api/users/logout' || req.url === '/api/users/login')) {
//                 return res.status(401).json({error: '세션이 만료되었습니다.'});
//             }
//             await handler(req, res);
//         } catch (error:any) {
//             if (error.response) {
//                 console.log(error.response)
//                 return res.status(error.response.status).json(error.response.data || error);
//             } else {
//                 return res.json(error);
//             }
//         }
//     }
// }
//
// export function apiServerHandler(handler: (req: any, res: any) => void) {
//     return withIronSessionApiRoute(apiHandler(handler), ironOptions)
// }