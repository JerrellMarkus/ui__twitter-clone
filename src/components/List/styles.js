import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 14px;
  background: var(--secondary);
`

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    
    @media (prefers-color-scheme: light) {  
      border-top: 1px solid #EBEEF0;
      }
      @media (prefers-color-scheme: dark) {  
        border-top: 1px solid #38444D;
        }
  &:first-child {
    padding-top: 13px;
  }}

  &:last-child {
    padding-top: 17px;
  }}
`

export const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
`
