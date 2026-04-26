import { ScrollSection } from './ScrollSection';
import { SmileyIcon } from './SmileyIcon';
import { useState } from 'react';

interface Restaurant {
  id: number;
  x: number;
  y: number;
  rating: 'happy' | 'neutral' | 'sad';
  city: string;
}

const restaurants: Restaurant[] = [
  // Copenhagen area (center-east)
  { id: 1, x: 72, y: 45, rating: 'happy', city: 'Copenhagen' },
  { id: 2, x: 70, y: 47, rating: 'happy', city: 'Copenhagen' },
  { id: 3, x: 74, y: 44, rating: 'neutral', city: 'Copenhagen' },
  { id: 4, x: 71, y: 46, rating: 'happy', city: 'Copenhagen' },
  { id: 5, x: 73, y: 48, rating: 'sad', city: 'Copenhagen' },

  // Aarhus (center)
  { id: 6, x: 50, y: 35, rating: 'happy', city: 'Aarhus' },
  { id: 7, x: 52, y: 36, rating: 'neutral', city: 'Aarhus' },
  { id: 8, x: 51, y: 34, rating: 'happy', city: 'Aarhus' },

  // Odense (center-south)
  { id: 9, x: 48, y: 52, rating: 'happy', city: 'Odense' },
  { id: 10, x: 50, y: 53, rating: 'happy', city: 'Odense' },

  // Aalborg (north)
  { id: 11, x: 45, y: 15, rating: 'neutral', city: 'Aalborg' },
  { id: 12, x: 47, y: 16, rating: 'happy', city: 'Aalborg' },

  // Scattered locations
  { id: 13, x: 38, y: 28, rating: 'happy', city: 'Viborg' },
  { id: 14, x: 42, y: 45, rating: 'sad', city: 'Vejle' },
  { id: 15, x: 55, y: 28, rating: 'neutral', city: 'Randers' },
  { id: 16, x: 35, y: 55, rating: 'happy', city: 'Esbjerg' },
  { id: 17, x: 60, y: 62, rating: 'happy', city: 'Svendborg' },
  { id: 18, x: 65, y: 38, rating: 'neutral', city: 'Roskilde' },
];

export function MapVisualization() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const getColor = (rating: 'happy' | 'neutral' | 'sad') => {
    switch (rating) {
      case 'happy':
        return 'var(--smiley-happy)';
      case 'neutral':
        return 'var(--smiley-neutral)';
      case 'sad':
        return 'var(--smiley-sad)';
    }
  };

  return (
    <section className="py-6 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollSection>
          <div className="text-center mb-4">
            <h2
              className="mb-2"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Across the Country
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Food safety standards vary across Denmark's regions. Major cities like
              Copenhagen and Aarhus show different patterns than rural areas.
            </p>
          </div>
        </ScrollSection>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-center">
          <ScrollSection delay={200}>
            <div className="bg-background p-4 rounded-3xl">
              <div className="relative" style={{ paddingBottom: '100%', maxWidth: '320px', margin: '0 auto' }}>
                {/* Simplified Denmark outline */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
                >
                  {/* Denmark shape - simplified */}
                  <path
                    d="M 45 10 Q 48 8, 50 12 L 52 20 Q 55 25, 58 28 L 62 32 Q 65 35, 68 40 L 72 48 Q 75 52, 75 58 L 73 65 Q 70 68, 65 68 L 60 70 Q 55 72, 52 75 L 48 78 Q 42 78, 38 75 L 35 72 Q 30 68, 28 62 L 25 58 Q 22 52, 25 48 L 28 45 Q 30 42, 32 38 L 35 32 Q 38 28, 40 25 L 42 20 Q 44 15, 45 10 Z"
                    fill="#f5f5f4"
                    stroke="#d4d4d8"
                    strokeWidth="0.5"
                  />

                  {/* Restaurant points */}
                  {restaurants.map((restaurant) => (
                    <g key={restaurant.id}>
                      <circle
                        cx={restaurant.x}
                        cy={restaurant.y}
                        r={hoveredCity === restaurant.city ? 2.5 : 2}
                        fill={getColor(restaurant.rating)}
                        className="transition-all cursor-pointer"
                        onMouseEnter={() => setHoveredCity(restaurant.city)}
                        onMouseLeave={() => setHoveredCity(null)}
                        style={{
                          opacity: hoveredCity && hoveredCity !== restaurant.city ? 0.3 : 1,
                        }}
                      />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--smiley-happy)' }} />
                  <span className="text-xs text-muted-foreground">Elite</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--smiley-neutral)' }} />
                  <span className="text-xs text-muted-foreground">Acceptable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--smiley-sad)' }} />
                  <span className="text-xs text-muted-foreground">Needs Improvement</span>
                </div>
              </div>
            </div>
          </ScrollSection>

          <ScrollSection delay={400}>
            <div className="flex flex-col gap-3">
              <div className="p-4 bg-background rounded-2xl">
                <div className="flex items-start gap-3">
                  <SmileyIcon type="happy" size={28} />
                  <div>
                    <h4 className="mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                      Urban Excellence
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-xs">
                      Major cities like Copenhagen and Aarhus show higher concentrations of
                      elite-rated establishments, reflecting stronger regulatory oversight and
                      competition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-background rounded-2xl">
                <div className="flex items-start gap-3">
                  <SmileyIcon type="neutral" size={28} />
                  <div>
                    <h4 className="mb-1" style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                      Regional Variation
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-xs">
                      Smaller towns and rural areas display more varied results, suggesting
                      differences in resources and inspection frequency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
}
