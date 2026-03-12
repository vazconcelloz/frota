import { BriefcaseBusiness, ChartNoAxesColumn, Handshake, LayoutDashboard, ShieldCheck, MapPinned } from "lucide-react";

const coverages = [
  {
    icon: BriefcaseBusiness,
    title: "Cobertura personalizada por tipo de frota",
    description:
      "Estruturamos o seguro de acordo com o tamanho, tipo de veículos, rotas de circulação e operação para proteger sua frota adequadamente.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Análise de risco e otimização de custos",
    description:
      "Comparamos opções entre seguradoras para reduzir prêmios, melhorar franquias e manter qualidade de cobertura.",
  },
  {
    icon: Handshake,
    title: "Responsabilidade civil abrangente",
    description:
      "Proteção total para responsabilidade civil de toda a frota, envolvendo terceiros, pessoas e patrimônio em qualquer situação.",
  },
  {
    icon: LayoutDashboard,
    title: "Gestão centralizada 24/7",
    description:
      "Portal de controle, acompanhamento de sinistros, relatórios de sinistralidade e suporte emergencial para toda a operação.",
  },
  {
    icon: ShieldCheck,
    title: "Coberturas adicionais estratégicas",
    description:
      "Inclua proteções como vidros, vencimento de documentação, cobertura de eventos climáticos e riscos operacionais específicos.",
  },
  {
    icon: MapPinned,
    title: "Gestão de sinistros simplificada",
    description:
      "Acompanhamos todos os sinistros da frota, reduzindo burocracia, acelerando indenizações e otimizando sua operação.",
  },
];

const CoveragesSection = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-10 bg-section-gray">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-12">
          Proteção e <span className="text-primary">Gerenciamento</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverages.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
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
