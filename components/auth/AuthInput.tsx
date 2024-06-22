import { TextInput, View } from 'react-native';

function AuthInput({
  icon,
  placeholder,
  defaultValue,
}: {
  icon: JSX.Element;
  placeholder: string;
  defaultValue?: string;
}) {
  return (
    <View className='flex-row items-center relative mb-2'>
      <View className='absolute left-4 z-10'>{icon}</View>
      <TextInput
        className='w-full h-11 pl-10 pr-3 bg-white tracking-wide border-[1px] border-gray-400 rounded-md'
        placeholder={placeholder}
        placeholderTextColor='rgb(156 163 175)'
        autoCapitalize='none'
        defaultValue={defaultValue}
      />
    </View>
  );
}

export default AuthInput;
