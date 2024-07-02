import { Text, View } from 'react-native';
import AuthInput from './AuthInput';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Controller, useForm } from 'react-hook-form';
import { useSignupUser } from '@/hooks/auth/useAuthUser';
import { SignupType } from '@/types/types';
import Button from '../general/Button';

function SignupInputsContainer() {
  const { isPending, createUser } = useSignupUser();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(data: SignupType) {
    const { firstName, lastName, email, password, phoneNumber } = data;
    if (firstName && lastName && email && password && phoneNumber)
      createUser({ firstName, lastName, email, password, phoneNumber });
  }

  return (
    <View className='mt-12 mx-4 px-4 pt-10 pb-7 bg-white rounded-xl shadow-lg border-2 border-cyan-700'>
      <Text className='mb-6 uppercase font-bold text-cyan-700 text-lg tracking-widest self-center'>
        Create Account - Join Us
      </Text>

      {errors.firstName && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium'>
          Field must be filled in
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
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
        )}
        name='firstName'
      />

      {errors.lastName && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium'>
          Field must be filled in
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
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
        )}
        name='lastName'
      />

      {errors.email && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium'>
          Invalid Email Format
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
          validate: (value) => /^\S+@\S+\.\S+$/.test(value),
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            placeholder='Email Address'
            icon={
              <Ionicons
                name='mail-outline'
                size={19}
                color='rgb(156 163 175)'
              />
            }
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name='email'
      />

      {errors.phoneNumber && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium'>
          Field must be filled in
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            placeholder='Phone Number'
            icon={<AntDesign name='phone' size={19} color='rgb(156 163 175)' />}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name='phoneNumber'
      />

      {errors.password && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium'>
          {errors.password.message || 'Field must be filled in'}
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 8,
            message: 'Minimum 8 characters',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            placeholder='Password'
            icon={
              <Ionicons
                name='lock-closed-outline'
                size={19}
                color='rgb(156 163 175)'
              />
            }
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name='password'
      />

      {errors.confirmPassword && (
        <Text className='self-end text-sm tracking-wider text-red-500 font-medium'>
          {errors.confirmPassword.message || 'Passwords Mismatch'}
        </Text>
      )}
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Field must be filled in',
          },
          minLength: {
            value: 8,
            message: 'Minimum 8 characters',
          },
          validate: (value) => value === getValues().password,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            placeholder='Confirm Password'
            icon={
              <Ionicons
                name='lock-closed-outline'
                size={19}
                color='rgb(156 163 175)'
              />
            }
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name='confirmPassword'
      />

      <View className='mt-3'>
        <Button isPending={isPending} onClick={handleSubmit(onSubmit)}>
          Create Account
        </Button>
      </View>
    </View>
  );
}

export default SignupInputsContainer;
