import React from 'react';
import { MarkdownEditor } from '../../components/blog/MarkdownEditor';
import 'easymde/dist/easymde.min.css';
import { MainLayout } from '../../components/layout';

export interface BlogCreatePageProps {}
export default function BlogCreate(props: BlogCreatePageProps) {
	return (
		<div className=' bg-white h-min mx-8 mt-[70px] mb-4'>
			<MarkdownEditor />
		</div>
	);
}
BlogCreate.Layout = MainLayout;
