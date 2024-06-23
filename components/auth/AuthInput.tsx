import { TextInput, View } from 'react-native';

function AuthInput({
  icon,
  placeholder,
  defaultValue,
  onChange,
  value,
  onBlur,
  secureTextEntry = false,
}: {
  icon: JSX.Element;
  placeholder: string;
  defaultValue?: string;
  onChange?: () => void;
  value?: string;
  onBlur?: any;
  secureTextEntry?: boolean;
}) {
  return (
    <View className='flex-row items-center relative mb-2'>
      <View className='absolute left-4 z-10'>{icon}</View>
      <TextInput
        className='w-full h-11 pl-10 pr-3 bg-white tracking-wide border-[1px] border-gray-400 rounded-md font-medium text-gray-600'
        placeholder={placeholder}
        placeholderTextColor='rgb(156 163 175)'
        autoCapitalize='none'
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        defaultValue={defaultValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

export default AuthInput;
