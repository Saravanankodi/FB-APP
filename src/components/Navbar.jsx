import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/Logo.png'
// import icon from '../../assets/logo1.png'
const navigation = [
  // { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '#about', current: false },
  { name: 'How It Works', href: '#work', current: false },
  { name: 'Contact Us', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="text-black bg-white border-b-nav border-navbar">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center gap-2.5 sm:gap-5">
              <h2 className="heading text-32 text-primary sm:text-42">Finding Blood</h2>
            </div>
            <div className="hidden sm:block">
              <div className="h-full flex gap-10 items-center justify-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-black' : 'text-black hover:text-primary',
                      'tittle text-2xl font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <a href="" className="btn-secondary">Donate Now</a>
                <a href="https://www.freeprivacypolicy.com/live/4941bf09-f4ef-42c1-8adf-4b72df7a5d0f" target='_blank' className="btn-primary text-white">Learn More</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-black' : ' hover:text-primary',
                'tittle block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
