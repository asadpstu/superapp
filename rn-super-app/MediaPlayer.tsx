import React, { useRef, useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Image, Text } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import Video, { VideoProperties, OnProgressData, OnLoadData } from 'react-native-video';
import Slider from '@react-native-community/slider';

const MediaPlayer: React.FC = ({ callback, url }: any) => {
  const videoRef = useRef<Video>(null);
  const [pause, setPause] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [fullScreen, setFullScreen] = useState(false)

  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);

  function formatSeconds(seconds: number): string {
    const hours: number = Math.floor(seconds / 3600);
    const minutes: number = Math.floor((seconds % 3600) / 60);
    const remainingSeconds: number = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  const onLoad = (data: OnLoadData) => {
    setDuration(data.duration);
  };

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  };

  const onValueChange = (x: number) => {
    setProgress(x);
    if (videoRef.current) {
      videoRef.current.seek(x);
    }
  };

  return (

    <TouchableOpacity
      style={{ width: '100%', height: fullScreen ? '100%' : 200, marginTop: fullScreen ? 0 : 20 }}
      onPress={() => {
        setClicked(!clicked);
      }}>


      <Video
        paused={pause}
        source={{ uri: url }}
        ref={videoRef}
        onLoad={onLoad}
        onProgress={onProgress}
        muted={true}
        style={{ width: '100%', height: fullScreen ? '100%' : 200 }}
        resizeMode="contain"

      />

      {clicked && (
        <TouchableOpacity
          onPress={() => {
            setClicked(!clicked);
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                if (videoRef.current) {
                  videoRef.current.seek(currentTime - 10);
                }

              }}>
              <Image
                source={require('./asset/image/media-player-icon/backward.png')}
                style={{ width: 30, height: 30, tintColor: 'white' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPause(!pause);
              }}>
              <Image
                source={
                  pause
                    ? require('./asset/image/media-player-icon/play-button.png')
                    : require('./asset/image/media-player-icon/pause.png')
                }
                style={{
                  width: 30,
                  height: 30,
                  tintColor: 'white',
                  marginLeft: 50,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (videoRef.current) {
                  videoRef.current.seek(currentTime + 10);
                }

              }}>
              <Image
                source={require('./asset/image/media-player-icon/forward.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: 'white',
                  marginLeft: 50,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 0,
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: 'center'
            }}>
            <Text style={{ color: 'white' }}>
              {formatSeconds(Math.ceil(currentTime))}
            </Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={duration}
              value={currentTime}
              onValueChange={onValueChange}
              minimumTrackTintColor="#FF0000"
              maximumTrackTintColor="#000000"
              thumbTintColor="#0000FF"
            />
            <Text style={{ color: 'white' }}>
              {formatSeconds(Math.ceil(duration))}
            </Text>
          </View>


          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              top: 10,
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: 'center'
            }}>
            <TouchableOpacity onPress={() => {
              if (fullScreen) {
                Orientation.lockToPortrait();
              } else {
                Orientation.lockToLandscape();
              }
              setFullScreen(!fullScreen)
            }}>
              <Image source={fullScreen ? require('./asset/image/media-player-icon/minimize.png') : require('./asset/image/media-player-icon/full-size.png')}
                style={{ width: 24, height: 24, tintColor: 'white' }} />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => { 
              Orientation.lockToPortrait();
              callback('close') 
              }}>
              <Image source={fullScreen ? require('./asset/image/media-player-icon/close.png') : require('./asset/image/media-player-icon/close.png')}
                style={{ width: 24, height: 24, }} />
            </TouchableOpacity>


          </View>

        </TouchableOpacity>
      )}


    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    left: 0, bottom: 0, right: 0,
  },
});

export default MediaPlayer;
