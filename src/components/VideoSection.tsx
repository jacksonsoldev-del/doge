const VideoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient-gold">Movement</span> in Motion
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See what the Doge $1 community is all about.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
            >
              <source src="/doge-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
