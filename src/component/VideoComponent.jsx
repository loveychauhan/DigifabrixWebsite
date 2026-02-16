import video from "../assets/video/DigiFabrixGraphVideo.mp4";

const VideoComponent = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoComponent;
