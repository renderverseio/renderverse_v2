import { spacesRequests } from "@/requests/spaces/SpacesRequests"
import { useEffect, useState } from "react"

export const useCredits = ({ isConnected, address }) => {

	const [credits, setCredits] = useState(0)
	const [hasCredits, setHasCredits] = useState(false)

	useEffect(() => {
		const credits = async () => {
			try {
				if (isConnected && address) {
					const creds = await spacesRequests.getCredits({ address })
					if (creds.status === 200) {
						const c = creds.data.credits
						setCredits(c)
						if (c > 0) setHasCredits(true)
					}
				}
			} catch (error) {
				throw error;
			}
		}
		credits()
	}, [isConnected, address])

	return { credits, hasCredits }
}