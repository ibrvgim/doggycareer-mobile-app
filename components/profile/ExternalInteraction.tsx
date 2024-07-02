import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

function ExternalInteraction({ title, link }: { title: string; link: string }) {
  return (
    <View className='flex-row items-center justify-between border-[1px] border-cyan-600 px-5 py-3 rounded-lg w-full mb-[10px]'>
      <Text className='font-medium tracking-widest text-cyan-600 text-[15px]'>
        <Link href={link}>{title}</Link>
      </Text>
      <FontAwesome name='external-link' size={20} color='rgb(8 145 178)' />
    </View>
  );
}

export default ExternalInteraction;
