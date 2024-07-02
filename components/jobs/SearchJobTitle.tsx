import { allIndustries } from '@/data/general/getIndustries';
import { setTitle } from '@/slices/searchSystemSlice';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import PressableCustom from '../general/Pressable';

function SearchJobTitle() {
  const route = useRouter();
  const inputElement = useRef<TextInput>(null);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputElement.current) inputElement.current!.focus();
  }, []);

  function handleTitle(title: string) {
    dispatch(setTitle(title));
    setInput('');
    route.back();
  }

  return (
    <View className='flex-row items-center relative'>
      <View className='absolute z-30 pl-4'>
        <Ionicons name='search' size={22} color='#0e7490' />
      </View>
      <TextInput
        placeholder='Job Title'
        placeholderTextColor='rgb(156 163 175)'
        className='border-[1px] border-cyan-700 text-[16px] h-12 rounded-full w-full pl-11 relative z-20 bg-white'
        value={input}
        onChangeText={setInput}
        ref={inputElement}
      />
      {input && input.trim() && (
        <InputOptions handleTitle={handleTitle} input={input} />
      )}
    </View>
  );
}

function InputOptions({
  input,
  handleTitle,
}: {
  input: string;
  handleTitle: (data: string) => void;
}) {
  const getSomeIndustries: string[] = allIndustries
    ?.map((industry: string) => industry)
    .filter((industry: string) =>
      industry.toLowerCase().includes(input.toLowerCase())
    )
    .slice(0, 6);

  if (getSomeIndustries?.length === 0) return null;

  return (
    <View className='bg-gray-100 rounded-b-xl rounded-t-md absolute w-full top-4 border-[1px] border-b-0 overflow-hidden border-gray-300 pt-8 z-10'>
      {getSomeIndustries?.map((title: string) => (
        <PressableCustom
          key={title}
          className='border-b-[1px] border-b-gray-300 py-3 px-4'
          onPress={() => handleTitle(title)}
        >
          <Text className='text-base text-gray-500 font-medium'>{title}</Text>
        </PressableCustom>
      ))}
    </View>
  );
}

export default SearchJobTitle;
