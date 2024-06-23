import { Pressable, Text, View } from 'react-native';
import AuthInput from './AuthInput';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function SignupInputsContainer() {
  return (
    <View className='mt-12 mx-4 px-4 pt-10 pb-7 bg-white rounded-xl shadow-lg border-2 border-cyan-700'>
      <Text className='mb-6 uppercase font-bold text-cyan-700 text-lg tracking-widest self-center'>
        Join Us - Create Account
      </Text>
      <AuthInput
        placeholder='First Name'
        icon={
          <FontAwesome
            name='pencil-square-o'
            size={19}
            color='rgb(156 163 175)'
          />
        }
      />

      <AuthInput
        placeholder='Last Name'
        icon={
          <FontAwesome
            name='pencil-square-o'
            size={19}
            color='rgb(156 163 175)'
          />
        }
      />

      <AuthInput
        placeholder='Email Address'
        icon={
          <Ionicons name='mail-outline' size={19} color='rgb(156 163 175)' />
        }
      />

      <AuthInput
        placeholder='Phone Number'
        icon={<AntDesign name='phone' size={19} color='rgb(156 163 175)' />}
      />

      <AuthInput
        placeholder='Password'
        icon={
          <Ionicons
            name='lock-closed-outline'
            size={19}
            color='rgb(156 163 175)'
          />
        }
      />

      <AuthInput
        placeholder='Confirm Password'
        icon={
          <Ionicons
            name='lock-closed-outline'
            size={19}
            color='rgb(156 163 175)'
          />
        }
      />

      <Pressable className='self-end border-[1px] border-cyan-700 bg-cyan-700 px-10 py-2 mt-3 rounded-md'>
        <Text className='text-white font-medium tracking-wide'>
          Create Account
        </Text>
      </Pressable>
    </View>
  );
}

export default SignupInputsContainer;
