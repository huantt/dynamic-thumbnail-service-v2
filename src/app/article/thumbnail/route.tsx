import { ImageResponse,NextRequest } from 'next/server';
// App router includes @vercel/og. No need to install it.
import Page from "@/app/article/thumbnail/html/page";
import {config} from "@/app/article/thumbnail/config";

export async function GET(req: NextRequest) {
    const html = await  Page({searchParams:{
        title: req.nextUrl.searchParams.get("title") as string,
        avatar: req.nextUrl.searchParams.get("avatar") as string,
        author:req.nextUrl.searchParams.get("author") as string,
        }})
    return new ImageResponse(
        html,
        {
            width: config.width,
            height: config.height,
            debug:( req.nextUrl.searchParams.get("debug") || "false" )== "true"
        },
    );
}