import { Pressable, Text } from 'react-native';

function FilterTab({
  title,
  handleOnPress,
  isActive = false,
}: {
  title: string;
  handleOnPress: () => void;
  isActive: boolean;
}) {
  return (
    <Pressable
      className={`border-[1px] rounded-full px-8 py-1 mr-2 mb-2 ${
        isActive ? 'bg-cyan-50 border-cyan-600' : 'bg-gray-200 border-gray-300'
      }`}
      onPress={handleOnPress}
    >
      <Text
        className={`font-medium ${
          isActive ? 'text-cyan-700' : 'text-gray-700'
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}

export default FilterTab;
