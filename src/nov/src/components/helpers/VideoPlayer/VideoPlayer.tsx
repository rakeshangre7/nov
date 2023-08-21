export interface VideoPlayerProps {
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

const VideoPlayer = ({
  field,
  className,
  controls,
  preload,
  autoplay,
  loop,
  playsinline,
  muted,
}: VideoPlayerProps): JSX.Element => {
  return (
    <video
      width="640"
      height="360"
      className={className}
      controls={controls}
      preload={preload}
      autoPlay={autoplay}
      loop={loop}
      playsInline={playsinline}
      muted={muted}
      // {...(controls && { controls: controls })}
      // {...(preload && { preload: preload })}
      // {...(autoplay && { autoplay: autoplay })}
      // {...(loop && { loop: loop })}
      // {...(playsinline && { playsinline: playsinline })}
      // {...(muted && { muted: false })}
      poster={field?.image?.value}
    >
      <source src={field?.videoid?.value} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
