import { Federated } from '@callstack/repack/client';
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

const MediaPlayer = React.lazy(() => Federated.importModule('rnsuperapp', './MediaPlayer'));

const Dashboard: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleViewClick = (url:any) => {
    setVideoUrl(url);
  };

  // Array of movie URLs for rendering grid items
  const movieUrls = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  ];

  // Splitting the movieUrls into chunks of 3 for grid view
  const rows = movieUrls.reduce((acc : any, curr : any, index : any) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(curr);
    return acc;
  }, []);

  const callback = (str: string) : void =>{
    console.log("Action received:", str);
    setVideoUrl(null);
  }

  return (
    <View style={styles.container}>
      {/* Render grid view */}
      {!videoUrl && rows.map((row : any, rowIndex:any) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((url : any, index : any) => (
            <TouchableOpacity key={index} onPress={() => handleViewClick(url)}>
              <View style={styles.gridItem}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: "https://mediaready.videoready.tv/tatasky/image/fetch/f_auto,fl_lossy,q_auto,w_926,h_462/https://akamaividz2.zee5.com/image/upload/w_1920,h_1080,c_scale/resources/0-0-1z5535878/list/1170x658withlogo768000f1ebe1457d91c90045b1485e5f.jpg" }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      {/* Render video player */}
      {videoUrl && (
        <React.Suspense fallback={<Text>Loading Player...</Text>}>
          <MediaPlayer url={videoUrl} callback={callback}/>
        </React.Suspense>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#FFF',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    
  },
});

export default Dashboard;
