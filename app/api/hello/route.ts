import type {NextRequest} from 'next/server';
import {PrismaClient} from '@prisma/client';
import {PrismaD1} from '@prisma/adapter-d1';
import {getRequestContext} from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
    let responseText = 'Hello World'
    const {env, cf, ctx} = getRequestContext();
    const adapter = new PrismaD1(env.DB)
    const prisma = new PrismaClient({adapter})

    let count = await prisma.user.count();
    console.log('[prisma] select user count', count);

    // In the edge runtime you can use Bindings that are available in your application
    // (for more details see:
    //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
    //    - https://developers.cloudflare.com/pages/functions/bindings/
    // )
    //
    // KV Example:
    // const myKv = getRequestContext().env.MY_KV_NAMESPACE
    // await myKv.put('suffix', ' from a KV store!')
    // const suffix = await myKv.get('suffix')
    // responseText += suffix

    return new Response(responseText)
}
