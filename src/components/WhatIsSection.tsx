const WhatIsSection = () => {
  return (
    <section id="what" className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What is <span className="text-gradient-gold">Doge $1</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Doge $1 is a <span className="text-foreground font-semibold">belief-based movement</span>. 
            We don't promise price. We support Dogecoin through unity, holding culture, and community rewards.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card rounded-2xl p-6 hover-glow">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Unity</h3>
              <p className="text-muted-foreground text-sm">Community first. Always.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-glow">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Holding Culture</h3>
              <p className="text-muted-foreground text-sm">Diamond hands together.</p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover-glow">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">Rewards</h3>
              <p className="text-muted-foreground text-sm">Supporting the holders.</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-4 border border-border/50 rounded-xl bg-background/50">
            <p className="text-sm text-muted-foreground italic">
              ⚠️ This is not financial advice. This is a community experiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
