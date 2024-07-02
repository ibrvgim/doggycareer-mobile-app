import useGetCities from '@/hooks/general/useGetCities';
import { setLocation } from '@/slices/questionnaireSlice';
import { QuestionnaireType } from '@/types/types';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PressableCustom from '../general/Pressable';

function RegionInput() {
  const questionnaire = useSelector(
    (state: { questionnaire: QuestionnaireType }) => state.questionnaire
  );
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleCity(city: string) {
    if (questionnaire.location?.length > 5) return;
    dispatch(setLocation(city));
    setInput('');
  }

  return (
    <View>
      {questionnaire.location?.length < 5 && (
        <TextInput
          placeholder='Select Job Region'
          placeholderTextColor='rgb(156 163 175)'
          className='border-[1px] border-gray-300 h-11 rounded-full pl-4 relative z-20 bg-white'
          value={input}
          onChangeText={setInput}
          editable={questionnaire.location?.length < 5}
        />
      )}

      {input && (
        <InputOptions
          locations={questionnaire.location}
          handleCity={handleCity}
          input={input}
        />
      )}
    </View>
  );
}

function InputOptions({
  locations,
  input,
  handleCity,
}: {
  locations: string[];
  input: string;
  handleCity: (data: string) => void;
}) {
  const { cities } = useGetCities();

  const getSomeCities: string[] = cities
    ?.map((city: string) => city)
    .filter(
      (city: string) =>
        !locations.includes(city.toLowerCase()) &&
        city.toLowerCase().includes(input.toLowerCase().trim())
    )
    .slice(0, 3);

  if (getSomeCities?.length === 0) return null;

  return (
    <View className='bg-gray-100 rounded-b-xl rounded-t-md absolute w-full top-4 border-[1px] border-b-0 overflow-hidden border-gray-300 pt-8 z-10'>
      {getSomeCities?.map((city: string) => (
        <PressableCustom
          key={city}
          className='border-b-[1px] border-b-gray-300 py-3 px-4'
          onPress={() => handleCity(city)}
        >
          <Text className='text-[15px] text-gray-500 font-medium'>{city}</Text>
        </PressableCustom>
      ))}
    </View>
  );
}

export default RegionInput;
