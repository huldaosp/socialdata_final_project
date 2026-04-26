import { ScrollSection } from './ScrollSection';
import { SmileyIcon } from './SmileyIcon';

export function ExplanationSection() {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollSection>
          <h2
            className="mb-6 text-center"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            The Smiley System
          </h2>
        </ScrollSection>

        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <ScrollSection delay={0}>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <SmileyIcon type="happy" size={70} />
              </div>
              <h3 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Elite Smiley
              </h3>
            </div>
          </ScrollSection>

          <ScrollSection delay={100}>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <SmileyIcon type="neutral" size={70} />
              </div>
              <h3 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Acceptable
              </h3>
            </div>
          </ScrollSection>

          <ScrollSection delay={200}>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <SmileyIcon type="sad" size={70} />
              </div>
              <h3 className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Needs Improvement
              </h3>
            </div>
          </ScrollSection>
        </div>

        <ScrollSection delay={300}>
          <div className="mt-6 p-5 bg-secondary rounded-2xl">
            <p className="text-center text-muted-foreground leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Since 2001, Denmark has required all food establishments to display their
              inspection results publicly. This transparency system has become a model for
              food safety regulation worldwide.
            </p>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
