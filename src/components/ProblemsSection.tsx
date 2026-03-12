const ProblemsSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 md:pt-16 md:pb-10 bg-muted/30 border-t border-border/60">
      <div className="container px-4 md:px-8">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-sm md:text-base font-heading font-semibold text-primary"></p>
          <h2 className="mt-2 text-2xl md:text-3xl font-heading font-bold text-foreground">
            Não conseguiu aceitação da Seguradora?
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            A aceitação de frotas de locadoras pelas seguradoras tem sido um <strong>desafio</strong> para o setor.
          </p>

          <p className="mt-3 text-base md:text-lg font-bold leading-relaxed">
            <span className="text-primary">Nós resolvemos esse desafio para você, a FBN entende a melhor forma de apresentar o risco, facilitando a aceitação da seguradora.</span>
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 md:h-14 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default ProblemsSection;