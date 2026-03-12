import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como funciona o estudo de frota da FBN?",
    answer: `O Estudo FBN é uma análise feita por especialistas em frotas para identificar a proteção ideal para sua operação.
    Avaliamos quantidade e tipos de veículos, rotas de circulação, histórico de sinistros, perfil operacional e coberturas necessárias. Com base nisso, apresentamos opções com melhor equilíbrio entre proteção e custo operacional.`,
  },
  {
    question: "Quais informações são necessárias para realizar o estudo de frota?",
    answer:
      "Solicitamos dados da empresa, list de veículos (quantidade, modelos, valores), rotas principais, histórico de sinistros dos últimos 3 anos e perfil de uso. Esses dados ajudam a montar um estudo preciso e alinhado aos riscos da sua operação.",
  },
  {
    question: "Qual é o prazo para ativar o seguro de frota?",
    answer:
      "O seguro passa a valer conforme as regras da proposta e a confirmação de vigência das seguradoras. Normalmente conseguimos ativar em 5 a 10 dias úteis. A equipe da FBN orienta cada etapa para que você saiba exatamente quando sua cobertura inicia.",
  },
  {
    question: "Posso ajustar as coberturas da minha frota após contratação?",
    answer:
      "Sim. É possível adicionar novos veículos, ajustar franquias, coberturas para terceiros, proteções adicionais e outras proteções conforme sua necessidade operacional mudar.",
  },
  {
    question: "Como faço para iniciar meu estudo de frota?",
    answer:
      "Clique em [CTA_ESTUDO] e envie suas informações. A equipe da FBN entra em contato para fazer uma análise completa e montar a melhor solução de seguro de frota para sua empresa.",
  },
];

const FAQSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario-estudo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-8 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-4">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Tire suas dúvidas antes de solicitar seu estudo.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {faq.answer.split("[CTA_ESTUDO]").map((part, partIndex, allParts) => (
                  <span key={`${faq.question}-part-${partIndex}`}>
                    <span className="whitespace-pre-line">{part}</span>
                    {partIndex < allParts.length - 1 && (
                      <Button variant="link" className="h-auto p-0 align-baseline font-semibold" onClick={scrollToForm}>
                        Realizar Estudo
                      </Button>
                    )}
                  </span>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
