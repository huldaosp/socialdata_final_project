import { Hero } from './components/Hero';
import { ExplanationSection } from './components/ExplanationSection';
import { DataDistribution } from './components/DataDistribution';
import { MapVisualization } from './components/MapVisualization';
import { SocioeconomicComparison } from './components/SocioeconomicComparison';
import { InsightsSection } from './components/InsightsSection';
import { Conclusion } from './components/Conclusion';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="w-full">
      <ScrollProgress />
      <Hero />
      <ExplanationSection />
      <DataDistribution />
      <MapVisualization />
      <SocioeconomicComparison />
      <InsightsSection />
      <Conclusion />
    </div>
  );
}