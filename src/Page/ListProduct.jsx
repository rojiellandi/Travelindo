import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Rating } from "primereact/rating";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const sortOptions = [
  { name: "Best Rating", href: "#", current: true },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
// const subCategories = [
//   { name: "Totes", href: "#" },
//   { name: "Backpacks", href: "#" },
//   { name: "Travel Bags", href: "#" },
//   { name: "Hip Bags", href: "#" },
//   { name: "Laptop Sleeves", href: "#" },
// ];
const filters = [
  {
    id: "private-tour",
    name: "Private Tour",
    options: [
      { value: "Padang", label: "Padang", checked: false },
      { value: "Papua", label: "Papua", checked: false },
      { value: "Maldives", label: "Maldives", checked: false },
      { value: "Qatar", label: "Qatar", checked: false },
      { value: "Rusia", label: "Russia", checked: false },
      { value: "Raja AMpat", label: "Raja Ampat", checked: false },
    ],
  },
  {
    id: "domestik",
    name: "Domestik",
    options: [
      { value: "Bali", label: "Bali", checked: false },
      { value: "Pulau Komodo", label: "Komodo Island", checked: false },
      { value: "Lombok", label: "Lombok", checked: false },
      { value: "Jogja", label: "Yogyakarta", checked: false },
    ],
  },
  {
    id: "international",
    name: "International",
    options: [
      { value: "Budapest", label: "Budapest", checked: false },
      { value: "Hongkong", label: "Hong Kong", checked: false },
      { value: "England", label: "England", checked: false },
      { value: "Swedia", label: "Sweden", checked: false },
    ],
  },
  {
    id: "asia",
    name: "Asia",
    options: [
      { value: "JP", label: "Japan", checked: false },
      { value: "CN", label: "China", checked: false },
      { value: "IN", label: "India", checked: false },
      { value: "KR", label: "South Korea", checked: false },
      { value: "ID", label: "Indonesia", checked: false },
      { value: "TH", label: "Thailand", checked: true },
    ],
  },
  {
    id: "Eropa",
    name: "Eropa",
    options: [
      { value: "UK", label: "United Kingdom", checked: false },
      { value: "DE", label: "Germany", checked: false },
      { value: "FR", label: "France", checked: false },
      { value: "IT", label: "Italy", checked: false },
      { value: "ES", label: "Spain", checked: false },
      { value: "SE", label: "Sweden", checked: true },
    ],
  },
  {
    id: "amerika",
    name: "Amerika",
    options: [
      { value: "New York", label: "New York", checked: false },
      { value: "California", label: "California", checked: false },
      { value: "Texas", label: "Texas", checked: false },
      { value: "Florida", label: "Florida", checked: false },
    ],
  },
];

const ListProduct = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline1.png",
      price: 1600000,
      rating: 4,
    },
    {
      id: 2,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline2.png",
      price: 32000000,
      rating: 4,
    },
    {
      id: 3,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night",
      image: "headline3.png",
      price: 6890000,
      rating: 4,
    },
    {
      id: 4,
      description: "Vinca Vovages Labuhan Bajo Private Trip 4 Days 4 Night",
      image: "headline3.png",
      price: 1630000,
      rating: 4,
    },
    {
      id: 5,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night with Spa",
      image: "headline2.png",
      price: 32300000,
      rating: 4,
    },
    {
      id: 6,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 4 Days 3 Night Luxury Experience",
      image: "headline1.png",
      price: 6920000,
      rating: 4,
    },
    {
      id: 7,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 5 Days 3 Night Island Hopping",
      image: "headline1.png",
      price: 1660000,
      rating: 4,
    },
    {
      id: 8,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 4 Days 2 Night Adventure Package",
      image: "headline2.png",
      price: 32330000,
      rating: 4,
    },
    {
      id: 9,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 6 Days 4 Night Family Getaway",
      image: "headline3.png",
      price: 6950000,
      rating: 4,
    },
    {
      id: 10,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 3 Days 5 Night Cultural Immersion",
      image: "headline3.png",
      price: 1690000,
      rating: 4,
    },
    {
      id: 11,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 5 Days 6 Night Eco-Tourism Adventure",
      image: "headline2.png",
      price: 32360000,
      rating: 4,
    },
    {
      id: 12,
      description:
        "Vinca Vovages Labuhan Bajo Private Trip 7 Days 4 Night Wellness Retreat",
      image: "headline1.png",
      price: 6980000,
      rating: 4,
    },
  ]);

  const [page, setPage] = useState(1);
  const productsPerPage = 6;
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const getProductSlice = () => {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };

  function formatRupiah(angka) {
    return `Rp ${angka.toLocaleString("id-ID")}`;
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile menu */}
        <Transition show={mobileMenuOpen}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="#"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6">
                    <a href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div className="mb-20">
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    {/* <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className="mx-10 px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900"></h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
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
                  <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          {({ focus }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                focus ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>

              {/* <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-10 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block col-span-1">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900 text-xl">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-6 lg:grid-cols-3">
                {getProductSlice().map((product) => (
                  <div className="shadow-container rounded-md ">
                    <div>
                      <Link to="/jadwal/1">
                        <img
                          src={`/assets/${product.image}`}
                          alt=""
                          className="object-cover w-full h-full hover:opacity-80"
                        />
                      </Link>
                    </div>
                    <div className="mt-4 ml-2 ">
                      <div className="mb-2">
                        <h3 className="text-sm font-semibold">
                          {product.description}
                        </h3>
                      </div>
                      <div className="card flex justify-content-center mb-2">
                        <Rating
                          value={product.rating}
                          readOnly
                          cancel={false}
                        />
                      </div>

                      <div className="flex text-sm font-semibold mb-2 pb-2 justify-between items-center">
                        <div>
                          <div className="text-xs mb-2 text-[#9095A0]">
                            Mulai Dari
                          </div>
                          {formatRupiah(product.price)}{" "}
                          <span className="font-normal text-[#9095A0]">
                            /Pax
                          </span>
                        </div>
                        <div className="mr-4">
                          <Link to={`/jadwal/${product.id}`}>
                            {" "}
                            {/* Ubah sesuai dengan id atau path yang sesuai */}
                            <button className="bg-[#4773CA] text-white px-7 py-2 rounded-md hover:opacity-85 lg:px-8 lg:py-2">
                              Pesan
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <div className="flex justify-center lg:ml-96">
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
