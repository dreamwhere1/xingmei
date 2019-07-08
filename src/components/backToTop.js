import React, { Component } from 'react'

export default class BackToTop extends Component {
  constructor(props) {
    super(props)
    this.state = { show: 'none' }
  }
  render() {
    return (
      <div className="fix-block-r" style={{ display: this.state.show }}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          // eslint-disable-next-line no-script-url
          href="javascript:void(0);"
          className="gotop-btn gotop"
          id="goTopBtn"
          onClick={this.showTop}
        >
          <i />
        </a>
      </div>
    )
  }
  showTop = () => {
    let dom = document.documentElement || document.body
    let h = 1
    this.timer = setInterval(() => {
      h += 5
      dom.scrollTop = dom.scrollTop - h
      if (dom.scrollTop <= 0) clearInterval(this.timer)
    }, 0)
  }
  componentDidMount() {
    let { loadMore } = this.props
    window.onscroll = () => {
      if (window.scrollY > 100) this.setState({ show: 'unset' })
      else this.setState({ show: 'none' })
      if (loadMore) {
        let dom = document.getElementsByClassName('goods-secrch-list')[0]
        let ele =
          document.documentElement.clientHeight || document.body.clientHeight
        if (window.scrollY > dom.offsetHeight - ele) {
          loadMore()
        }
      }
    }
  }
  componentWillUnmount() {
    window.onscroll = null
  }
}
