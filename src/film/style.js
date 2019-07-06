import styled from 'styled-components';

export const FilmWrap = styled.div`
  .head{
      height:2.75rem;
      background:#e76a00;
      display:flex;
      justify-content: space-between;
      text-align: center;
      line-height:2.75rem;
      .left{
          font-size:17px;
          margin:0 0 0 .625rem;
        a{
            color:#fff;
        }  
      }
      .right{
        font-size:17px;
        margin:0 .625rem 0 0;
        a{
            color:#fff;
        }
      }
  }
  .ant-tabs-bar {
    margin: 0 0px 1rem 3.75rem;
    border:0;
  }
  .film-list{
    width: 94%;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px 0 15px 0;
    border-top: 1px solid #E5E5E5;
    font-size: 18px;
    font-family: microsoft yahei;
     .p-left {
      float: left;
      width: 87px;
      padding-right: 5%;
      }
       .p-middle {
        float: left;
        width: 50%;
          .moviename {
          color: #222222;
          font-weight: bold;
          font-size: 13px;
          }
           .explain {
            color: #727272;
            padding: 5px 0 5px 0;
            font-size: 12px;
          }
         
       }
     .p-right {
        float: right;
        width: 18%;
        padding-top: 34px;
        span {
          display: block;
          width: 90%;
          height: 28px;
          border: 1px solid #fb783d;
          line-height: 28px;
          text-align: center;
          border-radius: 5px;
          font-size: 12px;
          color: #fc8048;
          }
      }
  }

`;