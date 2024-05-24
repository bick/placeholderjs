import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest, {params}: { params: { placeholder: string } }) {
    const {placeholder} = params;
    const [width, height] = placeholder.split('x').map(Number);

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        return NextResponse.json({error: 'Invalid dimensions'}, {status: 400});
    }

    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#cccccc" />
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-size="20" 
        fill="#000000"
        font-family='-apple-system, "Inter", sans-serif'>
        ${width}x${height}
      </text>
    </svg>
  `;

    return new NextResponse(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
        },
    });
}
