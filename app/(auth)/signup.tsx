import AuthLogo from '@/components/auth/AuthLogo';
import SignupInputsContainer from '@/components/auth/SignupInputsContainer';
import KeyboardDismiss from '@/components/general/KeyboardDismiss';
import { useRouter } from 'expo-router';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function SignupScreen() {
  const route = useRouter();

  return (
    <KeyboardDismiss>
      <SafeAreaView
        className='flex-1 items-center justify-center '
        style={styles.androidSafeArea}
      >
        <StatusBar barStyle={'dark-content'} />
        <AuthLogo />
        <SignupInputsContainer />

        <View className='flex-row items-center mt-8 '>
          <Text className='text-base text-cyan-700 font-medium mr-3'>
            Already have an account?
          </Text>
          <Pressable
            onPress={() => route.back()}
            className='border-[1px] border-cyan-700 rounded-full px-6 py-[1px] '
          >
            <Text className='uppercase tracking-wide text-xs text-cyan-700 font-medium'>
              Log In
            </Text>
          </Pressable>
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

export default SignupScreen;
