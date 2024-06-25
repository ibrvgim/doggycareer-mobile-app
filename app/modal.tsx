import { Pressable, ScrollView, Text } from 'react-native';
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import FilterCard from '@/components/modal/FilterCard';
import FilterTab from '@/components/modal/FilterTab';
import { useDispatch, useSelector } from 'react-redux';
import { FiltersType } from '@/types/types';
import {
  setJobType,
  setOfficeType,
  setPublicationDate,
  setSortBy,
} from '@/slices/filtersSlice';

function FiltersModal() {
  const route = useRouter();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: { filters: FiltersType }) => state?.filters
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => route.back()}>
          <Text className='font-semibold text-cyan-700 text-base tracking-wider'>
            Done
          </Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <ScrollView className='py-8 px-4 bg-white border-t-[1px] border-t-gray-300'>
      <FilterCard
        icon={
          <FontAwesome
            name='sort-amount-desc'
            size={16}
            color='rgb(14 116 144)'
          />
        }
        title='Sort By'
      >
        <>
          <FilterTab
            title='Most Recent'
            handleOnPress={() => dispatch(setSortBy('recent'))}
            isActive={filters?.sortBy === 'recent'}
          />
          <FilterTab
            title='Most Relevant'
            handleOnPress={() => dispatch(setSortBy('relevant'))}
            isActive={filters?.sortBy === 'relevant'}
          />
        </>
      </FilterCard>

      <FilterCard
        icon={
          <FontAwesome5 name='calendar-alt' size={18} color='rgb(14 116 144)' />
        }
        title='Publication Date'
      >
        <>
          <FilterTab
            title='Within 24 hours'
            handleOnPress={() => dispatch(setPublicationDate('24hours'))}
            isActive={filters?.publicationDate === '24hours'}
          />
          <FilterTab
            title='Within 7 days'
            handleOnPress={() => dispatch(setPublicationDate('7days'))}
            isActive={filters?.publicationDate === '7days'}
          />
          <FilterTab
            title='Within 14 days'
            handleOnPress={() => dispatch(setPublicationDate('24days'))}
            isActive={filters?.publicationDate === '24days'}
          />
        </>
      </FilterCard>

      <FilterCard
        icon={
          <FontAwesome6
            name='clock-rotate-left'
            size={18}
            color='rgb(14 116 144)'
          />
        }
        title='Job Type'
      >
        <>
          <FilterTab
            title='Full time'
            handleOnPress={() => dispatch(setJobType('fullTime'))}
            isActive={filters?.jobType === 'fullTime'}
          />
          <FilterTab
            title='Part time'
            handleOnPress={() => dispatch(setJobType('partTime'))}
            isActive={filters?.jobType === 'partTime'}
          />
        </>
      </FilterCard>

      <FilterCard
        icon={
          <FontAwesome6 name='building' size={19} color='rgb(14 116 144)' />
        }
        title='Office Type'
      >
        <>
          <FilterTab
            title='On Site'
            handleOnPress={() => dispatch(setOfficeType('onSite'))}
            isActive={filters?.officeType === 'onSite'}
          />
          <FilterTab
            title='Remote'
            handleOnPress={() => dispatch(setOfficeType('remote'))}
            isActive={filters?.officeType === 'remote'}
          />
          <FilterTab
            title='Hybrid'
            handleOnPress={() => dispatch(setOfficeType('hybrid'))}
            isActive={filters?.officeType === 'hybrid'}
          />
        </>
      </FilterCard>
    </ScrollView>
  );
}

export default FiltersModal;
