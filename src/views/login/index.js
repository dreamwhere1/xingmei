import React from 'react'
import './index.css'
import { Icon, Tabs } from 'antd'
import { connect } from 'react-redux'
import * as actions from '@/store/login/actionCreates'

const { TabPane } = Tabs

// const operations = <Button>Extra Action</Button>;

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
      dispaly: 'block',

      isok: true,
      msg: 'none',

      visible: false,
      check: 'none',
      check2: 'none'
      // 注册页数据
      //   inputVal:this.props.,
      //   passWord:'',
    }

    // 这个绑定是必要的，使`this`在回调中起作用
    // this.handleClick = this.handleClick.bind(this);
    // this.chgInput=this.chgInput.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? 'none' : 'block',
      isok: !prevState.isok,
      msg: prevState.isok ? 'block' : 'none'
    }))
  }

  handleSubmit = e => {
    let inputVal = this.props.inputVal
    let password = this.props.password
    // let userList = this.props.userList
    // console.log(userList)
    //   console.log(inputVal);
    if (!inputVal) {
      this.setState({ check: 'block' })
    }
    if (!password) {
      // console.log('abc')
      this.setState({ check2: 'block' })
    }
  }

  setvisible = () => {
    this.setState({ visible: false })
  }

  chgSpan = () => {
    this.setState({ check: 'none' })
  }
  chgSpan2 = () => {
    this.setState({ check2: 'none' })
  }
  //   chgLeft(){
  //       this.setState={
  //           left:'64%'
  //       }
  //   }

  //   chgInput=(e)=>{

  //     //   this.setState(prevState=>({
  //     //    inputVal:prevState.inputVal
  //     //   })

  //     this.setState({
  //         inputVal:e.target.value
  //     })
  //   }

  // chgInput=(e)=>{

  // }

  // chgInput(){
  //     this.setState(prevState=>({
  //         alert(prevState)
  //     }))
  // }

  render() {
    return (
      <div className="login-body">
        {/* {this.state.visible ? (
                 <Alert
                   message="手机号码不能为空"
                   type="success"
                   closable
                  afterClose={this.handleClose}
                   className="alert"
                    onClose={this.setvisible.bind(this)}
                    />
                    ) : null}
                  {this.state.visible ? (
                 <Alert
                   message="密码不能为空"
                   type="success"
                   closable
                  afterClose={this.handleClose}
                   className="alert"
                    onClose={this.setvisible.bind(this)}
                    />
                    ) : null}     */}
        <header className="header">
          <Icon
            type="left"
            className="left"
            onClick={() => this.props.history.go(-1)}
          />
        </header>
        <div className="logo" />
        <div className="main ">
          {/* <Radio.Group defaultValue="a" size="large" >
                <Radio.Button value="a" buttonStyle="outline">登录</Radio.Button>
                <Radio.Button value="b">注册</Radio.Button>
                </Radio.Group> */}
          <Tabs className="tabs">
            <TabPane tab="登录" key="1" className="tab-login">
              {/* 手机验证登录 */}
              <div
                className="code_login"
                style={{ display: this.state.display }}
              >
                <section className="wx_login">
                  <div className="arrow1" />
                  <div className="login_int">
                    <div className="item">
                      <input
                        type="text"
                        maxLength="11"
                        placeholder="输入手机号"
                      />
                    </div>
                    <div className="item">
                      <input type="text" placeholder="输入验证码" />
                    </div>
                    <div className="get_code">
                      <input type="button" value="获取验证码" />
                    </div>
                    <div className="login_sure">
                      <input type="button" value="确定" className="btnlogin" />
                    </div>
                  </div>
                </section>
              </div>

              {/* 账号密码登录 */}

              <section className="wx_login" style={{ display: this.state.msg }}>
                <div className="arrow1" />
                <div className="login_int">
                  <div className="item">
                    <input
                      type="text"
                      maxLength="11"
                      placeholder="请输入账号"
                    />
                  </div>
                  <div className="item">
                    <input type="password" placeholder="输入密码" />
                  </div>
                  <div className="forget_pwd">忘记密码</div>
                  <div className="login_sure">
                    <input type="button" value="确定" className="btnlogin" />
                  </div>
                </div>
              </section>

              <div className="other_login">
                <div className="other_login_title">
                  <span>其他方式登录</span>
                </div>
                <div className="other_login_btn">
                  {/* <input type="button" value="账号密码登录" className="sms_login_btn" onClick={this.handleClick}/> */}
                  {/* <input type="button" value="快速登录" className="sms_login_btn" onClick={!this.handleClick} /> */}

                  <button
                    className="sms_login_btn"
                    onClick={this.handleClick.bind(this)}
                  >
                    {this.state.isToggleOn ? '账号密码登录' : '快速登录'}
                  </button>
                </div>
              </div>
            </TabPane>
            {/* 注册页面 */}
            <TabPane tab="注册" key="2" className="tab-zhuce">
              <div
                className="code_login"
                style={{ display: this.state.display }}
              >
                <section className="wx_login">
                  <div className="arrow2" />
                  <div className="login_int">
                    <div className="item">
                      <input
                        type="text"
                        maxLength="11"
                        placeholder="输入手机号"
                        className="zhuce-input"
                        value={this.props.inputVal}
                        onChange={this.props.chgInput}
                        onFocus={this.chgSpan.bind(this)}
                      />
                      <span
                        style={{ display: this.state.check }}
                        className="check-inputVal"
                      >
                        手机号码不能为空
                      </span>
                      {/* {this.props.msg} */}
                    </div>
                    <div className="item">
                      <input
                        type="password"
                        placeholder="输入密码"
                        value={this.props.password}
                        onChange={this.props.chgPassword}
                        className="zhuce-password"
                        onFocus={this.chgSpan2.bind(this)}
                      />
                      <span
                        style={{ display: this.state.check2 }}
                        className="check-inputVal"
                      >
                        密码不能为空
                      </span>
                    </div>

                    <div className="login_sure">
                      <input
                        type="button"
                        value="注册"
                        className="btnlogin"
                        onClick={this.handleSubmit.bind(this)}
                      />
                    </div>
                  </div>
                </section>
              </div>
            </TabPane>
          </Tabs>

          {/* <p>placeholder text here</p> */}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    inputVal: state.login.inputVal,

    msg: state.login.msg,

    password: state.login.passWord,

    userList: state.login.userList
  }),
  dispatch => ({
    chgInput(e) {
      // console.log(e)
      let value = e.target.value
      // console.log(value)
      dispatch(actions.onSignIn(value))
    },
    chgPassword(e) {
      let password = e.target.value
      // console.log(password)
      dispatch(actions.onPassword(password))
    }
  })
)(Login)
