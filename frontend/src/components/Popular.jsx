import { CheckIcon } from "@heroicons/react/20/solid";
import WatchList from "./WatchList";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Popular() {
  return (
    <div class="grid grid-cols-4 gap-20 mt-5  ">
      <div>
        <div className="w-[300px]">
          <div className="rounded-xl bg-white-50  text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center  border border-gray ">
            <div className="mx-auto max-w-xs px-8 mb-4 ">
              <p className="mt-6 flex items-baseline justify-start gap-x-2">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  NIFTY 50
                </span>
              </p>
              <p
                className="mt-3 flex items justify-start text-1xl leading-5 text-gray-900"
                gap={2}
              >
                22,738
                <span className="text-green-500 ml-2"> 94.80 [0.42%]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[300px]">
          <div className="rounded-xl bg-white-50  text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center  border border-gray-">
            <div className="mx-auto max-w-xs px-8 mb-4">
              <p className="mt-6 flex items-baseline justify-start gap-x-2">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  NIFTY 50
                </span>
              </p>
              <p
                className="mt-3 flex items justify-start text-1xl leading-5 text-gray-900"
                gap={2}
              >
                22,738
                <span className="text-green-500 ml-2"> 94.80 [0.42%]</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[300px]">
          <div className="rounded-xl bg-white-50  text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center  border border-gray-">
            <div className="mx-auto max-w-xs px-8 mb-4">
              <p className="mt-6 flex items-baseline justify-start gap-x-2">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  NIFTY 50
                </span>
              </p>
              <p
                className="mt-3 flex items justify-start text-1xl leading-5 text-gray-900"
                gap={2}
              >
                22,738
                <span className="text-green-500 ml-2"> 94.80 [0.42%]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <WatchList/>
    </div>
    
  );
}