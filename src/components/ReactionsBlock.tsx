import styled from "styled-components";
import likeIcon from "../assets/likeIcon.svg";
import dislikeIcon from "../assets/dislikeIcon.svg";
import { IReactions, addReaction } from "../store/ReactionSlice";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";

const ReactionsWrapper = styled.div`
	max-width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Reaction = styled.button`
	max-width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	gap: 8px;
`
const ReactionNumber = styled.p`
	font-family: 'Roboto';
	font-weight: 400;
	font-size: 16px;
	line-height: 18px;
	color: rgba(58, 53, 65, 0.54);
`

interface IReactionsBlockProps {
	reactions: IReactions,
	id: number
}


export const ReactionsBlock = ({ reactions, id }: IReactionsBlockProps): JSX.Element => {
	const dispatch: AppDispatch = useDispatch();

	const onClick = (id: number | undefined, reaction: 'likes' | 'dislikes') => {
		if (id) dispatch(addReaction({ id, reaction }));
	}

	return (
		<ReactionsWrapper>
			<Reaction onClick={() => onClick(id, 'likes')}>
				<img src={likeIcon} alt="" />
				<ReactionNumber>{reactions?.likes || Math.floor(Math.random() * 50)}</ReactionNumber>
			</Reaction>
			<Reaction onClick={() => onClick(id, 'dislikes')}>
				<img src={dislikeIcon} alt="" />
				<ReactionNumber>{reactions?.dislikes || Math.floor(Math.random() * 50)}</ReactionNumber>
			</Reaction>
		</ReactionsWrapper>
	)
}