export interface YoutubeVideoPlayerProps {
  // fields: Field;
  field: {
    videoURL: {
      value: string;
    };
  };
  className?: string;
  controls?: boolean;
  preload?: string;
  muted?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  playsinline?: boolean;
}

const YoutubeVideoPlayer = ({ field }: YoutubeVideoPlayerProps): JSX.Element => {
  return (
    <div className="relative pt-[56.25%]">
      <iframe
        src={field.videoURL.value}
        className="absolute top-0 left-0 w-full h-full"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideoPlayer;
