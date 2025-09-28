import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Roki Foods';
    const subtitle = searchParams.get('subtitle') || 'Sustainable Palm Oil & Natural Products';
    const template = searchParams.get('template') || 'default';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F4F3EF', // cream-50
            backgroundImage: 'radial-gradient(circle at 25% 25%, #EEF2ED 0%, transparent 50%), radial-gradient(circle at 75% 75%, #D5D1C6 0%, transparent 50%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(rgba(11, 61, 46, 0.06) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.3,
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '900px',
              padding: '60px',
              textAlign: 'center',
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#0B3D2E', // leaf-900
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                }}
              >
                <span style={{ fontSize: '40px', color: '#F4F3EF' }}>🌱</span>
              </div>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#0B3D2E', // leaf-900
                  letterSpacing: '-0.02em',
                }}
              >
                Roki Foods
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#0B3D2E', // leaf-900
                lineHeight: 1.1,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                style={{
                  fontSize: '32px',
                  color: '#2E7D32', // leaf-600
                  lineHeight: 1.3,
                  marginBottom: '40px',
                  maxWidth: '800px',
                }}
              >
                {subtitle}
              </p>
            )}

            {/* Decorative Elements */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginTop: '40px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#C7A15A', // sun-400
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  fontSize: '24px',
                  color: '#2E7D32', // leaf-600
                  fontWeight: '500',
                }}
              >
                Sustainable • Ethical • Zero Waste
              </span>
              <div
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#C7A15A', // sun-400
                  borderRadius: '2px',
                }}
              />
            </div>
          </div>

          {/* Bottom Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '8px',
              background: 'linear-gradient(90deg, #0B3D2E 0%, #2E7D32 50%, #C7A15A 100%)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
