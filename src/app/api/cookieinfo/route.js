import { cookies } from "next/headers";
import { NextResponse } from 'next/server'

export async function GET(request) {
    // console.log({ request: request?.param, url: request?.url, nextUrl: request?.nextUrl })
    const lang = request.url.split('?')
    console.log({ lang: lang[1].split('=')[1] })
    const cookie = cookies()
    cookie.set('NEXT_LOCALE', lang[1].split('=')[1])
    return NextResponse.json({ message: 'cookie updated' })
}