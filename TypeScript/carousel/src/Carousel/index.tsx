import './styles.css';
import styled from '@emotion/styled';
import { useState } from 'react';
const IMAGES = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

type CarouselProps = {
	images: string[];
	style?: React.CSSProperties;
};
function decideButtonsToDisable() {
	return 2;
}
/*
When and which button will be disabled:
1. If currentImage is the last image in the array, then next button will be disabled.
2. If currentImage is the first image in the array, then prev button will be disable.
3. otherwise both button will remain enabled.
*/
function Carousel(props: CarouselProps) {
	const imagesLength = IMAGES.length - 1;
	const [currentImage, setCurrentImage] = useState(0);
	const [buttonConfig, setButtonConfig] = useState({
		isPrevButtonDisabled: true,
		isNextButtonDisabled: false
	});
	const handlePrevClick = () => {
		if (currentImage > 0) {
			setCurrentImage(currentImage - 1);
		}

		if (currentImage - 1 === 0) {
			setButtonConfig({
				isPrevButtonDisabled: true,
				isNextButtonDisabled: false
			});
		} else {
			setButtonConfig((prevState) => ({
				...prevState,
				isNextButtonDisabled: false
			}));
		}
	};
	const handleNextClick = () => {
		if (currentImage < imagesLength) {
			setCurrentImage(currentImage + 1);
		}
		if (currentImage + 1 === imagesLength) {
			setButtonConfig({
				isPrevButtonDisabled: false,
				isNextButtonDisabled: true
			});
		} else {
			setButtonConfig((prevState) => ({
				...prevState,
				isPrevButtonDisabled: false
			}));
		}
	};
	return (
		<MainContainer>
			{/*Image container */}
			<ImageContainer>
				<img
					alt="Carousel Current"
					width="500px"
					height="500px"
					src={`/imgs/${IMAGES[currentImage]}`}
				/>
			</ImageContainer>
			{/*Prev Next button container */}
			<ButtonContainer>
				<Buttons>
					<Button
						onClick={handlePrevClick}
						disabled={buttonConfig.isPrevButtonDisabled}>
						Prev{' '}
					</Button>
					<Button
						onClick={handleNextClick}
						disabled={buttonConfig.isNextButtonDisabled}>
						Next
					</Button>
				</Buttons>
			</ButtonContainer>
			{/* Caption Container*/}
			<CaptionContainer>
				<CaptionTextContainer>
					This is the caption{currentImage}
				</CaptionTextContainer>
			</CaptionContainer>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	width: 50%;
`;
const ButtonContainer = styled.div`
	position: relative;
	width: 80%;
`;

const Buttons = styled.div`
	position: absolute;
	width: 100%;
	top: -250px;
	display: flex;
	justify-content: space-between;
`;
const Button = styled.button`
	margin: 4px;
	padding: 4px;
`;
const ImageContainer = styled.div``;

const CaptionContainer = styled.div`
	position: relative;
	width: 80%;
`;
const CaptionTextContainer = styled.p`
	position: absolute;
	top: -50px;
	width: 80%;
	text-align: center;
	color: black;
	font-weight: medium;
`;

export default Carousel;
