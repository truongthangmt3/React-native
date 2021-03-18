/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import OneSignal from 'react-native-onesignal';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const resgisterPush = async () => {
  OneSignal.setAppId('9a83fa74-f8fa-4004-b2e8-59f1637106f3');
  OneSignal.setLogLevel(6, 0);
  OneSignal.setRequiresUserPrivacyConsent(false);
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log('Prompt response:', response);
  });

  /* O N E S I G N A L  H A N D L E R S */
  OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
    console.log(
      'OneSignal: notification will show in foreground:',
      notifReceivedEvent,
    );
    let notif = notifReceivedEvent.getNotification();

    const button1 = {
      text: 'Cancel',
      onPress: () => {
        notifReceivedEvent.complete();
      },
      style: 'cancel',
    };

    const button2 = {
      text: 'Complete',
      onPress: () => {
        notifReceivedEvent.complete(notif);
      },
    };

    Alert.alert('Complete notification?', 'Test', [button1, button2], {
      cancelable: true,
    });
  });
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log('OneSignal: notification opened:', notification);
    Linking.openURL(notification.notification.additionalData.link);
  });
  OneSignal.setInAppMessageClickHandler(event => {
    console.log('OneSignal IAM clicked:', event);
  });
  OneSignal.addEmailSubscriptionObserver(event => {
    console.log('OneSignal: email subscription changed: ', event);
  });
  OneSignal.addSubscriptionObserver(event => {
    console.log('OneSignal: subscription changed:', event);
    // this.setState({isSubscribed: event.to.isSubscribed});
  });
  OneSignal.addPermissionObserver(event => {
    console.log('OneSignal: permission changed:', event);
  });

  const deviceState = await OneSignal.getDeviceState();
  console.log({deviceState});

  // this.setState({
  //   isSubscribed: deviceState.isSubscribed,
  // });
};

const App: () => Node = () => {
  useEffect(() => {
    resgisterPush();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
});

export default App;
