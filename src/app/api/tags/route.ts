import { requireAuth } from '@/lib/authActions';
import {fetchAllTags, postTag} from '@/models/tagModel';
import {MediaItemTag} from '@sharedTypes/DBTypes';
import { NextRequest, NextResponse, } from 'next/server';

export async function POST(request: NextRequest) {
    requireAuth();
    try {
        const tagData = await request.json() as { tag_name: string, media_id: number}

        if (!tagData.media_id || !tagData.tag_name) {
            return new NextResponse('Missing media_id or tag_name', { status: 400 })
        }

        const postResult = await postTag(tagData.tag_name, tagData.media_id);

        if (!postResult) {
            return new NextResponse('Error posting tag', { status: 500 });
        }
        return new NextResponse(JSON.stringify(postResult), { status: 200 });
    } catch (error) {
        return new NextResponse('Error posting tag', { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const tagData = await fetchAllTags();
        return new NextResponse(JSON.stringify(tagData), { status: 200 });
    } catch (error) {
        return new NextResponse('Error fetching tags', { status: 500 });
    }
}