const seasonNumber = document.querySelector(".season__number");
const episodeNumber = document.querySelector(".episode__number");
const button = document.querySelector(".button");

const randomSeasonAndEpisode = ({ seasonRange = [5, 10], episodeRange = [1, 23] }) => {
	const seasonNum = Math.ceil(
		Math.random() * (seasonRange[1] - seasonRange[0]) + seasonRange[0]
	);
	const episodeNum = Math.ceil(
		Math.random() * (episodeRange[1] - episodeRange[0]) + episodeRange[0]
	);

	seasonNumber.innerHTML = seasonNum;
	episodeNumber.innerHTML = episodeNum;

	setTimeout(() => {
		const link =
			seasonNum === 10
				? `https://friends-online.me/series/${seasonNum}s${episodeNum}e/`
				: `https://friends-online.me/series/s${seasonNum}e${episodeNum}/`;

		window.location.href = link;
	}, 1000);
};

button.addEventListener("click", randomSeasonAndEpisode);
