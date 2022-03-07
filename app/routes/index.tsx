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

const DaysTillSection = () => {
  return (
    <section className="flex flex-wrap gap-10 mt-36 px-4">
      <div className="px-20 sm:px-10 border-8 border-green flex justify-center content-center">
        <span className="font-[bebas] text-[14rem]">14</span>
      </div>
      <aside className="grid">
        <h2 className="text-green text-9xl sm:text-7xl mt-0">
          days till man up
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
export default function Index() {
  return (
    <>
      <nav className="sticky top-0 left-0 w-full">
        <div className="flex justify-end p-4 w-full">
          <a className="btn btn-primary w-36" href="#top">
            Give
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
                Join us <br /> @{address}
              </p>
              <p>We meet every 2nd and 4th Saturday each month</p>
            </div>
          </div>
          <p>
            In partnership with <br />
            Refreshing Word Church
          </p>
        </div>
      </footer>
    </>
  );
}
