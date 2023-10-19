import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: ["/dashboard/:path*", "/auth-callback"],
};

export default authMiddleware;

//securing our app, ie, only logged in users can visit our app
