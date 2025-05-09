import React from 'react'
import LatestMotherboards from './latestMotherboards/LastestMotherboards'
import LatestLaptops from './latestLaptops/LastestLaptops'
import LatestVgas from './latestVga/LatestVgas'
import LatestProcessors from './latestProcessors/LastestProcessors'
import LatestCats from './latestCats/LatestCats'
export default function Latest() {
  return (
    <div className='*:bg-white bg-backGround flex flex-wrap gap-5 py-10'>
        <LatestMotherboards />
        <LatestLaptops />
        <LatestVgas />
        <LatestProcessors />
        <LatestCats />
    </div>
  )
}
