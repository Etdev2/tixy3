import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'


const currencies = ['MEX', 'USD', 'AUD', 'EUR', 'GBP']

export default function TopNav() {
  return (
    <header>
      <div className="bg-gray-900">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Currency selector */}
          <form>
            <div>
              <label htmlFor="desktop-currency" className="sr-only">
                Currency
              </label>
              <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                <select
                  id="desktop-currency"
                  name="currency"
                  className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-lg font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                >
                  {currencies.map((currency) => (
                    <option key={currency}>{currency}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                </div>
              </div>
            </div>
          </form>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-lg font-medium text-white hover:text-gray-100">
              Sign in
            </a>
            <a href="#" className="text-lg font-med text-white hover:text-gray-100">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
