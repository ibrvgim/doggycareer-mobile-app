import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

function SafeAreaContainer({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView className='flex-1'>
      <StatusBar barStyle={'dark-content'} />

      {children}
    </SafeAreaView>
  );
}

export default SafeAreaContainer;
