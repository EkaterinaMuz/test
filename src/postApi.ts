import { IPost } from "./components/BlogList";

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const postsAPI = {
	fetchAll: async (): Promise<IPost[]>=> {
		const response = await fetch(BASE_URL + 'posts?_limit=10');
		return response.json();
	},
	fetchById: async (id: number): Promise<IPost> => {
		const response = await fetch(BASE_URL + 'posts/' + id);
		return response.json();
	},
	searchByTitle: async (title: string): Promise<IPost[]> => {
		const response = await fetch(BASE_URL + 'posts/?q=' + title);
		return response.json();
	},
}