import { ScrollView } from 'react-native';
import SuggestedJobCard from '../jobs/SuggestedJobCard';

function AppliedJobs() {
  return (
    <ScrollView className='px-3 py-6'>
      <SuggestedJobCard />
      <SuggestedJobCard />
    </ScrollView>
  );
}
export default AppliedJobs;
