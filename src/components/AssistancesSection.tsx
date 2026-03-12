import { CarFront, KeyRound, Truck } from "lucide-react";
import { IconCarCrane } from "@tabler/icons-react";
import { PiTire } from "react-icons/pi";

const assistances = [
  {
    icon: IconCarCrane,
    title: "Guincho",
    description:
      "Atendimento rápido para panes mecânicas e elétricas, com suporte para manter seus veículos em operação.",
  },
  {
    icon: PiTire,
    title: "Troca de pneu",
    description:
      "Sua frota conta com suporte contínuo para emergências em qualquer dia e horário, sem depender de processos lentos.",
  },
  {
    icon: CarFront,
    title: "Carro",
    description:
      "Cobertura para situações comuns da rotina operacional, reduzindo tempo parado e impacto nas entregas ou atendimentos.",
  },
  {
    icon: KeyRound,
    title: "Chaveiro",
    description:
      "Apoio imediato em casos de perda de chave, travamento e outras ocorrências que afetam a disponibilidade da frota.",
  },
];

const AssistancesSection = () => {
  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-24 bg-background">
      <div className="container px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-12">
          Assistências que mantêm sua <span className="text-primary">frota em movimento</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assistances.map((item, index) => (
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

export default AssistancesSection;
