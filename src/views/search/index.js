/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '@/store/search/actionCreates'
import BackToTop from '@/components/backToTop'

import './search.less'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curBar: 0,
      curSortBar: 0,
      show: false,
      curClass: 0
    }
  }
  handleSearch = () => {
    let { getSearchList, currentPage, load, pageTotal, text } = this.props
    let searchVal = this.refs.searchVal.value.trim()
    if (!searchVal) return
    if (!load) return
    if (currentPage > pageTotal) return
    if (text !== searchVal) {
      getSearchList({
        currentPage: 1,
        text: searchVal
      })
    } else {
      getSearchList({
        currentPage,
        text: searchVal
      })
    }
  }
  render() {
    let { searchList, emptyState, text } = this.props
    return (
      <>
        <header id="header" className="fixed">
          <div className="header-wrap">
            <div className="header-l">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="javascript:history.go(-1)" onClick={emptyState}>
                <i className="back" />
              </a>
            </div>
            <div className="header-inp">
              <i className="icon" />
              <input
                type="text"
                className="search-input"
                id="keyword"
                maxLength="50"
                autoComplete="on"
                ref="searchVal"
                onInput={this.cancelInput}
              />
              <span
                className="input-del"
                ref="cancelInput"
                onClick={this.emptyInput}
              />
            </div>
            <div className="header-r">
              <a
                id="header-nav"
                href="javascript:void(0);"
                className="search-btn"
                onClick={this.handleSearch}
              >
                搜索
              </a>
            </div>
          </div>
        </header>
        <div className="goods-search-list-nav">
          <ul id="nav_ul">
            <li>
              <a
                href="javascript:void(0);"
                className={this.state.curBar ? '' : 'current'}
                id="sort_default"
                onClick={() =>
                  this.setState({ show: !this.state.show, curBar: 0 })
                }
              >
                综合排序
                <i />
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className={this.state.curBar ? 'current' : ''}
                onClick={() => this.setState({ show: 0, curBar: 1 })}
              >
                销量优先
              </a>
            </li>
          </ul>
          <div className="browse-mode">
            <a
              href="javascript:void(0);"
              id="show_style"
              onClick={() => this.setState({ curClass: !this.state.curClass })}
            >
              <span
                className={this.state.curClass ? 'browse-grid' : 'browse-list'}
              />
            </a>
          </div>
        </div>
        <div
          id="sort_inner"
          className="goods-sort-inner"
          style={{ display: this.state.show ? 'unset' : 'none' }}
        >
          <span>
            <a
              href="javascript:void(0);"
              className={this.state.curSortBar === 0 ? 'cur' : ''}
              onClick={this.changeSortBar.bind(null, 0)}
            >
              综合排序
              <i />
            </a>
          </span>

          <span>
            <a
              href="javascript:void(0);"
              className={this.state.curSortBar === 1 ? 'cur' : ''}
              onClick={this.changeSortBar.bind(null, 1)}
            >
              价格从高到低
              <i />
            </a>
          </span>
          <span>
            <a
              href="javascript:void(0);"
              className={this.state.curSortBar === 2 ? 'cur' : ''}
              onClick={this.changeSortBar.bind(null, 2)}
            >
              价格从低到高
              <i />
            </a>
          </span>

          <span>
            <a
              href="javascript:void(0);"
              className={this.state.curSortBar === 3 ? 'cur' : ''}
              onClick={this.changeSortBar.bind(null, 3)}
            >
              人气排序
              <i />
            </a>
          </span>
        </div>
        <div
          id="product_list"
          className={this.state.curClass ? 'grid' : 'list'}
        >
          <ul className="goods-secrch-list">
            {searchList.map(item => (
              <li className="goods-item" key={item.goods_id}>
                <span className="goods-pic">
                  <a href={`#/detail/${item.goods_id}`}>
                    <img src={item.goods_image_url} alt="" />
                  </a>
                </span>
                <dl className="goods-info">
                  <dt className="goods-name">
                    <a href={`#/detail/${item.goods_id}`}>
                      <h4>{item.goods_name}</h4>
                      <h6>{item.goods_jingle}</h6>
                    </a>
                  </dt>
                  <dd className="goods-sale">
                    <a href={`#/detail/${item.goods_id}`}>
                      <span className="goods-price">
                        ￥<em>{item.goods_price}</em>
                      </span>
                    </a>
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
        <div className="nctouch-main-layout">
          <div className="nctouch-norecord eval">
            <div className="norecord-ico">
              <i />
            </div>
            <dl>
              <dt>
                {text
                  ? searchList.length
                    ? ''
                    : '没有更多数据了'
                  : '搜索你需要的关键词'}
              </dt>
            </dl>
          </div>
        </div>
        <BackToTop loadMore={this.handleSearch} />
      </>
    )
  }

  emptyInput = () => {
    this.refs.searchVal.value = ''
    this.refs.cancelInput.style.display = 'none'
    this.props.emptyState()
  }

  cancelInput = e => {
    if (e.currentTarget.value.trim()) {
      this.refs.cancelInput.style.display = 'block'
    } else {
      this.refs.cancelInput.style.display = 'none'
    }
  }

  changeSortBar = index => {
    this.setState({ show: 0, curSortBar: index })
    this.props.sortList(index)
  }
}

export default connect(
  ({ search }) => ({
    searchList: search.searchList,
    currentPage: search.currentPage,
    load: search.load,
    pageTotal: search.pageTotal,
    text: search.text
  }),
  dispatch => ({
    getSearchList: searchMsg => dispatch(Actions.getSearchList(searchMsg)),
    emptyState: () => dispatch(Actions.emptyState()),
    sortList: index => dispatch(Actions.sortList(index))
  })
)(Search)
