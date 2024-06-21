import { Pressable, Text } from 'react-native';

function MyJobsTab({
  children,
  myJobs,
  toggleMyJobs,
  tag,
}: {
  children: React.ReactNode;
  myJobs: string;
  toggleMyJobs: () => void;
  tag: string;
}) {
  return (
    <Pressable
      className={`flex-1 mx-1 items-center -50 py-1 rounded-full border-[1px] border-gray-400 ${
        myJobs === tag ? 'bg-cyan-100 border-cyan-400' : ''
      }`}
      onPress={toggleMyJobs}
    >
      <Text
        className={`tracking-wide font-semibold uppercase text-xs text-gray-500 ${
          myJobs === tag ? 'text-cyan-700' : ''
        }`}
      >
        {children}
      </Text>
    </Pressable>
  );
}

export default MyJobsTab;
