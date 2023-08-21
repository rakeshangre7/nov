export interface VideoPlayerProps {
  // fields: Field;
  field: {
    videoid: {
      value: string;
    };
  };
  className?: string;
  controls?: boolean | string | undefined;
  preload?: string;
  muted?: boolean;
  autoplay?: string;
  loop?: string | true;
  playsinline?: string;
  // poster?: string;
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
      width={640}
      height={360}
      className={className}
      {...(controls && { controls: true })}
      {...(preload && { preload: preload })}
      {...(autoplay && { autoplay })}
      {...(loop && { loop: true })}
      {...(playsinline && { playsinline: true })}
      {...(muted && { muted: true })}
      poster="https://www.nov.com:443/-/media/nov/images/capability/biogas-solutions/biogas-production.jpg"
    >
      <source src={field?.videoid?.value} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
