import Hero from '../components/Hero';
import TargetClients from '../components/TargetClients';
import HolisticApproach from '../components/HolisticApproach';
import Services from '../components/Services';
import MissionStatement from '../components/MissionStatement';
import QuickAudit from '../components/QuickAudit';
import CoreValues from '../components/CoreValues';

// New Design Components
import StatSection from '../components/StatSection';
import ExpertiseSection from '../components/ExpertiseSection';
import BenefitCards from '../components/BenefitCards';
import InteractiveAudit from '../components/InteractiveAudit';
import ValuesSection from '../components/ValuesSection';
import NewMission from '../components/NewMission';
import JourneyCTA from '../components/JourneyCTA';

function Home() {
  return (
    <>
      <Hero />

      {/* New Design Sections */}
      <StatSection />
      <ExpertiseSection />
      <BenefitCards />
      <InteractiveAudit />
      <ValuesSection />
      <NewMission />
      <JourneyCTA />

      {/* Existing Sections (Preserved) */}
      {/* <TargetClients />
      <HolisticApproach />
      <Services />
      <MissionStatement />
      <QuickAudit />
      <CoreValues /> */}
    </>
  );
}

export default Home;

