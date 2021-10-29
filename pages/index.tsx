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

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTools, setShowTools] = useState(false);
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
                  {showTools ? (
                    <div
                      className="text-3xl font-bold text-blue-900 ml-4 cursor-pointer"
                      onClick={() => {
                        setShowTools(false);
                      }}
                    >
                      collapse
                    </div>
                  ) : (
                    <PlusCircleIcon
                      className="ml-2 w-8 h-8 self-center hover:text-blue-500 cursor-pointer"
                      onClick={() => {
                        setShowTools(true);
                      }}
                    />
                  )}


                </div>
              </div>
              <div className="mx-auto px-4 sm:px-6 md:px-8 ">
                {/* Replace with your content */}
                <DashboardContent showTools={showTools} />

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
