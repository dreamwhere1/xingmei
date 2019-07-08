import { put, takeEvery } from 'redux-saga/effects'
import http from '@/untils/http'
import * as Home from './home/actionTypes'
import * as Search from './search/actionTypes'
import * as Detail from './detail/actionTypes'

function* asyncInitAll() {
  const res = yield http
    .get('/mobile/index.php?act=index')
    .then(res => res.datas)
  const icon = yield http
    .post(
      '/api/index.php?act=app_icon&op=menu',
      'req=%7B%22api_key%22%3A%221007%22%2C%22v%22%3A%221.0%22%2C%22o%22%3A%22wap%22%2C%22t%22%3A1562071578000%2C%22an%22%3A%22ixingmei%22%2C%22av%22%3A%22%22%2C%22ci%22%3A%22%22%2C%22lu%22%3A%22%22%2C%22lt%22%3A%22%22%2C%22args%22%3A%7B%7D%7D',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    .then(res => res.result)
  yield put({ type: Home.INIT_ALL_LIST, res })
  yield put({ type: Home.INIT_ICON_LIST, res: icon })
}

function* asyncInitSearch({ searchMsg: { currentPage, text } }) {
  yield put({ type: Search.INIT_SEARCH_LIST, res: [], load: 0, text })
  const res = yield http
    .get(
      `mobile/index.php?act=goods&op=goods_list&page=10&curpage=${currentPage}&keyword=${text}`
    )
    .then(res => res)
  yield put({
    type: Search.INIT_SEARCH_LIST,
    res: res.datas.goods_list,
    pageTotal: res.page_total,
    load: 1,
    text
  })
}

function* asyncInitGood({ id }) {
  const res = yield http
    .post(
      '/api/index.php?act=goods&op=goods_detail',
      `req=%7B%22ci%22%3A%22%22%2C%22v%22%3A%221.0%22%2C%22o%22%3A%22wap%22%2C%22lu%22%3A%22%22%2C%22lt%22%3A%22%22%2C%22an%22%3A%22ixingmei%22%2C%22av%22%3A%221.0.0%22%2C%22t%22%3A1562240427616%2C%22args%22%3A%7B%22goods_id":"${id}","auth%22%3A%22%22%7D%2C%22api_key%22%3A%223001%22%7D`
    )
    .then(res => res)
  yield put({ type: Detail.INIT_GOOD_MSG, res })
}

function* asyncGetFilm() {
  const res = yield http
    .get('http://m.maizuo.com/gateway', {
      params: {
        cityId: 440300,
        pageNum: 1,
        pageSize: 10,
        type: 1,
        k: 2792060
      },
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"1562247294751619278625"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
    .then(res => res)
  yield put({ type: 'set_film_list', list: res.data.films })
}

export default function* rootSaga() {
  yield takeEvery(Home.GET_ALL_LIST, asyncInitAll)
  yield takeEvery(Search.GET_SEARCH_LIST, asyncInitSearch)
  yield takeEvery(Detail.GET_GOOD_MSG, asyncInitGood)
  yield takeEvery('getFilmList', asyncGetFilm)
}
