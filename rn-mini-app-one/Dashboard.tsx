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
  TextInput,
} from 'react-native';

//const MediaPlayer = React.lazy(() => Federated.importModule('rnsuperapp', './MediaPlayer'));

const Left = ({ navigation, callback, url }: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        callback('close')
      }}
    >
      <View>
        {url === '' || url === null
          ?
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000000', marginStart: 10 }}> Content </Text>
          :
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAc0AAAHNAEOTIjjAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVxQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJDo9JgAAAHN0Uk5TAAECBAUHCAoLDA4QERITFRYYGRobHB0eIyQlJiksLzAyMzQ1Njk9QEVJTU5YZWhpbm9wcnh6fH+Ah4iKjZaXmJmam5ydnqKusLS2t7u9vr/Bw8TFxsnL0dLT1Njd4OLj5ejq6+3u7/Dy9Pb3+Pn6+/z9/s6bPSkAAAKzSURBVHja7d1XT1RRGEbhb2QGu9gRKypiQ1HsZQQUC4piryCKDCgWRr7/n3inAXUIE288a73/4FnZO9k5Nyfi/1rL4auPxmZrr4b7OgK4St9k/tzjbpy/ezwX7PZalv/Et1y0N7tI/gv5+6Y6Of6L+afVOtn+zNp+tj9z+gDbzyjQyJ85fZDtz5zpYvuLXmBpf+bMPrY/c7yN7c8cLbH9mT1wf46V2f7M43B/DsL9+Rbuz/ky25+5Fe7P3XB/boT76yvY/nwN9+dluD8Pwf0P4f7CHIBm/VW4f7TM9r/cAPe36devX79+/fr169evX79+/fr169evX79+/fr169evX79+/fr169evX79+/fr169evX79+/fr169evX79+/fr169evX79+/fr169evX79+/fr169evX79+/fr169evX3/jnYL7j9TZ/vVTbH9cgfs3fWb74yTcH8Nwf3yE+1fD/bED7o+dyw/wYGWRAqxp4grcL1SBWXqBkYQXOJ3wAu1z9ALXEl5g8yd6gZ6kF7hEL1AasoAFLGABC1jAAhawgAUsYAELWMAC+AI3LGABC1jAAhawgAUsYAELWMACFrAAvsB1C1jAAhawgAUsYAELWMACFrCABSyALzBoAQtYwAIWsIAFLGABC1jAAhawgAXwBQYsYAELWMACFrCABSxgAQtYwAIWsAC+QL8FLGABC1ig2QKt9AK3gl7gDL3A13Z6gZsBL1DfRi/QG/ACdwNe4F3AC8yV6AXWRaEKLPs3JvMtwS4wGcEu8CTgBc4FvMCeYBcYiWAX6Ap2gaEIdIHnrYEuMLE9glxgoiOCXKDg/iULFN6/RAGAv2EBhL9BAYg/olRl+/9SAOSPiLPfF/ufbQnUjr1f+A1soBKwrTo/88t/b28AVzlafTr+5cOLO73/6PX/A6KXTQqA9mbdAAAAAElFTkSuQmCC'
            }}
            style={{
              width: 22,
              height: 22,
              tintColor: '#33AFFF',
              marginStart: 10,
            }}
          />

        }
      </View>
    </TouchableOpacity>
  );
}
const Right = ({ navigation }: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HomeScreen');
      }}
      style={styles.logoutButton}
    >
      <Text style={styles.logoutButtonText}>Logout</Text>
    </TouchableOpacity>
  );
}

