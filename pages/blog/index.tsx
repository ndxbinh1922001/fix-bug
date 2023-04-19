import React from 'react';
import BlogSearch from '../../components/Search';
import BlogPagination from '../../components/blog/BlogPagination';
import BlogTable from '../../components/blog/BlogTable';
import { MainLayout } from '../../components/layout';

export interface BlogListPageProps {}
export default function BlogList(props: BlogListPageProps) {
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg px-16 py-8 m-2 '>
			<BlogSearch />
			<BlogTable />
			<BlogPagination />
		</div>
	);
}
BlogList.Layout = MainLayout;

// sử dụng mô hình SSG(static html + json data + dynamic routes),dùng hàm getStaticProps() + getStaticPaths() để triển khai nhớ cắt bớt dữ liệu không cần thiết

// hàm getStaticProps() chỉ chạy lúc build time
