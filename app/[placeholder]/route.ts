import {NextRequest, NextResponse} from 'next/server';

const MAX_DIMENSION = 4000;
const DEFAULT_TEXT_COLOR = '#000000';
const DEFAULT_BG_COLOR = '#cccccc';

// Helper to replace underscores with # for color codes
function parseColor(color: string, defaultColor: string): string {
    if (!color) return defaultColor;
    return color.replace(/_/g, '#');
}

export async function GET(request: NextRequest, {params}: { params: { placeholder: string } }) {
    try {
        // The placeholder param might look like: "300x400&text=Hello&color=fff&background=000&fontSize=24"
        const {placeholder} = params;
        const [dimensions, ...rest] = placeholder.split('&');
        const [widthStr, heightStr] = dimensions.split('x');

        const width = parseInt(widthStr, 10);
        const height = parseInt(heightStr, 10);

        // Validate dimensions
        if (
            Number.isNaN(width) ||
            Number.isNaN(height) ||
            width <= 0 ||
            height <= 0 ||
            width > MAX_DIMENSION ||
            height > MAX_DIMENSION
        ) {
            return NextResponse.json({error: 'Invalid dimensions'}, {status: 400});
        }

        // Default values
        let customText = `${width}x${height}`;
        let textColor = DEFAULT_TEXT_COLOR;
        let backgroundColor = DEFAULT_BG_COLOR;

        // Parse any additional query string parameters
        const queryString = request.url.split('&').slice(1).join('&');
        const searchParams = new URLSearchParams(queryString);

        // Custom text
        if (searchParams.has('text')) {
            const textValue = searchParams.get('text');
            if (textValue) {
                // Replace + with space for query-encoded text
                customText = textValue.replace(/\+/g, ' ');
            }
        }

        // Custom text color
        if (searchParams.has('color')) {
            textColor = parseColor(searchParams.get('color') || '', DEFAULT_TEXT_COLOR);
        }

        // Custom background color
        if (searchParams.has('background')) {
            backgroundColor = parseColor(searchParams.get('background') || '', DEFAULT_BG_COLOR);
        }

        // Determine font size
        const minDimension = Math.min(width, height);
        let fontSize = Math.floor(minDimension * 0.05); // 5% of smaller dimension

        // Allow overriding the default font size
        if (searchParams.has('fontSize')) {
            const overrideFontSize = parseInt(searchParams.get('fontSize') || '', 10);
            if (!isNaN(overrideFontSize) && overrideFontSize > 0) {
                fontSize = overrideFontSize;
            }
        }

        // Build the SVG string
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

        // Return the SVG with production-ready headers
        return new NextResponse(svg, {
            headers: {
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error generating placeholder image:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}
