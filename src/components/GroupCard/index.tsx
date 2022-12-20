import BasketBall from '../../assets/icons/basketball.svg';
import Join from '../../assets/icons/join.svg';
import './index.css';

interface GroupCardProps {
  name: string;
  slots?: number;
  icon?: string;
}

export const GroupCard: React.FC<GroupCardProps> = ({
  name,
  slots = 0,
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
        <div className="group-card__body__slots-count">
          <span>{slots} VAGAS DISPONÍVEIS</span>
        </div>
      </div>
      <div className="group-card__footer">
        <div className="group-card__join">
          <img src={Join} alt="Entrar" />
        </div>
      </div>
    </div>
  );
};
