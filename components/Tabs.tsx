import { useState } from "react";
import { Tab } from "@headlessui/react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import HighGraph from "./HighGraph";
import GaugeComp from "./Gauge";
import Card from "./Card";
import { PlusCircleIcon, PlusIcon, XIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({onAddItem}) => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <div className="w-full px-2  py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-white rounded-xl">
          <Tab
            key={"instant_data"}
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-gray-700/[0.12] hover:text-black"
              )
            }
          >
            Instant Data
          </Tab>
          <Tab
            key={"historical_data"}
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-gray-700/[0.12] hover:text-black"
              )
            }
          >
            Historical Data
          </Tab>
          <Tab
            key={"graphical_data"}
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-gray-700/[0.12] hover:text-black"
              )
            }
          >
            Graphical Data
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel
            key={"instant_data"}
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60"
            )}
          >
            <div className="flex">
              <Card name="Revenue Today" amount={120} />
              <PlusCircleIcon className="h-6 w-6 self-end cursor-pointer"  onClick={() => {onAddItem()}}/>
            </div>
          </Tab.Panel>
          <Tab.Panel
            key={"historical_data"}
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60"
            )}
          >
            <div className="flex">
              <Card name="Revenue (7 days)" amount={1020} />
              <PlusCircleIcon className="h-6 w-6 self-end cursor-pointer" />
            </div>
          </Tab.Panel>
          <Tab.Panel
            key={"graphical_data"}
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60"
            )}
          >
            <div className="grid grid-cols-2">
              <div className="">
                <div className="text-xl  font-bold">Graph</div>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <HighGraph type={2} />
                    <PlusCircleIcon className="h-6 w-6 self-end cursor-pointer absolute right-2 bottom-3 hover:text-blue-500" onClick={() => {onAddItem("revenue7Graph")}} />

                  </div>
                  <div className="relative">
                    <HighGraph type={1} />
                    <PlusCircleIcon className="h-6 w-6 self-end cursor-pointer absolute right-2 bottom-3 hover:text-blue-500" />

                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-xl  font-bold">Pie chart</div>
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="text-base text-center font-normal mb-2">
                      Top 5 Sellers
                    </div>
                    <PieChart type={2} />
                    <PlusCircleIcon className="h-6 w-6 self-end cursor-pointer absolute right-2 bottom-3 hover:text-blue-500" />

                  </div>
                  <div className="relative">
                    <div className="text-base text-center font-normal mb-2">
                      Top 5 ads
                    </div>
                    <PieChart type={1} />
                    <PlusCircleIcon className="h-6 w-6 self-end cursor-pointer absolute right-2 bottom-3 hover:text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
