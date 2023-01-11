import hzyRequest from '@/service'

export function getBanners() {
  return hzyRequest.get({
    url: '/banner'
  })
}

export function getRecommendList(limit: number) {
  return hzyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return hzyRequest.get({
    url: '/album/newest'
  })
}

export function getPlayListDetail(id: number) {
  return hzyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
