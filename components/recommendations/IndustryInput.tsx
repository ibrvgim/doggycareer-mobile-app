import { allIndustries } from '@/data/general/getIndustries';
import { setIndustry } from '@/slices/questionnaireSlice';
import { QuestionnaireType } from '@/types/types';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

function IndustryInput() {
  const questionnaire = useSelector(
    (state: { questionnaire: QuestionnaireType }) => state.questionnaire
  );
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleIndustry(industry: string) {
    if (questionnaire.industry?.length > 3) return;
    dispatch(setIndustry(industry));
    setInput('');
  }

  return (
    <View>
      {questionnaire.industry?.length < 3 && (
        <TextInput
          placeholder='Select Job Title'
          placeholderTextColor='rgb(156 163 175)'
          className='border-[1px] border-gray-300 h-11 rounded-full pl-4 relative z-20 bg-white'
          value={input}
          onChangeText={setInput}
          editable={questionnaire.industry?.length < 3}
        />
      )}

      {input && (
        <InputOptions
          industries={questionnaire.industry}
          handleIndustry={handleIndustry}
          input={input}
        />
      )}
    </View>
  );
}

function InputOptions({
  industries,
  input,
  handleIndustry,
}: {
  industries: string[];
  input: string;
  handleIndustry: (data: string) => void;
}) {
  const getSomeIndustries: string[] = allIndustries
    ?.map((industry: string) => industry)
    .filter(
      (industry: string) =>
        !industries.includes(industry.toLowerCase()) &&
        industry.toLowerCase().includes(input.toLowerCase())
    )
    .slice(0, 3);

  if (getSomeIndustries?.length === 0) return null;

  return (
    <View className='bg-gray-100 rounded-b-xl rounded-t-md absolute w-full top-4 border-[1px] border-b-0 overflow-hidden border-gray-300 pt-8 z-10'>
      {getSomeIndustries?.map((industry: string) => (
        <Pressable
          key={industry}
          className='border-b-[1px] border-b-gray-300 py-3 px-4'
          onPress={() => handleIndustry(industry)}
        >
          <Text className='text-[15px] text-gray-500 font-medium'>
            {industry}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export default IndustryInput;
