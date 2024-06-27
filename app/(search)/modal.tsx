import KeyboardDismiss from '@/components/general/KeyboardDismiss';
import SearchJobRegion from '@/components/jobs/SearchJobRegion';
import SearchJobTitle from '@/components/jobs/SearchJobTitle';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

function SearchModalScreen() {
  const { search } = useLocalSearchParams();

  return (
    <View className='flex-1 bg-blue-50 px-4 py-8'>
      <KeyboardDismiss>
        {search === 'title' && <SearchJobTitle />}
        {search === 'region' && <SearchJobRegion />}
      </KeyboardDismiss>
    </View>
  );
}

export default SearchModalScreen;
