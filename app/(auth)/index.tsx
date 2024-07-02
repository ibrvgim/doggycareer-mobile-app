import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginInputsContainer from '@/components/auth/LoginInputsContainer';
import AuthLogo from '@/components/auth/AuthLogo';
import KeyboardDismiss from '@/components/general/KeyboardDismiss';
import { useRouter } from 'expo-router';
import PressableCustom from '@/components/general/Pressable';

function LoginScreen() {
  const route = useRouter();

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

          <PressableCustom
            onPress={() => route.push('signup')}
            className='border-[1px] border-cyan-700 rounded-full px-6 py-[1px] '
          >
            <Text className='uppercase tracking-wide text-xs text-cyan-700 font-medium'>
              Sign Up
            </Text>
          </PressableCustom>
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
