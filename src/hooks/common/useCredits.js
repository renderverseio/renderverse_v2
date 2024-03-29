import { spacesRequests } from "@/requests/spaces/SpacesRequests"
import { useEffect, useState } from "react"

export const useCredits = ({ isConnected, address }) => {
  const [credits, setCredits] = useState(0)
  const [hasCredits, setHasCredits] = useState(false)

  useEffect(() => {
    const credits = async () => {
      if (isConnected && address) {
        const creds = await spacesRequests.getCredits({ address })
        if (creds.status === 200) {
          console.log(creds)
          const c = creds.data.credits
          setCredits(c)
          if (c > 0) setHasCredits(true)
        }
      }
    }
    credits()
  }, [isConnected, address])

  return { credits, hasCredits }
}
