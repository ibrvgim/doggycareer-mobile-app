import FilterTab from '@/components/modal/FilterTab';
import RegionInput from '@/components/recommendations/RegionInput';
import { ScrollView, StatusBar, Text, View } from 'react-native';

function RecommendationsScreen() {
  return (
    <View className='flex-1 bg-white'>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView className='py-6 px-4'>
        <Text className='text-2xl font-bold opacity-80 text-cyan-700 mb-2 tracking-wider'>
          Job Preferences
        </Text>
        <Text className='text-gray-400 font-medium text-[15px] tracking-wide mb-8'>
          Fill out the form and it will help you see more relevant vacancies
          that interest you.
        </Text>

        <View className='border-[1px] border-slate-300 rounded-lg px-4 py-5 mb-6'>
          <Text className='text-base font-semibold text-cyan-700 opacity-80 mb-6'>
            Do you want to work part or full time?
          </Text>
          <View className='flex-row'>
            <FilterTab
              handleOnPress={() => {}}
              isActive={true}
              title='Full time'
            />
            <FilterTab
              handleOnPress={() => {}}
              isActive={false}
              title='Part time'
            />
          </View>
        </View>

        <View className='border-[1px] border-slate-300 rounded-lg px-4 py-5'>
          <Text className='text-base font-semibold text-cyan-700 opacity-80 mb-6'>
            Where would you like to work?
          </Text>
          <RegionInput />
        </View>
      </ScrollView>
    </View>
  );
}

export default RecommendationsScreen;
