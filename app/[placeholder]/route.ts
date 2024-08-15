import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest, {params}: { params: { placeholder: string } }) {
    const {placeholder} = params;
    const [dimensions] = placeholder.split('&');
    const [width, height] = dimensions.split('x').map(Number);

    const MAX_DIMENSION = 4000;

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0 || width > MAX_DIMENSION || height > MAX_DIMENSION) {
        return NextResponse.json({error: 'Invalid dimensions'}, {status: 400});
    }

    let customText = `${width}x${height}`; // Default text
    let textColor = '#000000'; // Default text color
    let backgroundColor = '#cccccc'; // Default background color

    // Manually parse the query string from the URL
    const queryString = req.url.split('&').slice(1).join('&');
    const searchParams = new URLSearchParams(queryString);

    if (searchParams.has('text')) {
        customText = searchParams.get('text')?.replace(/\+/g, ' ') || customText;
    }

    if (searchParams.has('color')) {
        textColor = searchParams.get('color') || textColor;
        textColor = textColor.replace(/_/g, '#'); // Replace _ with #
    }

    if (searchParams.has('background')) {
        backgroundColor = searchParams.get('background') || backgroundColor;
        backgroundColor = backgroundColor.replace(/_/g, '#'); // Replace _ with #
    }

    const minDimension = Math.min(width, height);
    const fontSize = minDimension * 0.05; // Font size as 5% of the smaller dimension

    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}" />
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-size="${fontSize}" 
        fill="${textColor}"
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
