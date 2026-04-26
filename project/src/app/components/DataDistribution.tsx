import { ScrollSection } from './ScrollSection';
import { SmileyIcon } from './SmileyIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Elite', value: 68, color: 'var(--smiley-happy)' },
  { name: 'Acceptable', value: 26, color: 'var(--smiley-neutral)' },
  { name: 'Needs Improvement', value: 6, color: 'var(--smiley-sad)' },
];

export function DataDistribution() {
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
              How Clean Are We?
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              The majority of Danish restaurants maintain high standards of food safety,
              but there's still room for improvement.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection delay={200}>
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-center mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Distribution of Inspection Results
            </h3>

            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
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
                  }}
                  formatter={(value) => [`${value}%`, 'Percentage']}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {data.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <SmileyIcon
                      type={item.name === 'Elite' ? 'happy' : item.name === 'Acceptable' ? 'neutral' : 'sad'}
                      size={32}
                    />
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                    {item.value}%
                  </div>
                  <div className="text-muted-foreground mt-1 text-sm">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection delay={400}>
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              More than two-thirds of Danish food establishments achieve the elite rating,
              demonstrating the country's strong food safety culture. However, 6% still
              require significant improvements.
            </p>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
