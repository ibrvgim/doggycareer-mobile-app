import { Text, View } from 'react-native';
import Input from '../general/Input';
import {
  AntDesign,
  FontAwesome,
  FontAwesome6,
  Fontisto,
  Ionicons,
} from '@expo/vector-icons';
import ModalWindow from '../general/ModalWindow';
import { useState } from 'react';
import {
  useUpdateAppliedJob,
  useUpdateSavedJob,
} from '@/hooks/jobs/useUpdateStoredJobs';
import useGetStoredJobs from '@/hooks/jobs/useGetStoredJobs';
import { Controller, useForm } from 'react-hook-form';
import { useGetUser } from '@/hooks/auth/useGetUser';
import { useGetPersonalData } from '@/hooks/users/useGetPersonalData';
import LoadingScreen from '../general/LoadingScreen';
import Button from '../general/Button';

function ApplyForm({
  applyJobID,
}: {
  applyJobID: string | string[] | undefined;
}) {
  const { isPending, updateApplyJobs } = useUpdateAppliedJob();
  const { updateSaveJob } = useUpdateSavedJob();
  const { storedJobs } = useGetStoredJobs();
  const [modalVisible, setModalVisible] = useState(false);
  const { getUser } = useGetUser();
  const { isPending: isGettingPersonalData, data } = useGetPersonalData();

  const currentUserData = data?.find((item) => item.userId === getUser?.id);

  const currentUserStoredJobs = storedJobs?.find(
    (item) => item.userId === getUser?.id
  );
  const listAppliedJobs = currentUserStoredJobs?.appliedJobs;
  const listSavedJobs = currentUserStoredJobs?.savedJobs;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: getUser?.user_metadata.firstName || '',
      lastName: getUser?.user_metadata.lastName || '',
      email: getUser?.email || '',
      phoneNumber: getUser?.user_metadata.phoneNumber || '',
      linkedin: currentUserData?.linkedin || '',
      github: currentUserData?.github || '',
      salary: '',
      startDate: '',
      visa: '',
      additionalInfo: '',
    },
  });

  function toggleModalWindow() {
    setModalVisible((modal) => !modal);
  }

  function submitForm() {
    if (getUser?.id) {
      updateApplyJobs({
        userId: getUser?.id,
        applied: [applyJobID, ...listAppliedJobs],
      });
      if (listSavedJobs.includes(applyJobID)) {
        const clearedJobs = listSavedJobs.filter(
          (job: string) => job !== applyJobID
        );
        updateSaveJob({
          userId: getUser?.id,
          saved: [...clearedJobs],
        });
      }
      !isPending && toggleModalWindow();
    }
  }

  if (isGettingPersonalData)
    return (
      <View className='mt-60'>
        <LoadingScreen />
      </View>
    );

  return (
    <View className='mt-10'>
      <Text className='text-lg font-semibold text-rose-400 mb-3 tracking-wider'>
        Personal Information *
      </Text>

      {errors.firstName && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Field must be filled in'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <FontAwesome
                  name='pencil-square-o'
                  size={19}
                  color='rgb(156 163 175)'
                />
              }
              placeholder='First Name'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='firstName'
        />
      </View>

      {errors.lastName && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Field must be filled in'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <FontAwesome
                  name='pencil-square-o'
                  size={19}
                  color='rgb(156 163 175)'
                />
              }
              placeholder='Last Name'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='lastName'
        />
      </View>

      {errors.email && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Field must be filled in'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <Ionicons
                  name='mail-outline'
                  size={19}
                  color='rgb(156 163 175)'
                />
              }
              placeholder='Email Address'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='email'
        />
      </View>

      {errors.phoneNumber && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Field must be filled in'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <AntDesign name='phone' size={19} color='rgb(156 163 175)' />
              }
              placeholder='Phone Number'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='phoneNumber'
        />
      </View>

      <Text className='text-lg font-semibold text-rose-400 mb-3 tracking-wider mt-9'>
        Other References
      </Text>

      {errors.linkedin && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Invalid link format'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            validate: (value) => (value ? /linkedin.com/g.test(value) : true),
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <Ionicons
                  name='logo-linkedin'
                  size={20}
                  color='rgb(156 163 175)'
                />
              }
              placeholder='LinkedIn'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='linkedin'
        />
      </View>

      {errors.github && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Invalid link format'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            validate: (value) => (value ? /github.com/g.test(value) : true),
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <Ionicons
                  name='logo-github'
                  size={20}
                  color='rgb(156 163 175)'
                />
              }
              placeholder='GitHub'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='github'
        />
      </View>

      <Text className='text-lg font-semibold text-rose-400 mb-3 tracking-wider mt-10'>
        Additional Information
      </Text>

      {errors.salary && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Field must be filled in'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <FontAwesome6
                  name='money-bill'
                  size={18}
                  color='rgb(156 163 175)'
                />
              }
              placeholder='What are your salary expectations? *'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='salary'
        />
      </View>

      {errors.startDate && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Field must be filled in'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={<Fontisto name='date' size={17} color='rgb(156 163 175)' />}
              placeholder='When are you able to start? *'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='startDate'
        />
      </View>

      {errors.visa && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium mb-2'>
          {'Field must be filled in'}
        </Text>
      )}
      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden mb-2'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              icon={
                <Ionicons
                  name='document-text-outline'
                  size={21}
                  color='rgb(156 163 175)'
                />
              }
              placeholder='Do you have a work permit in Germany? *'
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name='visa'
        />
      </View>

      <View className='border-[1px] border-gray-300 rounded-md overflow-hidden'>
        <Input
          icon={
            <Ionicons
              name='information-circle-outline'
              size={22}
              color='rgb(156 163 175)'
            />
          }
          placeholder='Any information we should know about?'
        />
      </View>

      <View className='mt-6 mb-12'>
        <Button isPending={isPending} onClick={handleSubmit(submitForm)}>
          Submit Application
        </Button>
      </View>

      <ModalWindow
        modalVisible={modalVisible}
        toggleModalWindow={toggleModalWindow}
      />
    </View>
  );
}

export default ApplyForm;
