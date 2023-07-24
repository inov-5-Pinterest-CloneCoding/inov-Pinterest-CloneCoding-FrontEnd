import React, { useState } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

import { useQuery } from "react-query";
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

const Item = () => {
	return (
		<div className='item'>
			<div className='thumbnail'>
				<img
					// src={}
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
	const [items, setItems] = useState(() => getItems(0, 10));

	const [imageUrls, setImageUrls] = useState(""); // DB 내 이미지 저장 [[{pinImageUrl: "http"}], []...]

	const { data, isLoading, isError } = useQuery("pins", fetchPins);
	if (isLoading) {
		return <div></div>;
	}

	if (isError) {
		return <div>잠시후 다시 시도해주세요.</div>;
	}

	if (!data) {
		return <div></div>;
	} else {
		setImageUrls();
	}

	// const [images, setImages] = useState("");
	// data가 없을 때
	// if (!data)
	// 	if (data) {
	// 		data.map((item) => console.log(item.pinImageUrl));
	// 	}
	// // console.log(typeof data);
	// console.log(typeof []);
	return (
		<></>
		// <MasonryInfiniteGrid
		// 	className='container'
		// 	align='center'
		// 	gap={10}
		// 	onRequestAppend={(e) => {
		// 		const nextGroupKey = (+e.groupKey || 0) + 1;

		// 		setItems([...items, ...getItems(nextGroupKey, 10)]);
		// 	}}>
		// 	{/* {data?.map((item) => (
		// 		<Item data-grid-groupkey={item.groupKey} key={item.key} num={item.key} />
		// 	))} */}
		// </MasonryInfiniteGrid>
	);
}

export default Home;
