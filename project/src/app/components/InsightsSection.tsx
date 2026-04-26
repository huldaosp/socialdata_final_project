import { ScrollSection } from './ScrollSection';
import { SmileyIcon } from './SmileyIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const cityData = [
  {
    city: 'Copenhagen',
    elite: 75,
    acceptable: 20,
    poor: 5,
  },
  {
    city: 'Aarhus',
    elite: 72,
    acceptable: 23,
    poor: 5,
  },
  {
    city: 'Rural Areas',
    elite: 58,
    acceptable: 32,
    poor: 10,
  },
];

const cuisineData = [
  { type: 'Nordic', elite: 82, acceptable: 15, poor: 3 },
  { type: 'Italian', elite: 71, acceptable: 24, poor: 5 },
  { type: 'Asian', elite: 64, acceptable: 28, poor: 8 },
  { type: 'Fast Food', elite: 55, acceptable: 35, poor: 10 },
];

export function InsightsSection() {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollSection>
          <div className="text-center mb-6">
            <h2
              className="mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Patterns & Stories
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Diving deeper into the data reveals surprising patterns across cities,
              cuisines, and regions.
            </p>
          </div>
        </ScrollSection>

        {/* Urban vs Rural */}
        <ScrollSection delay={200}>
          <div className="mb-12">
            <h3 className="mb-5 text-center" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
              The Urban Advantage
            </h3>

            <div className="bg-background p-6 rounded-3xl">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={cityData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="city"
                    tick={{ fill: '#737373', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e5e5' }}
                  />
                  <YAxis
                    tick={{ fill: '#737373', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e5e5' }}
                    label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#737373', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      padding: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="elite" stackId="a" fill="var(--smiley-happy)" name="Elite" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="acceptable" stackId="a" fill="var(--smiley-neutral)" name="Acceptable" />
                  <Bar dataKey="poor" stackId="a" fill="var(--smiley-sad)" name="Poor" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Urban restaurants consistently outperform their rural counterparts.
                Copenhagen and Aarhus show <strong>17 percentage points higher</strong>{' '}
                elite ratings compared to rural areas. This gap likely stems from more
                frequent inspections, better access to training, and higher customer
                expectations in cities.
              </p>
            </div>
          </div>
        </ScrollSection>

        {/* Cuisine Type */}
        <ScrollSection delay={400}>
          <div className="mb-12">
            <h3 className="mb-5 text-center" style={{ fontSize: '1.375rem', fontWeight: 600 }}>
              Cuisine Matters
            </h3>

            <div className="bg-background p-6 rounded-3xl">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={cuisineData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="type"
                    tick={{ fill: '#737373', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e5e5' }}
                  />
                  <YAxis
                    tick={{ fill: '#737373', fontSize: 12 }}
                    axisLine={{ stroke: '#e5e5e5' }}
                    label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#737373', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e5e5',
                      borderRadius: '8px',
                      padding: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="elite" stackId="a" fill="var(--smiley-happy)" name="Elite" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="acceptable" stackId="a" fill="var(--smiley-neutral)" name="Acceptable" />
                  <Bar dataKey="poor" stackId="a" fill="var(--smiley-sad)" name="Poor" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nordic cuisine restaurants lead with an impressive <strong>82% elite rating</strong>,
                while fast food establishments lag at 55%. The complexity of preparation methods,
                staff training levels, and ingredient handling practices all contribute to these
                differences.
              </p>
            </div>
          </div>
        </ScrollSection>

        {/* Surprising Facts */}
        <ScrollSection delay={600}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-background rounded-2xl">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <SmileyIcon type="happy" size={36} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                    Weekend Effect
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Restaurants inspected on Fridays score 12% lower on average, possibly due
                    to end-of-week fatigue or high-volume preparation for weekend rushes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-background rounded-2xl">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <SmileyIcon type="neutral" size={36} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                    Chain Performance
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Restaurant chains maintain more consistent ratings across locations,
                    with 89% scoring within the same category across all branches.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-background rounded-2xl">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <SmileyIcon type="happy" size={36} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                    Rapid Improvement
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    68% of restaurants with poor ratings improve to acceptable or elite
                    within 6 months, demonstrating the system's effectiveness at driving
                    change.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-background rounded-2xl">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <SmileyIcon type="sad" size={36} />
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                    Repeat Offenders
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Only 3% of establishments receive poor ratings consistently,
                    often leading to closure or change of ownership within a year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
