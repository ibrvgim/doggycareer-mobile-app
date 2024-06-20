import { View } from 'react-native';
import Input from './Input';
import { Ionicons } from '@expo/vector-icons';

function SearchingSystem() {
  return (
    <View className='flex-row w-full px-4 py-6 bg-rose-200'>
      <View className='flex-1 overflow-hidden rounded-l-full border-r-[1px] border-r-gray-300'>
        <Input
          placeholder='Job Title'
          icon={<Ionicons name='search-outline' size={19} color='#0e7490' />}
        />
      </View>

      <View className='flex-1 overflow-hidden rounded-r-full'>
        <Input
          placeholder='Job Region'
          icon={<Ionicons name='location-outline' size={19} color='#0e7490' />}
        />
      </View>
    </View>
  );
}

export default SearchingSystem;
