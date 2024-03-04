import { useEffect, useState } from "react";
import { IPost } from "../components/BlogList";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import styled from "styled-components";
import { IoArrowBack } from 'react-icons/io5';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { reactionsByPostId } from "../store/ReactionSlice";
import { ReactionsBlock } from "../components/ReactionsBlock";

export const Detailed = () => {
	const navigate = useNavigate();

	const H1 = styled.h1`
	margin-bottom: 48px;
	font-size: 40px;
	line-height: 48px;
	font-weight: 700;
	`;
	const Image = styled.img`
		display: block;
		margin: 0 auto 48px;
		width: 100%;
		max-width: 848px;
		max-height: 477px;
		object-fit: cover;
		object-position: center;
		`;
	const Info = styled.div`
		margin: 0 auto;
		max-width: 848px;
		font-weight: 400;
		font-size: 18px;
		line-height: 20px;
		text-align: left;
		color: #0a0a0a;
		`;
	const Button = styled.div`
		font-family: 'Roboto';
		font-weight: 400;
		font-size: 24px;
		line-height: 32px;
		color: #0a0a0a;
		cursor: pointer;
		`;
	const Header = styled.div`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`

	const { id } = useParams();
	const [post, setPost] = useState<IPost>();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(data => setPost(data))
			.catch(error => console.error('Ошибка загрузки данных:', error));

	}, [id]);

	const reactions = useSelector((state: RootState) => reactionsByPostId(state, Number(id)));


	return (
		<Container>
			<Header>
				<Button onClick={() => navigate(-1)}><IoArrowBack /> Вернуться к статьям</Button>
				<ReactionsBlock reactions={reactions} id={Number(id)} />
			</Header>
			{
				post &&
				<>
					<H1>{post.title}</H1>
					<Image src="https://placehold.co/900x500/" />
					<Info>{post.body}</Info>
				</>
			}
		</Container>
	)
};