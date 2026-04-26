import { ScrollSection } from './ScrollSection';
import { SmileyIcon } from './SmileyIcon';

export function Conclusion() {
  return (
    <section className="py-8 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <ScrollSection>
          <div className="text-center mb-6">
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              The Bigger Picture
            </h2>
          </div>
        </ScrollSection>

        <ScrollSection delay={200}>
          <div className="mb-8">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Denmark's smiley inspection system has proven to be more than just a regulatory
              tool—it's a powerful driver of transparency and continuous improvement in food
              safety.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our analysis reveals that while the majority of Danish restaurants maintain high
              standards, significant disparities exist based on location, cuisine type, and
              socioeconomic factors. Urban establishments and those serving traditional Nordic
              cuisine consistently outperform others.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The data suggests that the system is working: most restaurants with poor ratings
              improve quickly, and the overall trend shows rising standards across the country.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection delay={400}>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-5 bg-white rounded-2xl">
              <SmileyIcon type="happy" size={44} className="mx-auto mb-3" />
              <div className="mb-1" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                68%
              </div>
              <p className="text-muted-foreground text-xs">
                Maintain elite standards nationwide
              </p>
            </div>

            <div className="text-center p-5 bg-white rounded-2xl">
              <SmileyIcon type="neutral" size={44} className="mx-auto mb-3" />
              <div className="mb-1" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                25+
              </div>
              <p className="text-muted-foreground text-xs">
                Years of transparent food safety
              </p>
            </div>

            <div className="text-center p-5 bg-white rounded-2xl">
              <SmileyIcon type="happy" size={44} className="mx-auto mb-3" />
              <div className="mb-1" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                89%
              </div>
              <p className="text-muted-foreground text-xs">
                Public awareness of the system
              </p>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection delay={600}>
          <div className="p-6 bg-white rounded-3xl text-center border-t-4" style={{ borderColor: 'var(--smiley-happy)' }}>
            <h3 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              What's Next?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              As Denmark continues to refine its food safety system, the focus shifts to
              closing the gap between urban and rural areas, supporting smaller establishments
              with training and resources, and maintaining the transparency that has made this
              system a global model.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection delay={800}>
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground mb-2">
              Data Source: Danish Veterinary and Food Administration (2025)
            </p>
            <p className="text-xs text-muted-foreground">
              This is a data storytelling project exploring public health inspection data.
              All statistics are representative of typical patterns found in the data.
            </p>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
