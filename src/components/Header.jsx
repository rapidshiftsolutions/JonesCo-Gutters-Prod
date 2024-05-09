import Image from 'next/image'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'About Us', href: '/about' },

  { name: 'Services', href: '/services' },
  { name: 'Service Locations', href: '/servicelocations' },
  { name: 'Call', href: 'tel:4239007901' },
  { name: 'Email', href: 'mailto:hey@jonescogutters.com' },

]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">JonesCo Seamless Gutter Systems</span>
            <Image
              className="h-10 w-auto"
              width={500}
              height={500}
              quality={10}
              src="/JC/JonesCo.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-JonesCo-Blue-950"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-lg tracking-wide font-black uppercase leading-6  text-JonesCo-Blue-950 ">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://clienthub.getjobber.com/booking/cfb34696-fc96-46da-87a4-b54410c83f3b" className="text-lg leading-6 text-nero-900  tracking-wide tracking-tighter font-black uppercase">
            Free Estimate <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-JonesCo-Blue-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-JonesCo-Blue-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-auto"
                src='/JC/JonesCo.webp'
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-JonesCo-Green-900">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="https://clienthub.getjobber.com/booking/cfb34696-fc96-46da-87a4-b54410c83f3b"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-JonesCo-Blue-900 hover:bg-JonesCo-Blue-50"
                >
                  Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
