export interface YoutubeVideoPlayerProps {
  // fields: Field;
  field: {
    videoid: {
      value: string;
    };
    image: {
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
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        src={field.videoid.value}
      ></iframe>
    </div>
  );
};

export default YoutubeVideoPlayer;
