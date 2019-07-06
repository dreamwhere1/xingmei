import styled from 'styled-components';

export const FindWrap = styled.div`
 {
    display: block;
    padding: 0;
    margin: 0;
    width:100%;
    height:15.625rem;
    .banner{
        height:7.5rem;
      a{
          display:block;
          width:100%;
          height:1.2rem;
          img{
              height；100%;
              width:100%;

          }
      }
    }
    .content{
        background-color: #fff;
        height:4.375rem;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
        margin-bottom: .89rem;
        position: relative;
        .time{
            display: inline-block;
             width: 20%;
             text-align: center;
               color: #999;
             font-size: 1.25rem;
             padding-top: 0.425rem;
              float: left;
        }
        .detail{
            height: 2.68rem;
            margin-top: .825rem;
            border-left: 1px solid #ccc;
            width: 79%;
            display: inline-block;
            float: left;
            dl{
                padding-left: 0.55rem;
                 max-width: 85%;
            }
            dl>dt{
                line-height: 1;
               font-size: 1.03rem;
               color: #393939;
               text-overflow: ellipsis;
               white-space: nowrap;
               overflow: hidden;
            }
            dl>dd{
                color: #585858;
                font-size: .825rem;
                line-height: 1;
                margin-top: 0.275rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        
        }
    .arrow{
            width:3.575rem;
            height: 2.956rem;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            background-image: url(http://m.ixingmei.com/images/icon_e.png);
            background-repeat: no-repeat;
            overflow: hidden;
            background-size: 100% auto;
            p{
                font-size: 0.6875rem;
               text-align: right;
             -webkit-transform: rotate(38deg);
            position: absolute;
              right: -0.137rem;
              top: 0.103rem;
               width: 3.575rem;
               color:#fff;
            }
         }

    }
}


`