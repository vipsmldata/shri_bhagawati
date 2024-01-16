import React from "react";

import ImgComponent from "./image_component";

import Gallery_Data from "../../data/gallery"
import "./styles/style.css";

const AllGalleryImages = () => {
	return (
		<div className="all-images-container">
			{Gallery_Data.map((img_data, index) => (
				<div className="all-images-image" key={index}>
					<ImgComponent
						img_title={img_data().img_title}
						description={img_data().description}
						image={img_data().image}
						date={img_data().date}
					/>
				</div>
			))}
		</div>
	);
};

export default AllGalleryImages;
