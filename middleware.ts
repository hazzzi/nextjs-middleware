import { NextRequest, NextResponse } from "next/server";

const requestAuth = async (auth: boolean) => {
  const promise = new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.1) {
        resolve(true)
      }else{
        throw new Error('error');
      }
    }, 1000);
  });

  
  auth = await promise;
  
  return auth;
}


export async function middleware(req: NextRequest) {
  const auth = await requestAuth(false);
  console.log(':::in middleware', auth, req.nextUrl.pathname)

  if(!auth && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/home', '/login'],
}
