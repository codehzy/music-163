import styled from 'styled-components'

export const NavWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.primary};
  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    top: -4px;
    ${(props) => props.theme.mixin.wrapv1}

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: ${(props) => props.theme.color.secondary};
          border-radius: 20px;
        }
      }
    }
  }
`
