export async function getLiveStreams(channelId) {
	const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`

	try {
		const response = await fetch(url)
		const xmlString = await response.text()

		const entryRegex = /<entry>(.*?)<\/entry>/gs
		const titleRegex = /<title>(.*?)<\/title>/s
		const thumbnailRegex = /<media:thumbnail url="(.*?)"/s
		const linkRegex = /<link rel="alternate" href="(.*?)"/s

		const entries = Array.from(xmlString.matchAll(entryRegex)).map((match) => {
			const entryString = match[1]
			const titleMatch = entryString.match(titleRegex)
			const thumbnailMatch = entryString.match(thumbnailRegex)
			const linkMatch = entryString.match(linkRegex)

			const title = titleMatch ? titleMatch[1] : ''
			const thumbnail = thumbnailMatch ? thumbnailMatch[1] : ''
			const link = linkMatch ? linkMatch[1] : ''

			return { title, thumbnail, link }
		})

		return entries
	} catch (error) {
		console.error('Error fetching XML:', error)
		return []
	}
}

export async function fetchLiveStreams() {
	const LiveStreams = await getLiveStreams('UC3aj05GEEyzdOqYM5FLSFeg')
	return LiveStreams
}
