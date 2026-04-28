import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";


export async function proxy(request) {

    const isLogedIn = await auth.api.getSession({
        headers: await headers()
    })
    console.log("isLogedIn", isLogedIn)

    if (isLogedIn) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))

}

export const config = {
    matcher: "/news-details/:path*",
}