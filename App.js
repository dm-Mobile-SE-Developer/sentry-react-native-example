/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Button} from 'react-native';

const styles = StyleSheet.create({
  marginContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  csrfTokenTextField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    height: 100,
  },
});

class App extends React.Component {
  state = {
    csrfToken: '',
    inputText: '',
    storageTestValue: undefined,
    storeInput: '',
    storeNumber: '',
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.marginContainer}>
            <Button
              title="Crash App"
              onPress={() => {
                throw new Error('This is a test javascript crash!');
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;
