import BasketBall from '../../assets/icons/basketball.svg';
import './index.css';

interface GroupCardProps {
  name: string;
  description: string;
  icon?: string;
}

export const GroupCard: React.FC<GroupCardProps> = ({
  name,
  description,
  icon = BasketBall,
}) => {
  return (
    <div className="group-card">
      <div className="group-card__image">
        <img src={icon} alt="basketball" />
      </div>
      <div className="group-card__header">
        <h3 className="group-card__header__title">{name}</h3>
      </div>
      <div className="group-card__body">
        <p>{description}</p>
      </div>
      <div className="group-card__footer">
        <button>Entrar</button>
      </div>
    </div>
  );
};
