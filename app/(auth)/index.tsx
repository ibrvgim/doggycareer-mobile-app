import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginInputsContainer from '@/components/auth/LoginInputsContainer';
import AuthLogo from '@/components/auth/AuthLogo';
import KeyboardDismiss from '@/components/general/KeyboardDismiss';
import { Link } from 'expo-router';

function LoginScreen() {
  return (
    <KeyboardDismiss>
      <SafeAreaView
        className='flex-1 items-center justify-center '
        style={styles.androidSafeArea}
      >
        <StatusBar barStyle={'dark-content'} />
        <AuthLogo />
        <LoginInputsContainer />

        <View className='flex-row items-center mt-8 '>
          <Text className='text-base text-cyan-700 font-medium mr-3'>
            Don't have an account yet?
          </Text>
          <Link
            href='signup'
            replace
            className='uppercase tracking-wide text-xs border-[1px] border-cyan-700 rounded-full px-8 py-[2px] text-cyan-700 font-medium'
          >
            Sign Up
          </Link>
        </View>
      </SafeAreaView>
    </KeyboardDismiss>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: StatusBar.currentHeight,
  },
});

export default LoginScreen;
