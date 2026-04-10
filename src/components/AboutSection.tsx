import { CheckCircle } from "lucide-react";

const points = [
  "Industry-leading quality standards",
  "Decades of trusted experience",
  "Pan-India delivery network",
  "Custom sizes & specifications",
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Who We Are</p>
        <h2 className="section-heading">About Dharma Steel</h2>
        <p className="section-subheading">
          Dharma Steel is a premier supplier of high-quality steel sheets for construction, infrastructure, and industrial applications.
          We combine reliability, strength, and unmatched customer trust to deliver materials that form the backbone of India's progress.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {points.map((p) => (
          <div key={p} className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm border border-border">
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <span className="text-foreground font-medium">{p}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
