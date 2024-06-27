import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Modal, Text, Pressable, View } from 'react-native';

function ModalWindow({
  modalVisible,
  toggleModalWindow,
}: {
  modalVisible: boolean;
  toggleModalWindow: () => void;
}) {
  const route = useRouter();

  function handleClose() {
    toggleModalWindow();
    route.replace('(tabs)/jobs');
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <Modal animationType='fade' transparent={true} visible={modalVisible}>
        <View className='flex-1 justify-center items-center bg-blue-50'>
          <View className='bg-white border-[1px] border-gray-300 rounded-xl py-8 px-6 mx-8 shadow'>
            <View className='self-center mb-4'>
              <AntDesign name='checkcircleo' size={60} color='#0e7490' />
            </View>

            <Text className='text-center font-semibold text-cyan-700 text-3xl mb-4'>
              Congratulations!
            </Text>
            <Text className='text-center text-gray-500 text-[15px] leading-6 mb-6'>
              We have received your application and are currently reviewing your
              qualifications. Please ensure you regularly check the email
              address you provided in your application, as we will be contacting
              you with updates regarding the next steps in the hiring process.
            </Text>

            <Pressable
              className='bg-cyan-700 py-2 rounded-full'
              onPress={handleClose}
            >
              <Text className='tracking-wider text-center text-white font-semibold'>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalWindow;
