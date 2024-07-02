import { Text, View } from 'react-native';
import AuthInput from './AuthInput';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { LoginType } from '@/types/types';
import { useLoginUser } from '@/hooks/auth/useAuthUser';
import Button from '../general/Button';

function LoginInputsContainer() {
  const { isPending, loginUser } = useLoginUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'doggycareer@gmail.com',
      password: 'doggycareer',
    },
  });

  function onSubmit(data: LoginType) {
    const { email, password } = data;
    loginUser({ email, password });
  }

  return (
    <View className='mt-12 mx-4 px-4 pt-10 pb-7 bg-white rounded-xl shadow-lg border-2 border-cyan-700'>
      <Text className='mb-6 uppercase font-bold text-cyan-700 text-lg tracking-widest self-center'>
        Sign In - Welcome Back!
      </Text>

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

      <View className='mt-3'>
        <Button isPending={isPending} onClick={handleSubmit(onSubmit)}>
          Continue
        </Button>
      </View>
    </View>
  );
}

export default LoginInputsContainer;
