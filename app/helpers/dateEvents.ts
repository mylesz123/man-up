export const daysOfTheWeek = {
  monday: 2,
  tuesday: 3,
  wednesday: 4,
  thursday: 5,
  friday: 6,
  saturday: 7,
  sunday: 8,
};

/**
 * I want to grab the dates of a day of my choosing
 *
 * @example monday getMonthlyDatesForRecurringDay(7, 31, 2)
 */
export function getMonthlyDatesForRecurringDay(
  startDate: number,
  totalDays: number,
  dayOfTheWeek = daysOfTheWeek.monday
) {
  const dates = [];
  const firstDayOfTheMonth = dayOfTheWeek - startDate;
  for (let i = firstDayOfTheMonth; i <= totalDays; i += 7) {
    if (i > 0) {
      dates.push(i);
    }
  }
  return dates;
}

/**
 * remember months are 0 indexed when using data api
 * @example getDaysOfTheMonth(2022, 0) - january 2022
 * @example getDaysOfTheMonth(2022, 11) - december 2022
 */
export function getDaysOfTheMonth(year: number, month: number = 0) {
  const start = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  return {
    start,
    totalDays,
  };
}

export function getDaysUntilNextEvent(
  getCurrentMonthEventDates: (d: Date) => number[],
  getNextMonthEventDates: (d: Date) => number[],
  date: Date | string = new Date()
) {
  const today = new Date(date);
  const followingMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1
  );

  const currentMonthEvents = getCurrentMonthEventDates(today);
  const nextMonthEvents = getNextMonthEventDates(followingMonth);

  const upcomingEventDate = currentMonthEvents.find(
    (day) => day >= today.getDate()
  );

  const daysLeftInCurrentMonth =
    getDaysOfTheMonth(today.getFullYear(), today.getMonth())
      .totalDays - today.getDate();

  const daysUntilNextEvent = upcomingEventDate
    ? upcomingEventDate - today.getDate()
    : daysLeftInCurrentMonth + nextMonthEvents[0];

  return daysUntilNextEvent;
}
