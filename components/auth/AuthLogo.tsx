import { Image, Text, View } from 'react-native';

function AuthLogo() {
  return (
    <View className='flex-row items-center gap-3'>
      <Image
        source={require('../../assets/images/logo.png')}
        className='w-14 h-14'
      />
      <Text className='text-3xl uppercase text-cyan-700 tracking-widest font-extrabold'>
        Doggycareer
      </Text>
    </View>
  );
}

export default AuthLogo;
