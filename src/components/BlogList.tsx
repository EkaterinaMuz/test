import React, { useEffect } from "react";
import { BlogCard } from "./BlogCard";
import styled from "styled-components";
import { Search } from "./Search";
import { IReactions, allPosts, fetchingAllPosts, fetchingSearchedPosts } from "../store/ReactionSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { searchValue } from "../store/SearchSlice";

export interface IPost {
	"userId": number,
	"id": number,
	"title": string,
	"body": string
}

export const BlogList = React.memo((): JSX.Element => {

	const H1 = styled.h1`
	margin-bottom: 24px;
	font-size: 60px;
	line-height: 68px;
	font-weight: 600;
	`;
	const Subtitle = styled.p`
	padding: 0;
	font-size: 24px;
	line-height: 32px;
	font-weight: 400;
	text-align: left;
	`;
	const List = styled.ul`
	padding: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(auto-fit, minmax(430px, auto));
	grid-gap: 24px 24px;  
	list-style: none;
	`;

	const dispatch: AppDispatch = useDispatch();

	const getallPosts = useSelector(allPosts);
	const searchTitle = useSelector(searchValue);

	useEffect(() => {
		dispatch(fetchingAllPosts());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchingSearchedPosts(searchTitle));
	}, [searchTitle, dispatch]);

	return (
		<>
			<H1>Блог</H1>
			<Subtitle>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</Subtitle>
			<Search />
			<List>
				{
					Object.values(getallPosts).map(({ post, reactions }: { post: IPost, reactions: IReactions }, index) => <BlogCard title={post.title} reactions={reactions} id={post.id} index={index} key={post.userId} />)
				}
			</List>

		</>
	);
});