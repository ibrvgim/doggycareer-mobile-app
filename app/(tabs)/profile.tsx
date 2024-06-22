import { StatusBar, Text, View } from 'react-native';

function ProfileScreen() {
  return (
    <View className='flex-1'>
      <StatusBar barStyle={'dark-content'} />

      <Text>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;
