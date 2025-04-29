import SideBar from "../../components/SideBar"
import { reptileArray } from "../../data/animals"

const Reptiles = () => {
  const reptiles = reptileArray.filter(a => a.group === 'Reptiles')
  return (
    <div>
      <SideBar animalArray={reptiles} groupPage="Reptiles" />
      <div style={{ padding: '20px'}}>
        <h1>Reptiles page</h1>
      </div>
    </div>
  )
}

export default Reptiles
