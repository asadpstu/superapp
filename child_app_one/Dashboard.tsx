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
  const [text, setText] = useState('');

  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
    }}>
 
        <React.Fragment>
          <View style={styles.sectionHomeBottom}>
            <TextInput
              style={{ padding: 10, fontSize: 18, height: 45, borderWidth: 2, borderColor: '#33AFFF', borderRadius: 8, }}
              placeholder=" Write your comment."
              onChangeText={newText => setText(newText.trim())}
              defaultValue={text}
            />

            <TouchableOpacity onPress={() => {
              navigation.navigate('DashboardTab');
            }} style={styles.bottomButton}>
              <Text style={styles.buttonText}>
              Dashboard Tab(Super App)
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              navigation.navigate('ExploreTab');
            }} style={styles.bottomButton}>
              <Text style={styles.buttonText}>
                Explore Tab(Super App)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('SupportTab');
            }} style={styles.bottomButton}>
              <Text style={styles.buttonText}>
              Support Tab(Super App)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate('HomeScreen');
            }} style={styles.bottomButton}>
              <Text style={styles.buttonText}>
              Logout (Super App)
              </Text>
            </TouchableOpacity>
            
            

          </View>


        </React.Fragment>


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
