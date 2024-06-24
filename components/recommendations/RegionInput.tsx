import useGetCities from '@/hooks/general/useGetCities';
import { QuestionnaireType } from '@/types/types';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

function RegionInput() {
  const qiestionnaire = useSelector(
    (state: { questionnaire: QuestionnaireType }) => state.questionnaire
  );

  return (
    <View>
      <TextInput
        placeholder='Select Job Region'
        placeholderTextColor='rgb(156 163 175)'
        className='border-[1px] border-cyan-700 h-11 rounded-full pl-4 relative z-10 bg-white'
      />
      <InputOptions locations={qiestionnaire.location} />
    </View>
  );
}

function InputOptions({ locations }: { locations: string[] }) {
  const { cities } = useGetCities();

  return (
    <View className='bg-gray-100 rounded-b-xl rounded-t-md absolute w-full top-4 border-[1px] border-b-0 border-gray-300 overflow-hidden pt-8'>
      {cities
        ?.filter((city: string) => !locations?.includes(city))
        .slice(0, 4)
        .map((city: string) => (
          <Pressable
            key={city}
            className='border-b-[1px] border-b-gray-300 py-3 px-4'
          >
            <Text className='text-[15px] text-gray-500 font-medium'>
              {city}
            </Text>
          </Pressable>
        ))}
    </View>
  );
}

export default RegionInput;
