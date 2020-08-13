const seasonNumber = document.querySelector(".season__number")
const episodeNumber = document.querySelector(".episode__number")
const button = document.querySelector(".button")

const randomSeasonAndEpisode = ({ seasonRange = [5, 10], episodeRange = [1, 23] }) => {
	const seasonNum = Math.ceil(Math.random() * (seasonRange[1] - seasonRange[0]) + seasonRange[0])
	const episodeNum = Math.ceil(Math.random() * (episodeRange[1] - episodeRange[0]) + episodeRange[0]) 
	
	seasonNumber.innerHTML = seasonNum
	episodeNumber.innerHTML = episodeNum
	
	setTimeout(() => {
			window.location.href = `https://friends-online.me/series/s${seasonNum}e${episodeNum}/`
}, 1000)

}

button.addEventListener("click", randomSeasonAndEpisode)
