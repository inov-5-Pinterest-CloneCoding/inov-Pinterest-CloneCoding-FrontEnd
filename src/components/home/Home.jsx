import React, { useEffect, useState } from "react";
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

	const [images, setImages] = useState([]); // DB 내 이미지 저장 [[{pinImageUrl: "http"}], []...]
	const { data: pinList } = useQuery("pins", fetchPins);

	useEffect(() => {
		if (pinList) {
			console.log("data", pinList);
		}

		// if (data) {
		// 	let temps = [];
		// 	data.map((item) => {
		// 		temps.push(item.pinImageUrl);
		// 	});
		// 	// let imgTemps = images;
		// 	// imgTemps.push(temps);
		// 	setImages(temps);
		// }
	}, [pinList]);

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
