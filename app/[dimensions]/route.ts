import {NextRequest, NextResponse} from 'next/server';
import {createCanvas} from 'canvas';

export async function GET(req: NextRequest, {params}: { params: { dimensions: string } }) {
    const {dimensions} = params;
    const [width, height] = dimensions.split('x').map(Number);

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        return NextResponse.json({error: 'Invalid dimensions'}, {status: 400});
    }

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    context.fillStyle = '#cccccc';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#000000';
    context.font = '20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(`${width}x${height}`, width / 2, height / 2);

    const buffer = canvas.toBuffer('image/png');
    return new NextResponse(buffer, {
        headers: {
            'Content-Type': 'image/png',
        },
    });
}
