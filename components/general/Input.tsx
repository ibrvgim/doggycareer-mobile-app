import { KeyboardAvoidingView, TextInput, View } from 'react-native';

function Input({
  icon,
  placeholder,
  defaultValue,
}: {
  icon: JSX.Element;
  placeholder: string;
  defaultValue?: string;
}) {
  return (
    <View className='flex-row items-center relative'>
      <View className='absolute left-4 z-10'>{icon}</View>
      <TextInput
        className=' w-full h-11 pl-10 pr-3 bg-white tracking-wide'
        placeholder={placeholder}
        placeholderTextColor='#155e75'
        autoCapitalize='none'
        defaultValue={defaultValue}
      />
    </View>
  );
}

export default Input;
