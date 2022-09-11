import { useState, useRef, useEffect } from 'react';
import { restaurant } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import styles from './styles.module.scss';

const VideoIntro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handlePlay = () => {
    setPlayVideo(playVideo => !playVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  useEffect(() => {
    videoRef.current?.load();
  }, []);

  return (
    <div className={styles.container_video} id='video'>
      <video
        src={restaurant}
        ref={videoRef}
        type='video/mp4'
        controls={false}
        loop
        muted
      />
        {/* <source src={url?.metadata?.video?.imgix_url} type="video/mp4" /> */}
      {/* </video> */}
      <div className={`${styles.video_overlay} flex_center`}>
        <button
          className={`${styles.video_overlay_circle} flex_center`}
          onClick={handlePlay}
        >
          {playVideo ? (
            <BsPauseFill className={styles.video_icon} />
          ) : (
            <BsFillPlayFill className={styles.video_icon} />
          )}
        </button>
      </div>
    </div>
  );
}

export default VideoIntro;