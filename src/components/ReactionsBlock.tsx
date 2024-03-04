import styled from "styled-components";
// import likeIcon from "/likeIcon.svg";
// import { ReactComponent as LikeIcon } from '../assets/likeIcon.svg';
// import dislikeIcon from "/dislikeIcon.svg";
import { IReactions, addReaction } from "../store/ReactionSlice";
import { useState } from "react";
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
	id: number,
	// onClick: (reactions: 'likes' | 'dislikes') => void
}


export const ReactionsBlock = ({ reactions, id }: IReactionsBlockProps): JSX.Element => {
	const [isLiked, setIsLiked] = useState<boolean>(false);
	const [isDisiked, setIsDisliked] = useState<boolean>(false);

	const dispatch: AppDispatch = useDispatch();

	const onClick = (id: number | undefined, reaction: 'likes' | 'dislikes') => {
		switch (reaction) {
			case 'likes':
				setIsLiked(true);
				break;
			case 'dislikes':
				setIsDisliked(true);
				break;
			default:
				break;
		}
		if (id) dispatch(addReaction({ id, reaction }));
	}

	return (
		<ReactionsWrapper>
			<Reaction onClick={() => onClick(id, 'likes')}>
				{/* <LikeIcon style=l{{ fill: isLiked ? 'green' : 'red' }} /> */}
				<ReactionNumber>{reactions?.likes || Math.floor(Math.random() * 50)}</ReactionNumber>
			</Reaction>
			<Reaction onClick={() => onClick(id, 'dislikes')}>
				{/* <img src={dislikeIcon} alt="" /> */}
				<ReactionNumber>{reactions?.dislikes || Math.floor(Math.random() * 50)}</ReactionNumber>
			</Reaction>
		</ReactionsWrapper>
	)
}