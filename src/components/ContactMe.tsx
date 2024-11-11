
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className='isolate bg-custom-green px-6 py-24 sm:py-32 lg:px-8'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
      ></div>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-balance text-4xl font-semibold tracking-tight text-custom-text sm:text-5xl'>
          Get in Touch
        </h2>
        <p className='mt-2 text-lg/8 text-custom-text'>
          I understand that feedback is a crucial part of growth.
        </p>
      </div>
      <form
        action='#'
        method='POST'
        className='mx-auto mt-16 max-w-xl sm:mt-20'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm/6 font-semibold text-custom-text'
            >
              First name
            </label>
            <div className='mt-2.5'>
              <input
                id='first-name'
                name='first-name'
                type='text'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='last-name'
              className='block text-sm/6 font-semibold text-custom-text'
            >
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                id='last-name'
                name='last-name'
                type='text'
                autoComplete='family-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-custom-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='company'
              className='block text-sm/6 font-semibold text-custom-text'
            >
              Company
            </label>
            <div className='mt-2.5'>
              <input
                id='company'
                name='company'
                type='text'
                autoComplete='organization'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-custom-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='email'
              className='block text-sm/6 font-semibold text-custom-text'
            >
              Email
            </label>
            <div className='mt-2.5'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-custom-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='phone-number'
              className='block text-sm/6 font-semibold text-custom-text'
            >
              Phone number
            </label>
            <div className='relative mt-2.5'>
              <div className='absolute inset-y-0 left-0 flex items-center'>
                <label htmlFor='country' className='sr-only'>
                  Country
                </label>
                <select
                  id='country'
                  name='country'
                  className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden='true'
                  className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
                />
              </div>
              <input
                id='phone-number'
                name='phone-number'
                type='tel'
                autoComplete='tel'
                className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block text-sm/6 font-semibold text-custom-text'
            >
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                id='message'
                name='message'
                rows={4}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-custom-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6'
                defaultValue={''}
              />
            </div>
          </div>
          <Field className='flex gap-x-4 sm:col-span-2'>
            <div className='flex h-6 items-center'>
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className='group flex w-8 flex-none cursor-pointer rounded-full bg-custom-light-soft-green p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-custom-light-soft-green'
              >
                <span className='sr-only'>Agree to policies</span>
                <span
                  aria-hidden='true'
                  className='h-4 w-4 transform rounded-full bg-green-700 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5'
                />
              </Switch>
            </div>
            <Label className='text-sm/6 text-custom-text'>
              By selecting this, you agree to our{' '}
              <a href='#' className='font-semibold text-green-700'>
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-custom-light-soft-green px-3.5 py-2.5 text-center text-sm font-semibold text-custom-green shadow-sm hover:bg-green-700 hover:text-custom-light-soft-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-light-soft-green'
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
