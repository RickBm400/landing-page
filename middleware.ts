import { NextResponse, type NextRequest } from "next/server";
export default async function middleware(request: NextRequest) {
    return NextResponse.next()
}
