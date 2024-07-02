import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Input from '../general/Input';
import { UserMetaData, UserType } from '@/types/types';
import { Controller, useForm } from 'react-hook-form';
import { useUpdateUserData } from '@/hooks/auth/useAuthUser';
import Button from '../general/Button';
import PressableCustom from '../general/Pressable';

function ProfileEditCard({
  getUser,
  handleEdit,
}: {
  getUser: UserType | undefined | null;
  handleEdit: () => void;
}) {
  const personalData = getUser?.user_metadata;
  const { isPending, updateUserData } = useUpdateUserData();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: personalData?.firstName,
      lastName: personalData?.lastName,
      email: getUser?.email,
      phoneNumber: personalData?.phoneNumber,
    },
  });

  function onSubmit(data: UserMetaData) {
    const { firstName, lastName, phoneNumber } = data;
    if (firstName || lastName || phoneNumber) {
      updateUserData({
        firstName,
        lastName,
        phoneNumber,
      });
      if (!isPending) handleEdit();
    }
  }

  return (
    <View className='border-[1px] border-cyan-600 rounded-lg px-4 pt-10 pb-6 mb-6 items-center relative'>
      <FontAwesome name='user-circle-o' size={80} color='rgb(8 145 178)' />

      <View className='mt-6'>
        <View className='flex-row items-center justify-between'>
          <Text className='font-medium text-cyan-700 text-base'>
            First name *
          </Text>

          {errors.firstName && (
            <Text className='text-[13px] tracking-wider text-red-500 font-medium'>
              Must be filled in
            </Text>
          )}
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mt-2'>
              <Input
                placeholder='First Name'
                icon={
                  <FontAwesome
                    name='pencil-square-o'
                    size={19}
                    color='rgb(156 163 175)'
                  />
                }
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </View>
          )}
          name='firstName'
        />

        <View className='flex-row items-center justify-between mt-4'>
          <Text className='font-medium text-cyan-700 text-base'>
            Last name *
          </Text>

          {errors.lastName && (
            <Text className='text-[13px] tracking-wider text-red-500 font-medium'>
              Must be filled in
            </Text>
          )}
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mt-2'>
              <Input
                placeholder='Last Name'
                icon={
                  <FontAwesome
                    name='pencil-square-o'
                    size={19}
                    color='rgb(156 163 175)'
                  />
                }
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </View>
          )}
          name='lastName'
        />

        <Text className='font-medium text-cyan-700 text-base mt-4'>
          Email Address *
        </Text>

        <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mt-2 opacity-60'>
          <Input
            placeholder='Email Address'
            defaultValue={getUser?.email}
            editable={false}
            icon={
              <Ionicons
                name='mail-outline'
                size={19}
                color='rgb(156 163 175)'
              />
            }
          />
        </View>

        <View className='flex-row items-center justify-between mt-4'>
          <Text className='font-medium text-cyan-700 text-base'>
            Phone Number *
          </Text>

          {errors.phoneNumber && (
            <Text className='text-[13px] tracking-wider text-red-500 font-medium'>
              Must be filled in
            </Text>
          )}
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mt-2'>
              <Input
                placeholder='Phone Number'
                icon={
                  <AntDesign name='phone' size={19} color='rgb(156 163 175)' />
                }
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            </View>
          )}
          name='phoneNumber'
        />
      </View>

      <View className='flex-row justify-end mt-4 w-full'>
        <PressableCustom
          className='border-[1px] border-cyan-700 px-5 py-2 mt-3 rounded-md self-end mr-2'
          onPress={handleEdit}
        >
          <Text className='text-cyan-700 font-medium tracking-wide'>
            Cancel
          </Text>
        </PressableCustom>

        <Button isPending={isPending} onClick={handleSubmit(onSubmit)}>
          Save Changes
        </Button>
      </View>
    </View>
  );
}

export default ProfileEditCard;
