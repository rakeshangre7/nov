export interface Mp4VideoPlayerProps {
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

const Mp4VideoPlayer = ({
  field,
  className,
  controls,
  preload,
  autoplay,
  loop,
  playsinline,
  muted,
}: Mp4VideoPlayerProps): JSX.Element => {
  return (
    <video
      width="640"
      height="360"
      className={`${className} min-w-full min-h-full object-cover `}
      //top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2
      controls={controls}
      preload={preload}
      autoPlay={autoplay}
      loop={loop}
      playsInline={playsinline}
      muted={muted}
      poster={field?.image?.value}
    >
      <source src={field?.videoid?.value} type="video/mp4" />
    </video>
  );
};

export default Mp4VideoPlayer;
