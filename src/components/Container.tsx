import styled from "styled-components";

const Wrapper = styled.div`
	width:100%;
	max-width: 1140px;
	margin: 0 auto;
`

interface IContainerProps {
	children: React.ReactNode
}


export const Container = ({ children }: IContainerProps): JSX.Element => {
	return (
		<Wrapper>{children}</Wrapper>
	)
}