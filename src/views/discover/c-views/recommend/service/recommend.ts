import hzyRequest from '@/service'

export function getBanners() {
  return hzyRequest.get({
    url: '/banner'
  })
}
