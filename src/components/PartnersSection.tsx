import logoAbla from "@/assets/Logo-Abla.png";

const PartnersSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30 border-t border-border/60">
      <div className="container px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center text-foreground mb-2">
          <span className="text-primary">FBN</span> se juntou com a ABLA
        </h2>
        <p className="text-center text-sm md:text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          
          <br />
          Nossa equipe é especializada e foi convidada para ministrar o curso de Proteção para Locadoras da UniABLA, a universidade da ABLA, garantindo um reforço técnico que nenhuma outra corretora possui no Brasil. 
          <br />
          <strong className="text-foreground"> Quando falamos de frota, falamos a sua língua.</strong>
        </p>

        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-card border border-border rounded-2xl px-10 py-8 max-w-2xl w-full hover:border-primary/30 hover:shadow-lg transition-all">
            <img
              src={logoAbla}
              alt="Logo ABLA"
              className="h-20 w-auto object-contain"
            />
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                Associação Brasileira das Locadoras de Automóveis
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Como parceira da ABLA, a FBN oferece soluções exclusivas de seguro de frota para locadoras associadas, com agilidade, coberturas sob medida e suporte especializado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
