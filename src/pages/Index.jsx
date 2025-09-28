import { Hero } from "@/components/Hero/Hero.jsx";
import { About} from "@/components/About/About.jsx";
import { OrganizationsSection } from "@/components/OrganizationsSection/OrganizationsSection.jsx";
import { VisionSection } from "@/components/VisionSection/VisionSection.jsx";
import { Contact } from "@/components/Contact/Contact.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <OrganizationsSection />
      <VisionSection />
      <Contact />
    </div>
  );
};

export default Index;
