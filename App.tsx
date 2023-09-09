/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {Dispatch, PropsWithChildren, SetStateAction} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
  githubActive: boolean;
  setGithubActive: Dispatch<SetStateAction<boolean>>
}>;

function TopBar({children, title, githubActive, setGithubActive}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.backButtonWrapper}>
      {githubActive && <TouchableOpacity onPress={() => { setGithubActive(past => false) }} style={styles.backButton} ><Image style={styles.backImage} source={require("./images/back.png")} /></TouchableOpacity>}
      </View>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

const { height, width } = Dimensions.get("window")

function App(): JSX.Element {
  const [githubActive, setGithubActive] = useState(false)
  const [loadingStat, setLoadingStat] = useState(false)
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.safeareaView}>
        <TopBar title={githubActive ? "Github Profile" : "Slack Profile"} githubActive={githubActive} setGithubActive={setGithubActive}></TopBar>
        <View style={styles.main}>
          { !githubActive && (<>
            <Image style={styles.profileImage} source={require("./images/photo.jpg")} />
            <Text style={[styles.name, { color: isDarkMode ? Colors.white : Colors.black, }]}>Oladimeji Tongil Byungsa Amusa</Text>
            <TouchableOpacity onPress={() => { setGithubActive(past => true) }} style={styles.actionButton}><Text style={styles.buttonText}>Open Github</Text></TouchableOpacity>
          </>)}
          { githubActive && (<WebView source={{uri: "https://github.com/smartbizlord"}} style={styles.webView}/>)}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaView: {
    height,
    width,
    // justifyContent: "center",
    alignItems: "center"
  },
  webView: {
    height: height * 0.9,
    width: width * 0.95,
    marginHorizontal: "auto",
  },
  sectionContainer: {
    height: height * 0.1,
    width: "100%",
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backButtonWrapper: {
    position: "absolute",
    left: 24,
    height: height * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    // backgroundColor: "gray",
    height: "auto",
    padding: 12,
    borderRadius: 32,
  },
  backImage: {
    height: 40,
    width: 40,
    borderRadius: 9999,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.9,
    // backgroundColor: "red",
    width,
  },
  name: {
    width: "50%",
    fontSize: 24,
    fontWeight: "500",
  },
  buttonText: {
    fontSize: 20,
  },
  actionButton: {
    marginTop: 50,
    backgroundColor: "gray",
    padding: 12,
    borderRadius: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 70
  },
});

export default App;
