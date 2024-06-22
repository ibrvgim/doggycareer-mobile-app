import { Keyboard, KeyboardAvoidingView, Pressable } from 'react-native';

function KeyboardDismiss({ children }: { children: React.ReactNode }) {
  return (
    <KeyboardAvoidingView className='flex-1 bg-blue-50' behavior='padding'>
      <Pressable className='flex-1' onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
}

export default KeyboardDismiss;
