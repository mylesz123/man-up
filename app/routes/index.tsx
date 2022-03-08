import {
  daysOfTheWeek,
  getDaysOfTheMonth,
  getDaysUntilNextEvent,
  getMonthlyDatesForRecurringDay,
} from '~/helpers/dateEvents';

const address = '1815 North Circle Drive, Colorado Springs CO';

const Hero = () => {
  return (
    <div className="min-h-screen md-down:min-h-3/4 px-4 grid grid-cols-2 md-down:grid-cols-1 overflow-hidden">
      <div
        className="bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: 'url("/svg/main-logo.svg")',
        }}
      />
      <blockquote className="font-[bebas] text-7xl sm:text-5xl h-fit self-end sm:m-auto">
        “Bringing things to life through solutions”
      </blockquote>
    </div>
  );
};

const PurposeSection = () => {
  return (
    <section className="px-4">
      <h2 className="text-9xl sm:text-7xl">what's our purpose?</h2>
      <div className="grid gap-10 text-4xl">
        <p>
          The principals we study and live by are no secret because we
          get them straight from the Bible. We execute the word of
          God, therefore the results are no secret either. We hear and
          we do, it’s that simple.
        </p>

        <strong>Come man up with us</strong>
      </div>
    </section>
  );
};

/**
 * based on there being a max of 5 saturdays in a month
 */
const saturdays = {
  first: {
    affix: '1st',
    key: 0,
  },
  second: {
    affix: '2nd',
    key: 1,
  },
  third: {
    affix: '3rd',
    key: 2,
  },
  fourth: {
    affix: '4th',
    key: 3,
  },
  fifth: {
    affix: '5th',
    key: 4,
  },
};

/**
 * We have a meeting every 2nd and 4th saturday
 * Therefore we should have a countdown beginning on
 * a qualifying date for a given month
 *
 * @todo make tests
 */
function getSaturdays(date: Date) {
  const thisMonth = getDaysOfTheMonth(
    date.getFullYear(),
    date.getMonth()
  );

  const monthTargetDays = getMonthlyDatesForRecurringDay(
    thisMonth.start,
    thisMonth.totalDays,
    daysOfTheWeek.saturday
  );

  return [
    monthTargetDays[saturdays.first.key],
    monthTargetDays[saturdays.third.key],
  ];
}

const DaysTillSection = () => {
  const daysUntilNextEvent = getDaysUntilNextEvent(
    getSaturdays,
    getSaturdays
  );

  function getCountdownText() {
    return daysUntilNextEvent === 0
      ? 'no days left. time to man up'
      : `${daysUntilNextEvent === 1 ? 'day' : 'days'} till man up`;
  }

  return (
    <section className="flex flex-wrap gap-10 mt-36 px-4">
      <div className="px-20 sm:px-10 border-8 border-green flex justify-center content-center">
        <span className="font-[bebas] text-[14rem]">
          {daysUntilNextEvent}
        </span>
      </div>
      <aside className="grid">
        <h2 className="text-green text-9xl sm:text-7xl mt-0">
          {getCountdownText()}
        </h2>

        <p className="text-4xl">
          Join us <br /> @{address}
        </p>
      </aside>
      <p className="text-4xl">
        As men it’s our responsibility to uplift each other, show
        love, and help pass the success around one man at another.
      </p>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 left-0 w-full">
        <div className="flex justify-end p-4 w-full">
          <a
            className="btn btn-primary"
            href="https://refreshingwordchurch.com/give"
          >
            Give to Refreshing Word Church
          </a>
        </div>
      </nav>
      <Hero />
      <main className="max-w-7xl m-auto">
        <article className="grid gap-5">
          <PurposeSection />
          <DaysTillSection />
        </article>
      </main>

      <footer className="bg-green pt-6">
        <div className="text-black grid gap-4 text-4xl max-w-7xl m-auto px-4">
          <div className="flex flex-wrap justify-between">
            <span className="font-[bebas] text-9xl sm:text-7xl text-white">
              man up
            </span>
            <div>
              <p>
                Join us <br />{' '}
                <a
                  href="https://goo.gl/maps/jRj1Ep99HFG6s48s6"
                  className="text-black"
                >
                  @{address}
                </a>
              </p>
              <p>
                We meet every {saturdays.first.affix} and{' '}
                {saturdays.third.affix} Saturday each month at 10AM
              </p>
            </div>
          </div>
          <p>
            A ministry group belonging to <br />
            <a
              href="https://refreshingwordchurch.com"
              className="text-black"
            >
              Refreshing Word Church (RWC)
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
