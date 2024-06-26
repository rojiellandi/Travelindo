// import React from 'react'
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/assets/logo.svg";
import dropdown from "/assets/dropdown.png";
import cart from "/assets/cart.png";
import { Link } from "react-router-dom";

import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white shadow w-full">
      {({ open }) => (
        <>
          <div className="pb-2 px-11 ">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img src={logo} alt="Logo" />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <div className="col-span-8 flex gap-8 items-center pt-2">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `pb-2 px-3 relative ${
                          isActive ? "font-bold text-[#2D5FC2]" : ""
                        }`
                      }
                    >
                      Beranda
                      {location.pathname === "/" && (
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2D5FC2] rounded-lg"></div>
                      )}
                    </NavLink>
                    <NavLink
                      to="/jadwal"
                      className={({ isActive }) =>
                        `pb-2 px-3 relative ${
                          isActive ? "font-bold text-[#2D5FC2]" : ""
                        }`
                      }
                    >
                      Jadwal
                      {location.pathname === "/jadwal" && (
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2D5FC2] rounded-lg"></div>
                      )}
                    </NavLink>
                    <NavLink
                      to="/private-tour"
                      className={({ isActive }) =>
                        `pb-2 px-3 relative ${
                          isActive ? "font-bold text-[#2D5FC2]" : ""
                        }`
                      }
                    >
                      Private Tour
                      {location.pathname === "/private-tour" && (
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2D5FC2] rounded-lg"></div>
                      )}
                    </NavLink>
                    <NavLink
                      to="/hubungi-kami"
                      className={({ isActive }) =>
                        `pb-2 px-3 relative ${
                          isActive ? "font-bold text-[#2D5FC2]" : ""
                        }`
                      }
                    >
                      Hubungi Kami
                      {location.pathname === "/hubungi-kami" && (
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2D5FC2] rounded-lg"></div>
                      )}
                    </NavLink>
                    <NavLink
                      to="/tentang-kami"
                      className={({ isActive }) =>
                        `pb-2 px-3 relative ${
                          isActive ? "font-bold text-[#2D5FC2]" : ""
                        }`
                      }
                    >
                      Tentang Kami
                      {location.pathname === "/tentang-kami" && (
                        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#2D5FC2] rounded-lg"></div>
                      )}
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end mr-4 ml-12">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-300 placeholder:text-gray-400 focus:outline-none"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center ml-4">
                <Link to={`/cart`}>
                  {" "}
                  <img src={cart} alt="" width={"20px"} />
                </Link>
              </div>
              <div className="flex items-center lg:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm d ">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className="flex gap-3 items-center">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div>Amanda Smith</div>
                        <img src={dropdown} alt="" />
                      </div>
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 ">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Beranda
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Jadwal
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Private Tour
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Hubungi Kami
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Tentang Kami
              </DisclosureButton>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500   "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </DisclosureButton>
                <DisclosureButton
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
