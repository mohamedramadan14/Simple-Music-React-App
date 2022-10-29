export const playAudio = (
  isPlaying,
  audioRef,
  setIsPlaying,
  song,
  setCurrentSong
) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then((audio) => {
          audioRef.current.play();
        })
        .catch((error) => {
          console.log(error);
          setIsPlaying(false);
          setCurrentSong(song);
        });
    }
  }
};
