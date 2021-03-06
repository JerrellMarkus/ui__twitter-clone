import styled from 'styled-components'

export default styled.button`
  padding: 16px;
  background: var(--twitter-dark-hover);
	padding-right: 20px;
	color: #1da1f2;
  border-radius: 25px;
  cursor: pointer;
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};
  font-weight: bold;
  outline: none;

  &:hover {
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }`
