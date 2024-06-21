import { ActivityIndicator, View } from 'react-native';

function LoadingScreen() {
  return (
    <View className='flex-1 justify-center'>
      <ActivityIndicator color='rgb(14 116 144)' size={'large'} />
    </View>
  );
}

export default LoadingScreen;
