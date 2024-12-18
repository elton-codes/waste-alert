const VideoSection = () => {
    return (
      <section id="video" className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">
            Watch How Waste Alert Works
          </h2>
          <div className="relative pb-9/16" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/kWWPKlEQR_k"
              title="Waste Alert Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  export default VideoSection;
  