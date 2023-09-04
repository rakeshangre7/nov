export interface YoutubeVideoPlayerProps {
  // fields: Field;
  field: {
    videoURL: {
      value: string;
    };
  };
  className?: string;
}

const YoutubeVideoPlayer = ({ field }: YoutubeVideoPlayerProps): JSX.Element => {
  const youtubeUrl = field.videoURL.value;

  // Extract the video ID from the URL
  let videoId: string | undefined = '';

  if (youtubeUrl.includes('youtube.com/watch?v=')) {
    videoId = youtubeUrl.split('v=')[1];
  } else if (youtubeUrl.includes('youtube.com/embed/')) {
    videoId = youtubeUrl.split('/').pop();
  }
  return (
    <div className="w-full relative pt-[56.25%]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className="absolute top-0 left-0 w-full h-full"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideoPlayer;
