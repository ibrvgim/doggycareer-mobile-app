import useGetCities from '@/hooks/general/useGetCities';
import { setRegion } from '@/slices/searchSystemSlice';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

function SearchJobRegion() {
  const route = useRouter();
  const inputElement = useRef<TextInput>(null);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputElement.current) inputElement.current!.focus();
  }, []);

  function handleCity(region: string) {
    dispatch(setRegion(region));
    setInput('');
    route.back();
  }

  return (
    <View className='flex-row items-center relative'>
      <View className='absolute z-30 pl-4'>
        <Ionicons name='location-outline' size={24} color='#0e7490' />
      </View>
      <TextInput
        placeholder='Job Region'
        placeholderTextColor='rgb(156 163 175)'
        className='border-[1px] border-cyan-700 text-[16px] h-12 rounded-full w-full pl-11 relative z-20 bg-white'
        value={input}
        onChangeText={setInput}
        ref={inputElement}
      />
      {input && input.trim() && (
        <InputOptions handleCity={handleCity} input={input} />
      )}
    </View>
  );
}

function InputOptions({
  input,
  handleCity,
}: {
  input: string;
  handleCity: (data: string) => void;
}) {
  const { cities } = useGetCities();

  const getSomeCities: string[] = cities
    ?.map((city: string) => city)
    .filter((city: string) =>
      city.toLowerCase().includes(input.toLowerCase().trim())
    )
    .slice(0, 6);

  if (getSomeCities?.length === 0) return null;

  return (
    <View className='bg-gray-100 rounded-b-xl rounded-t-md absolute w-full top-4 border-[1px] border-b-0 overflow-hidden border-gray-300 pt-8 z-10'>
      {getSomeCities?.map((city: string) => (
        <Pressable
          key={city}
          className='border-b-[1px] border-b-gray-300 py-3 px-4'
          onPress={() => handleCity(city)}
        >
          <Text className='text-base text-gray-500 font-medium'>{city}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export default SearchJobRegion;
