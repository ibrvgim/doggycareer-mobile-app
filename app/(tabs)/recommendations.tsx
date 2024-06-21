import JobCard from '@/components/jobs/JobCard';
import { ScrollView, StatusBar, View } from 'react-native';

function RecommendationsScreen() {
  return (
    <View>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView>
        {/* <JobCard />
        <JobCard />
        <JobCard /> */}
      </ScrollView>
    </View>
  );
}

export default RecommendationsScreen;
