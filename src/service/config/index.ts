// 1.区分开发环境和生产环境
// export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000

// 依赖
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.com:9002'
// } else {
//   BASE_URL = 'http://codercba.com:9002'
// }
// export { BASE_URL }

// console.log(process.env.REACT_APP_BASE_URL)

export const BASE_URL = process.env.REACT_APP_BASE_URL
