import {NextRequest, NextResponse} from 'next/server';
import sharp from 'sharp';

export async function GET(request: NextRequest, {params}: { params: { dimensions: string } }) {
    const {dimensions} = params;
    const [width, height] = dimensions.split('x').map(Number);

    if (isNaN(width) || isNaN(height)) {
        return NextResponse.json({error: 'Invalid dimensions'}, {status: 400});
    }

    const svgImage = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#CCCCCC" />
      <text x="50%" y="50%" font-size="20" text-anchor="middle" fill="#000000" dy=".3em">${width}x${height}</text>
    </svg>
  `;

    try {
        const buffer = await sharp(Buffer.from(svgImage))
            .png()
            .toBuffer();

        const response = new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'image/png',
                'Access-Control-Allow-Origin': '*', // Add CORS header
                'Cache-Control': 'public, max-age=31536000, immutable', // Cache the image for better performance
            },
        });

        return response;
    } catch (error) {
        return NextResponse.json({error: 'Error generating image'}, {status: 500});
    }
}
