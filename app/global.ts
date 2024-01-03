export const links = {
  dashboard: {
    main: '/dashboard',
  },
  home: {
    main: '/home',
  },
  interview: {
    main: '/interviews',
  },
  login: {
    main: '/login',
  },
  register: {
    main: '/create-account',
  }
}

export const options = [
  '',
  'Date',
  'Job Title',
  'Manager',
  'Duration',
  'Action',
]

export const Cookies = [
  'token',
  'admin',
  'email',
]

export const stepCheckedCss   : string = 'flex w-full items-center text-blue-600 after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800 cursor-pointer'
export const stepUncheckedCss : string = 'flex w-full items-center text-gray-500 after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 cursor-pointer'