import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="isolate bg-white">
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center gap-4">
              <img
                className="h-8"
                src="https://adya.ai/assets/Logo-6c607c84.png"
                alt=""
              />
              <span className="font-bold text-lg text-gray-600">
                Adya Stocks
              </span>
            </Link>
          </div>

          <div className="flex flex-1 justify-end">
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <div className="hero-section">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Invest with Confidence
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Take control of your financial future with our intuitive stock
                  app. Gain access to powerful data and analysis tools to make
                  informed investment decisions.
                </p>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/TopStocks"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
