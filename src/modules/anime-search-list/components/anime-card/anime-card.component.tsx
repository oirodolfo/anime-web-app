import * as React from "react";

import { LazyImage } from "toolbox";
import { AnimeCardWrapper, AnimeCardImageWrapper } from "./anime-card.styles";
import { AnimeCardComponentProps, AnimeCardRefProp } from "./anime-card.types";
import { AnimeDetailsModalContainer } from "../anime-details-modal/anime-details-modal.container";

export const AnimeCardComponent = React.forwardRef<
	AnimeCardRefProp,
	AnimeCardComponentProps
>(({ animeSerie, toggleModal, isModalOpen }, ref) => {
	return (
		<>
			{isModalOpen && (
				<AnimeDetailsModalContainer
					isOpen={isModalOpen}
					handleClose={toggleModal}
					animeId={animeSerie.id}
				/>
			)}
			<AnimeCardWrapper ref={ref} onClick={toggleModal}>
				<AnimeCardImageWrapper
					as={LazyImage}
					height={265}
					src={animeSerie.coverImage.large}
					title={`Thumbnail: ${animeSerie.title.english}`}
				/>
				<p>{animeSerie.title.english || "No title provided"}</p>
			</AnimeCardWrapper>
		</>
	);
});
