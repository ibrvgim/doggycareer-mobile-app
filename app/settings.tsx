import { StatusBar, Text, View } from 'react-native';

function SettingsScreen() {
  return (
    <View className='flex-1'>
      <StatusBar barStyle={'dark-content'} />

      <Text>Settings</Text>
    </View>
  );
}

export default SettingsScreen;
