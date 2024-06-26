import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest, {params}: { params: { placeholder: string } }) {
    const {placeholder} = params;
    const [dimensions, queryString] = placeholder.split('?');
    const [width, height] = dimensions.split('x').map(Number);

    const MAX_DIMENSION = 4000;

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0 || width > MAX_DIMENSION || height > MAX_DIMENSION) {
        return NextResponse.json({error: 'Invalid dimensions'}, {status: 400});
    }

    let customText = `${width}x${height}`; // Default text

    if (req.nextUrl.searchParams.has('text')) {
        customText = req.nextUrl.searchParams.get('text')?.replace(/\+/g, ' ') || customText;
    }

    const minDimension = Math.min(width, height);
    const fontSize = minDimension * 0.05; // Font size as 5% of the smaller dimension

    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#cccccc" />
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-size="${fontSize}" 
        fill="#000000"
        font-family='-apple-system, "Inter", sans-serif'>
        ${customText}
      </text>
    </svg>
  `;

    return new NextResponse(svg, {
        headers: {
            'Content-Type': 'image/svg+xml',
        },
    });
}
