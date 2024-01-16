import React from "react";

import "./styles/style.css";

const ImgComponent = (props) => {
	const { img_title, description, image, date } = props;

	return (
		<React.Fragment>
			<div className="tours-card">
                <div class="tour-img">
                    <img
                        src={image}
                        alt="Image"
                        className="tour-img"
                        width="290"
                        height="360"
                        
                    />
                </div>

                <div class="tours-card-content">
                    <div class="tours-card-contents-text">
                        <h3>{img_title}</h3>
                        <p>{description}</p>
                    </div>
                    <div class="tours-card-content-icons">
                        <h6>
                            <img
                                src="/Gallery/icons/calendersml.png"
                                alt=""
                            />{date}
                        </h6>
                        <h6>
                            <img
                                src="/Gallery/icons/user.png"
                                alt=""
                            />By Admin
                        </h6>
                    </div>
                </div>
			</div>
		</React.Fragment>
	);
};

export default ImgComponent;
