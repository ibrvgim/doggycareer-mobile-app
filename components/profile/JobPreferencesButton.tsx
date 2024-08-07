import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import PressableCustom from '../general/Pressable';

function JobPreferencesButton() {
  const route = useRouter();

  return (
    <PressableCustom
      className='flex-row items-center justify-between border-[1px] border-cyan-600 pl-5 pr-[22px] py-3 rounded-lg mb-3'
      onPress={() => route.push('(tabs)/recommendations')}
    >
      <Text className='font-medium tracking-widest text-cyan-600 text-[15px]'>
        Create Job Preferences
      </Text>
      <FontAwesome name='plus-square-o' size={22.5} color='rgb(8 145 178)' />
    </PressableCustom>
  );
}

export default JobPreferencesButton;
