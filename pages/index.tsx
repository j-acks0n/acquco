import type { NextPage } from "next";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import { PlusCircleIcon } from "@heroicons/react/solid";
import Tabs from "../components/Tabs";
import { v4 as uuidv4 } from "uuid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [layouts, setLayouts] = useState({
    lg: [
      { i: "revenue7Graph_a", x: 0, y: 0, w: 4, h: 10 },
      { i: "revenueToday_b", x: 1, y: 0, w: 2, h: 2 },
      { i: "revenue7display_c", x: 4, y: 0, w: 2, h: 2 },
      { i: "profit7Graph_d", x: 0, y: 4, w: 4, h: 10 },
      { i: "top5sellers_c", x: 4, y: 0, w: 4, h: 10 },
      { i: "top5ads_c", x: 4, y: 0, w: 4, h: 10 },
    ],

  });
  const onAddItem = (type) => {
    /*eslint no-console: 0*/
    let height = 4;
    let width = 4;
    if (type === "revenue7Graph") {
      height = 10;
      width = 4;
    } else if (type === "revenueToday") {
      height = 3;
      width = 2;
    } else if (type === "revenue7display") {
      height = 3;
      width = 2;
    } else if (type === "profit7Graph") {
      height = 10;
      width = 4;
    } else if (type === "top5sellers") {
      height = 10;
      width = 4;
    } else if (type === "top5ads") {
      height = 10;
      width = 4;
    }

    setLayouts({
      // Add a new item. It must have a unique key!
      lg: layouts.lg.concat({
        i: `${type}_${uuidv4()}`,
        x: (layouts.lg.length * 2) % 12,
        y: Infinity, // puts it at the bottom
        w: width,
        h: height,
      }),
    });
  };
  return (
    <>
      <div className="">
        <Sidebar />
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 text-white text-3xl">
              Acquco
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-100 hover:bg-indigo-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                <Tabs onAddItem={onAddItem} />
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <main>
            <div className="py-6 bg-[#F1F4F7] m-4 h-2/3">
              <div className="mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Monitoring & Performance
                  </h1>
                </div>
              </div>
              <div className="mx-auto px-4 sm:px-6 md:px-8 ">
                {/* Replace with your content */}
                <DashboardContent layouts={layouts} setLayouts={setLayouts} />

                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
