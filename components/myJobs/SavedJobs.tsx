import { ScrollView } from 'react-native';
import SuggestedJobCard from '../jobs/SuggestedJobCard';

function SavedJobs() {
  return (
    <ScrollView className='px-3 py-6'>
      <SuggestedJobCard />
      <SuggestedJobCard />
      <SuggestedJobCard />
      <SuggestedJobCard />
      <SuggestedJobCard />
    </ScrollView>
  );
}

export default SavedJobs;
