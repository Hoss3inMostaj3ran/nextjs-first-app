import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

// this Execute on every request!
// export async function middleware(request: NextRequest) {
//   return await updateSession(request);
// }
/*
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/new-page", request.url));
}
*/
// syntax 1:
// import middleware from "next-auth/middleware";
// export default middleware;

// Better syntax:
export { default } from "next-auth/middleware";

// so we need to add config to middleware
export const config = {
  // * : zero or more
  // + : 1 or more
  // ? : zero or one
  matcher: ["/api/users/:id+"],
};
