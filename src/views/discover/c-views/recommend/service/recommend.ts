import hzyRequest from '@/service'

export function getBanners() {
  return hzyRequest.get({
    url: '/banner'
  })
}

export function getRecommendList() {
  return hzyRequest.get({
    url: '/personalized'
  })
}

export function getNewAlbum() {
  return hzyRequest.get({
    url: '/album/newest'
  })
}
