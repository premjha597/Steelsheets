import mildSteel from "@/assets/mild-steel.jpg";
import galvanized from "@/assets/galvanized-steel.jpg";
import stainless from "@/assets/stainless-steel.jpg";
import hotRolled from "@/assets/hot-rolled.jpg";
import coldRolled from "@/assets/cold-rolled.jpg";

const products = [
  {
    name: "Mild Steel Sheets (MS Sheets)",
    img: mildSteel,
    desc: "Versatile and cost-effective, ideal for general fabrication, construction, and automotive applications.",
    features: ["Easy to weld & form", "Excellent machinability", "Wide thickness range"],
  },
  {
    name: "Galvanized Steel Sheets (GI Sheets)",
    img: galvanized,
    desc: "Zinc-coated for superior corrosion resistance, perfect for roofing, ducting, and outdoor structures.",
    features: ["Corrosion resistant", "Long lifespan", "Zinc-coated finish"],
  },
  {
    name: "Stainless Steel Sheets",
    img: stainless,
    desc: "Premium grade stainless steel with mirror finish for food processing, medical equipment, and architectural use.",
    features: ["Rust-proof", "Hygienic surface", "High strength"],
  },
  {
    name: "Hot Rolled Sheets",
    img: hotRolled,
    desc: "Manufactured at high temperatures for structural steel, shipbuilding, and heavy machinery applications.",
    features: ["High tensile strength", "Cost-effective", "Structural grade"],
  },
  {
    name: "Cold Rolled Sheets",
    img: coldRolled,
    desc: "Precision-finished with smooth surface for appliances, automotive panels, and precision components.",
    features: ["Smooth finish", "Tight tolerances", "Superior flatness"],
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-muted">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">Our Range</p>
        <h2 className="section-heading">Our Products</h2>
        <p className="section-subheading">
          We supply a comprehensive range of steel sheets to meet every industrial and construction need.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.name} className="bg-card rounded-xl overflow-hidden shadow-md border border-border group hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden h-52">
              <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
