import { features } from "../data/Features";
import FeatureCard from "./shared/FeatureCard";

export default function Features() {
  return (
    <section id="features" className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        Why Choose IELTSPro?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
