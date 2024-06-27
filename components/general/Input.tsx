import { KeyboardAvoidingView, TextInput, View } from 'react-native';

function Input({
  icon,
  placeholder,
  defaultValue,
  onChange,
  value,
  onBlur,
  editable = true,
}: {
  icon: JSX.Element;
  placeholder: string;
  defaultValue?: string;
  onChange?: () => void;
  value?: string;
  onBlur?: any;
  editable?: boolean;
}) {
  return (
    <View className='flex-row items-center relative'>
      <View className='absolute left-4 z-10'>{icon}</View>
      <TextInput
        className='w-full h-11 pl-[44px] pr-3 bg-white tracking-wide'
        placeholder={placeholder}
        placeholderTextColor='#9ca3af'
        autoCapitalize='none'
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        defaultValue={defaultValue}
        editable={editable}
      />
    </View>
  );
}

export default Input;
