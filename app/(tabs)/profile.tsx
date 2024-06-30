import LoadingScreen from '@/components/general/LoadingScreen';
import ExternalInteraction from '@/components/profile/ExternalInteraction';
import JobPreferencesButton from '@/components/profile/JobPreferencesButton';
import JobPreferencesCard from '@/components/profile/JobPreferencesCard';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileEditCard from '@/components/profile/ProfileEditCard';
import { useGetUser } from '@/hooks/auth/useGetUser';
import { useGetPersonalData } from '@/hooks/users/useGetPersonalData';
import { Redirect } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

function ProfileScreen() {
  const [edit, setEdit] = useState(false);
  const { isPending: isGettingUser, getUser } = useGetUser();
  const { isPending: isGettingPersonalData, data } = useGetPersonalData();

  const currentUserData = data?.find((item) => item.userId === getUser?.id);

  function handleEdit() {
    setEdit((edit) => !edit);
  }

  if (getUser?.role !== 'authenticated') Redirect({ href: '(auth)' });
  if (isGettingUser || isGettingPersonalData) return <LoadingScreen />;
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 py-6 px-4'>
        <StatusBar barStyle={'dark-content'} />
        {edit ? (
          <ProfileEditCard getUser={getUser} handleEdit={handleEdit} />
        ) : (
          <ProfileCard getUser={getUser} handleEdit={handleEdit} />
        )}

        <View>
          {currentUserData?.questionnaire ? (
            <JobPreferencesCard
              currentUserData={currentUserData}
              userId={getUser?.id}
            />
          ) : (
            <JobPreferencesButton />
          )}

          <ExternalInteraction
            title='Post a Job'
            link='https://doggycareer.vercel.app/account/post-job'
          />

          <ExternalInteraction
            title='Change Authentication Data'
            link='https://doggycareer.vercel.app/account/settings'
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
