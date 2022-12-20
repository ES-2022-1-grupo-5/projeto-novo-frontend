import { GroupCard } from '../../components/GroupCard';
import './index.css';
import VolleyBall from '../../assets/icons/volleyball.svg';

export const Home = () => {
  const groups = [
    {
      name: 'Futebol',
      slots: 5,
    },
    {
      name: 'Basquete',
    },
    {
      name: 'Vôlei',
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
