/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import tw from 'utils/tailwind';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <SafeAreaProvider>
      <View>
        <Text style={tw`text-3xl text-red-500 font-bold`}>APP</Text>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
