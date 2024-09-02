import AnimateSpin from "@/components/AnimateSpin";
import ReviewCard from "@/components/ReviewCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-auto">
      <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                Invest at the perfect time
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                By leveraging insights from our network of industry insiders,
                you’ll know exactly when to buy to maximize profit, and exactly
                when to sell to avoid painful losses.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <span>App Store</span>
                <span>Watch the video</span>
              </div>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6"></div>
            <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
              <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
                As featured in
              </p>
              <ul
                role="list"
                className="mx-auto mt-8 flex max-x-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
              >
                <li className="flex">이미지</li>
                <li className="flex">이미지</li>
                <li className="flex">이미지</li>
                <li className="flex">이미지</li>
                <li className="flex">이미지</li>
                <li className="flex">이미지</li>
                <li className="flex">이미지</li>
                <li className="flex">이미지</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section
        id="secondary-features"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              Now is the time to build your portfolio.
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              With typical market returns, you have to start young to secure
              your future. With Pocket, it’s never too late to build your nest
              egg.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            <li className="rounded-2xl border border-gray p-8">
              <p>Svg 이미지</p>
              <h3 className="mt-6 font-semibold text-gray-900">
                Invest any amonut
              </h3>
              <p className="mt-2 text-gray-700">
                Whether it&apos;s $1 or $1,000,000 we can put your money to work
                for you
              </p>
            </li>
            <li className="rounded-2xl border border-gray p-8">
              <p>Svg 이미지</p>
              <h3 className="mt-6 font-semibold text-gray-900">
                Invest any amonut
              </h3>
              <p className="mt-2 text-gray-700">
                Whether it&aposs $1 or $1,000,000 we can put your money to work
                for you
              </p>
            </li>
            <li className="rounded-2xl border border-gray p-8">
              <p>Svg 이미지</p>
              <h3 className="mt-6 font-semibold text-gray-900">
                Invest any amonut
              </h3>
              <p className="mt-2 text-gray-700">
                Whether it&aposs $1 or $1,000,000 we can put your money to work
                for you
              </p>
            </li>
            <li className="rounded-2xl border border-gray p-8">
              <p>Svg 이미지</p>
              <h3 className="mt-6 font-semibold text-gray-900">
                Invest any amonut
              </h3>
              <p className="mt-2 text-gray-700">
                Whether it&aposs $1 or $1,000,000 we can put your money to work
                for you
              </p>
            </li>
            <li className="rounded-2xl border border-gray p-8">
              <p>Svg 이미지</p>
              <h3 className="mt-6 font-semibold text-gray-900">
                Invest any amonut
              </h3>
              <p className="mt-2 text-gray-700">
                Whether it&aposs $1 or $1,000,000 we can put your money to work
                for you
              </p>
            </li>
            <li className="rounded-2xl border border-gray p-8">
              <p>Svg 이미지</p>
              <h3 className="mt-6 font-semibold text-gray-900">
                Invest any amonut
              </h3>
              <p className="mt-2 text-gray-700">
                Whether it&aposs $1 or $1,000,000 we can put your money to work
                for you
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section id="reviews" className="pb-16 pt-20 sm:pb-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center">
            Everyone is changing their life with Pocket.
          </h2>
          <p className="mt-2 text-lg text-gray-600 sm:text-center">
            Thousands of people have doubled their net-worth in the last 30
            days.
          </p>
          <div className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            <div className="animate-marquee space-y-8 py-4">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </div>
      </section>
      {/* <AnimateSpin /> */}
    </main>
  );
}