const Dashboard: React.FC = ({ navigation, MediaPlayer }: any) => {
  console.log("Navigation:", navigation)
  const [videoUrl, setVideoUrl] = useState(null);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [thumb, setThumb] = useState('');
  const [text, setText] = useState('');
  const [headerVisibility, setHeaderVisibility] = useState(true);

  const handleViewClick = (url: any, desc: string, title: string, thumb: string) => {
    setVideoUrl(url);
    setDescription(desc);
    setTitle(title)
    setThumb(thumb)
  };

  // Array of movie URLs for rendering grid items
  const movieUrls = [

    {
      "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      ],
      "subtitle": "By Blender Foundation",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      "title": "Big Buck Bunny"
    },
    {
      "description": "The first Blender Open Movie from 2006",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      ],
      "subtitle": "By Blender Foundation",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      "title": "Elephant Dream"
    },
    {
      "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      ],
      "subtitle": "By Google",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      "title": "For Bigger Blazes"
    },
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      ],
      "subtitle": "By Google",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      "title": "For Bigger Escape"
    },
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      ],
      "subtitle": "By Google",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      "title": "For Bigger Fun"
    },
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      ],
      "subtitle": "By Google",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
      "title": "For Bigger Joyrides"
    },
    {
      "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      ],
      "subtitle": "By Google",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
      "title": "For Bigger Meltdowns"
    },
    {
      "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
      ],
      "subtitle": "By Blender Foundation",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
      "title": "Sintel"
    },
    {
      "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
      ],
      "subtitle": "By Garage419",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
      "title": "Subaru Outback On Street And Dirt"
    },
    {
      "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      ],
      "subtitle": "By Blender Foundation",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
      "title": "Tears of Steel"
    },
    {
      "description": "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
      ],
      "subtitle": "By Garage419",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
      "title": "Volkswagen GTI Review"
    },
    {
      "description": "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      ],
      "subtitle": "By Garage419",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
      "title": "We Are Going On Bullrun"
    },
    {
      "description": "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
      ],
      "subtitle": "By Garage419",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
      "title": "What care can you get for a grand?"
    },
    {
      "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
      "sources": [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
      ],
      "subtitle": "By Garage419",
      "thumb": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
      "title": "Subaru Outback On Street And Dirt"
    },
  ];

  // Splitting the movieUrls into chunks of 3 for grid view
  const rows = movieUrls.reduce((acc: any, curr: any, index: any) => {
    const rowIndex = Math.floor(index / 3);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(curr);
    return acc;
  }, []);

  const callback = (str: string): void => {
    console.log("Action received:", str);
    setVideoUrl(null);
  }

  const callbackHeaderOnOff = (value : boolean) =>{
    setHeaderVisibility(value)
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
    }}>
      {/* Render grid view */}

      {headerVisibility &&
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between', // Aligns children components at the ends of the container
        width: '100%',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        alignContent: 'center',
        paddingTop: 18
      }}>
        <Left navigation={navigation} callback={callback} url={videoUrl} />
        <Right navigation={navigation} />

      </View>
      }
      {!videoUrl && rows.map((row: any, rowIndex: any) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((url: any, index: any) => (
            <TouchableOpacity key={index} onPress={() => handleViewClick(url.sources[0], url.description, url.title, url.thumb)}>
              <View style={styles.gridItem}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: url.thumb }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      {/* Render video player */}
      {/* {videoUrl && ( */}

      {videoUrl &&
        <MediaPlayer callback={callback} url={videoUrl} callbackHeaderOnOff={callbackHeaderOnOff}/>
      }
      {/* )} */}

      {videoUrl &&
        <React.Fragment>
          <View style={styles.sectionHome}>
            <Text >
              <Text style={styles.sectionHeader}>Title: </Text>
              {title}
            </Text>
            <Text >
              <Text style={styles.sectionHeader}>Description: </Text>
              {description}
            </Text>
          </View>

          <View style={styles.sectionHomeBottom}>
            <TextInput
              style={{ padding: 10, fontSize: 18, height: 45, borderWidth: 2, borderColor: '#33AFFF', borderRadius: 8, }}
              placeholder=" Write your comment."
              onChangeText={newText => setText(newText.trim())}
              defaultValue={text}
            />
            <TouchableOpacity onPress={() => {
              navigation.navigate('SupportTab', {
                statsData: {
                  views: 100,
                  likes: 50,
                  shares: 20,
                  internetProvider: 'gp',
                  random: Math.random(),
                  comment: text.length > 0 ? text : 'No comment given!',
                  tab: 'support'
                }
              });
            }} style={styles.bottomButton}>
              <Text style={styles.buttonText}>
                Pass statistics to super app
              </Text>
            </TouchableOpacity>

          </View>


        </React.Fragment>
      }


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  gridItem: {
    height: 110,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5
  },
  image: {
    height: 110,
    width: 130
  },
  sectionHome: {
    padding: 22,
    marginTop: 20,
    marginBottom: 20
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionHomeBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20
  },
  bottomButton: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#33AFFF',
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  logoutButton: {
    marginRight: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#FF0000', // Adjust the color as needed
  },
});

export default Dashboard;
