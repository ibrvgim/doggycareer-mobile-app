import { FontAwesome } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { UserType } from '@/types/types';

function ProfileCard({
  getUser,
  handleEdit,
}: {
  getUser: UserType | undefined | null;
  handleEdit: () => void;
}) {
  const personalData = getUser?.user_metadata;

  return (
    <View className='border-[1px] border-cyan-600 rounded-lg px-4 pt-10 pb-6 mb-6 items-center relative'>
      <Pressable className='absolute top-4 right-3' onPress={handleEdit}>
        <FontAwesome name='edit' size={24} color='rgb(8 145 178)' />
      </Pressable>

      <FontAwesome name='user-circle-o' size={80} color='rgb(8 145 178)' />

      <Text className='mt-4 text-lg font-medium tracking-widest text-cyan-600'>
        {personalData?.firstName} {personalData?.lastName}
      </Text>
      <Text className='mt-2 text-[15px] tracking-wider text-gray-500'>
        {getUser?.email}
      </Text>
      <Text className='mt-2 text-sm tracking-wider text-gray-500'>
        {personalData?.phoneNumber}
      </Text>
    </View>
  );
}

export default ProfileCard;
