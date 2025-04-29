

import SideBar from '../../components/SideBar/index'
import { mammalArray } from '../../data/animals'

const Mammals = () => {
  const mammals = mammalArray.filter(a => a.group === 'Mammals');

  return (
    <div>
      <SideBar animalArray={mammals} groupPage="Mammals" />
      <div style={{ padding: '20px' }}>
        <h1>Mammals Page</h1>
        {/* Content */}
      </div>
    </div>
  );
};

export default Mammals;

