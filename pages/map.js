import Map from '../components/Map'
import { useState, useEffect } from 'react'

export default function Maps() {
  const [isMarkerShown, setIsMarkerShown] = useState(false)

  useEffect(() => {
    displayedMarker()    
  })

  function displayedMarker() {
    setTimeout(() => setIsMarkerShown(true), 3000)
  }

  const handleMarkerClick = () => {
    setIsMarkerShown(false)
    displayedMarker()
  }

  return (
    <div>
      <Map
        isMarkerShown={isMarkerShown}
        onMarkerClick={handleMarkerClick}
      />
    </div>
  )
}