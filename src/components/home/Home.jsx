import React, { useEffect, useState } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

import { useInfiniteQuery } from "react-query";
import { fetchPins } from "../../api/pins";

import "../home/Home.css";

function getItems(nextGroupKey, count) {
	const nextItems = [];
	const nextKey = nextGroupKey * count;

	for (let i = 0; i < count; ++i) {
		nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
	}
	return nextItems;
}

const Pin = (item) => {
	return (
		<div className='item'>
			<div className='thumbnail'>
				<img
					src={item.url}
					alt='egjs'
					style={{
						maxWidth: "100%",
						borderRadius: "20px",
					}}
				/>
			</div>
		</div>
	);
};

function Home() {
	// useInfiniteQuery 사용하기
	const { data, fetchNextPage } =
    useInfiniteQuery(["pins"], ({pageParam=0}) => fetchPins(pageParam), {
      getNextPageParam: (lastPage) => {
		if (!lastPage.last) return lastPage.data.pageable.pageNumber + 1;
		else return undefined;
      },
    });

	// 무한 스크롤
	const [page, setPage] = useState(0);
	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
	
		if (scrollTop + clientHeight >= scrollHeight) setPage((prev) => prev + 1);
	};

	useEffect(() => {
		fetchNextPage();
	}, [page]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='main'>
			<MasonryInfiniteGrid
				className='container'
				align='justify'
				gap={5}
				threshold={1000}
				onRequestAppend={(e) => {
					e.wait() 
					getItems(e);
				}}
				>
				{
					data?.pages.map((page) => {
						return(
							page.data.content.map((item) => {
								return <Pin item={item} key={item.id} gridKey={item.groupKey} num={item.key} url={item.pinImageUrl}/>
							})
						)
					})
				}
			</MasonryInfiniteGrid>
		</div>
	);
}

export default Home;