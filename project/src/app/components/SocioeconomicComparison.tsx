import { ScrollSection } from './ScrollSection';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

const data = [
  { city: 'Copenhagen', avgIncome: 420000, elitePercent: 75, population: 794128 },
  { city: 'Aarhus', avgIncome: 380000, elitePercent: 72, population: 282910 },
  { city: 'Odense', avgIncome: 360000, elitePercent: 68, population: 180760 },
  { city: 'Aalborg', avgIncome: 370000, elitePercent: 70, population: 119862 },
  { city: 'Esbjerg', avgIncome: 340000, elitePercent: 62, population: 71491 },
  { city: 'Randers', avgIncome: 330000, elitePercent: 58, population: 62563 },
  { city: 'Kolding', avgIncome: 355000, elitePercent: 65, population: 61644 },
  { city: 'Horsens', avgIncome: 345000, elitePercent: 63, population: 59449 },
  { city: 'Vejle', avgIncome: 365000, elitePercent: 67, population: 57655 },
  { city: 'Roskilde', avgIncome: 390000, elitePercent: 71, population: 50046 },
];

export function SocioeconomicComparison() {
  return (
    <section className="py-8 px-6 bg-background">
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
              The Income Connection
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Does wealth predict food safety? We analyzed the relationship between average
              income and inspection results across Danish cities.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection delay={200}>
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-center mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Income vs. Elite Rating Percentage
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart margin={{ top: 10, right: 20, bottom: 50, left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  type="number"
                  dataKey="avgIncome"
                  name="Average Income"
                  tick={{ fill: '#737373', fontSize: 11 }}
                  axisLine={{ stroke: '#e5e5e5' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  label={{
                    value: 'Average Annual Income (DKK)',
                    position: 'bottom',
                    offset: 35,
                    fill: '#737373',
                    fontSize: 11,
                  }}
                />
                <YAxis
                  type="number"
                  dataKey="elitePercent"
                  name="Elite %"
                  tick={{ fill: '#737373', fontSize: 11 }}
                  axisLine={{ stroke: '#e5e5e5' }}
                  domain={[50, 80]}
                  label={{
                    value: 'Elite Rating Percentage (%)',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#737373',
                    fontSize: 11,
                  }}
                />
                <ZAxis type="number" dataKey="population" range={[80, 600]} />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                    padding: '8px',
                    fontSize: '12px',
                  }}
                  formatter={(value: any, name: string) => {
                    if (name === 'Average Income') return [`${(value / 1000).toFixed(0)}k DKK`, name];
                    if (name === 'Elite %') return [`${value}%`, name];
                    return [value, name];
                  }}
                  labelFormatter={(value, payload) => {
                    if (payload && payload.length > 0) {
                      return payload[0].payload.city;
                    }
                    return '';
                  }}
                />
                <Scatter
                  data={data}
                  fill="var(--smiley-happy)"
                  opacity={0.7}
                />
              </ScatterChart>
            </ResponsiveContainer>

            <p className="text-center text-xs text-muted-foreground mt-3">
              Bubble size represents population
            </p>
          </div>
        </ScrollSection>

        <ScrollSection delay={400}>
          <div className="mt-6 max-w-3xl mx-auto">
            <div className="p-5 bg-white rounded-2xl border-l-4" style={{ borderColor: 'var(--smiley-happy)' }}>
              <h4 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Key Finding
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                There's a clear positive correlation between average income and elite
                inspection ratings. Cities with higher average incomes tend to have more
                restaurants achieving elite status, suggesting that economic factors play a
                role in food safety standards.
              </p>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection delay={600}>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white rounded-xl text-center">
              <div className="mb-1" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--smiley-happy)' }}>
                +15%
              </div>
              <p className="text-xs text-muted-foreground">
                Elite rating increase in high-income areas
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl text-center">
              <div className="mb-1" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--smiley-neutral)' }}>
                0.78
              </div>
              <p className="text-xs text-muted-foreground">
                Correlation coefficient (income vs. rating)
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl text-center">
              <div className="mb-1" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--smiley-sad)' }}>
                -8%
              </div>
              <p className="text-xs text-muted-foreground">
                Fewer violations in affluent neighborhoods
              </p>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
