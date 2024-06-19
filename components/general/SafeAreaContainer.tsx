import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

function SafeAreaContainer({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.androidSafeArea} className='flex-1'>
      <StatusBar barStyle={'dark-content'} animated />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default SafeAreaContainer;
