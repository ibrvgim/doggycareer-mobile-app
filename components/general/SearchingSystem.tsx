import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setClear } from '@/slices/searchSystemSlice';

function SearchingSystem({
  searches,
}: {
  searches: { title: string; region: string };
}) {
  const route = useRouter();
  const dispatch = useDispatch();

  return (
    <View className='px-4 py-6 bg-blue-50 border-b-[1px] border-b-gray-300'>
      <View className='flex-row w-full '>
        <Pressable
          className='flex-1 overflow-hidden rounded-l-full border-r-[1px] border-r-gray-300'
          onPress={() =>
            route.push({
              pathname: '(search)/modal',
              params: { search: 'title' },
            })
          }
        >
          <View className='flex-row items-center relative w-full h-11 bg-white'>
            <View className='absolute left-4 z-10'>
              <Ionicons name='search-outline' size={19} color='#0e7490' />
            </View>
            {searches?.title ? (
              <Text className='pl-[42px] pr-3 py-2 text-gray-500 font-medium text-[15px] tracking-wider self-center'>
                {searches.title?.length > 14
                  ? searches.title.slice(0, 14) + '...'
                  : searches.title}
              </Text>
            ) : (
              <Text className='pl-[43px] pr-3 text-gray-400 tracking-wide self-center'>
                Job Title
              </Text>
            )}
          </View>
        </Pressable>

        <Pressable
          className='flex-1 overflow-hidden rounded-r-full'
          onPress={() =>
            route.push({
              pathname: '(search)/modal',
              params: { search: 'region' },
            })
          }
        >
          <View className='flex-row items-center relative w-full h-11 bg-white'>
            <View className='absolute left-3 z-10'>
              <Ionicons name='location-outline' size={20} color='#0e7490' />
            </View>

            {searches?.region ? (
              <Text className='pl-[38px] pr-2 py-2 text-gray-500 font-medium text-[15px] tracking-wider self-center'>
                {searches.region?.length > 14
                  ? searches.region.slice(0, 14) + '...'
                  : searches.region}
              </Text>
            ) : (
              <Text className='pl-[38px] pr-3 text-gray-400 tracking-wide self-center'>
                Job Region
              </Text>
            )}
          </View>
        </Pressable>
      </View>

      {(searches.title || searches.region) && (
        <Pressable
          className='mt-3 mr-2 self-end'
          onPress={() => dispatch(setClear())}
        >
          <Text className='font-medium tracking-wide text-cyan-700'>
            Clear All
          </Text>
        </Pressable>
      )}
    </View>
  );
}

export default SearchingSystem;
