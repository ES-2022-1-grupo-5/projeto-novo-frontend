import { GroupCard } from '../../components/GroupCard';
import './index.css';
import VolleyBall from '../../assets/icons/volleyball.svg';

export const Home = () => {
  const groups = [
    {
      name: 'Futebol',
      description: 'Grupo de futebol',
    },
    {
      name: 'Basquete',
      description: 'Grupo de basquete',
    },
    {
      name: 'Vôlei',
      description: 'Grupo de vôlei',
      icon: VolleyBall,
    },
  ];

  return (
    <main>
      <h1>Home Page</h1>
      <div className="groups">
        {groups.map(group => (
          <GroupCard {...group} />
        ))}
      </div>
    </main>
  );
};
