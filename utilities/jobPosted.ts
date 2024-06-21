import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
} from 'date-fns';

export function jobPosted(postedDate: string) {
  const seconds = differenceInSeconds(new Date(), new Date(postedDate));
  if (seconds < 60)
    return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`;

  const minutes = differenceInMinutes(new Date(), new Date(postedDate));
  if (minutes < 60)
    return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;

  const hours = differenceInHours(new Date(), new Date(postedDate));
  if (hours < 24)
    return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;

  const days = differenceInDays(new Date(), new Date(postedDate));
  if (days < 7) return days === 1 ? `${days} day ago` : `${days} days ago`;

  const weeks = differenceInWeeks(new Date(), new Date(postedDate));
  if (weeks < 4)
    return weeks === 1 ? `${weeks} week ago` : `${weeks} weeks ago`;

  const months = differenceInMonths(new Date(), new Date(postedDate));
  if (months < 12)
    return months === 1 ? `${months} month ago` : `${months} months ago`;

  const years = differenceInYears(new Date(), new Date(postedDate));
  return years === 1 ? `${years} year ago` : `${years} years ago`;
}
