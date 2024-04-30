import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Vodafane Idea",
    price: 220450,
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Vodafane Idea",
    price: 220450,
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Vodafane Idea",
    price: 220450,
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Vodafane Idea",
    price: 220450,
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Vodafane Idea",
    price: 220450,
    href: "#",
    icon: ChartPieIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function WatchList() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center text-center rounded-xl justify-center  h-[100px] w-[400px] text-sm font-semibold leading-6 text-gray-900 border ">
        <span>My Watchlist</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-10">
              {solutions.map((item) => (
                <div class="grid grid-cols-3 gap-4 mb-4 border-b-2">
                  <div class="col-span-2 ...">
                  <div
                  key={item.name}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >

                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                     
                    </a>
                  </div>
                </div>
                  </div>
                  <div class="...">
                  <p className="mt-1 text-gray-600">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}