import React from 'react';

//Style
import { StyleSheet} from 'react-native';

//Navigation
import Navigator from './app/navigation/Navigator';

export default function App() {
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
