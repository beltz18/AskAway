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

export const Language = {
  'spanish': 'es',
  'english': 'en',
}

export const videoConst = {
  width: 720,
  height: 576,
  facingMode: "user",
  encoder: 'x264',
}

export const stepCheckedCss   : string = 'flex w-full items-center text-blue-600 after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800 cursor-pointer'
export const stepUncheckedCss : string = 'flex w-full items-center text-gray-500 after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 cursor-pointer'

export const cssCurrentPage   : string = 'flex items-center justify-center px-3 h-8 text-primary bg-blue-50 border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
export const cssNormalPage    : string = 'flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'