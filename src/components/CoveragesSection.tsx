import { IconCarCrash, IconCarOff, IconTornado } from "@tabler/icons-react";

const coverages = [
  {
    icon: IconCarOff,
    title: "Cobertura contra roubo e furto",
    description:
      "Você protegido mesmo que o carro desapareça. Sem burocracia, com agilidade no atendimento.",
  },
  {
    icon: IconCarCrash,
    title: "Cobertura para colisão",
    description:
      "Seja uma batida leve ou algo mais sério, você não arca com o prejuízo sozinho.",
  },
  {
    icon: IconTornado,
    title: "Cobertura contra \n fenômenos da natureza",
    description:
      "Proteção contra enchentes, quedas de árvores, granizo e outros imprevistos climáticos.",
  },
];

const CoveragesSection = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-10 bg-section-gray">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-12">
          Coberturas que realmente <span className="text-primary">cuidam</span> da sua frota
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {coverages.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4 mx-auto">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoveragesSection;
