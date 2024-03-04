import styled from "styled-components";
import { Link } from 'react-router-dom';
import { IReactions } from "../store/ReactionSlice";
import { ReactionsBlock } from "./ReactionsBlock";

interface IBlogCardProps {
	title: string,
	id: number,
	reactions: IReactions,
	index: number
}


export const BlogCard = ({ title, id, reactions, index }: IBlogCardProps): JSX.Element => {
	const CardImage = styled.img`
		display: block;
		width: 100%;
		height: 273px;
		object-fit: cover;
		object-position: center;
		border-radius: 12px 12px 0 0;
	`;

	const CardBody = styled.li`
		min-height: 430px;
		border-radius: 12px;
		box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.04);
		background: #fff;
		`;
	const InfoWrapper = styled.div`
		padding: 24px 16px 32px;
		`;
	const CardTitle = styled.h3`
		margin: 0;
		margin-bottom: 24px;
		font-size: 28px;
		line-height: 32px;
		font-weight: 700;
		text-align: left;
		color: #0a0a0a;
		`;

	const StyledLink = styled(Link)`
		width: 150px;
		height: 45px;
		padding: 14px 24px 12px 24px;
		border: 2px solid #0a0a0a;
		border-radius: 60px;
		font-weight: 400;
		font-size: 15px;
		line-height: 19px;
		color: #0a0a0a;
		text-decoration: none;
	`
	const FooterCard = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`

	return (
		<CardBody style={{ gridColumn: index === 0 ? 'span 2' : '' }} >
			<CardImage style={{ height: index === 0 ? '600px' : '273px' }} src="https://placehold.co/600x400/" />
			<InfoWrapper>
				<CardTitle>{title}</CardTitle>
				<FooterCard>
					<ReactionsBlock reactions={reactions} id={id} />
					<StyledLink to={`/post/${id}`}>Читать далее</StyledLink>
				</FooterCard>
			</InfoWrapper>
		</CardBody>

	)
}