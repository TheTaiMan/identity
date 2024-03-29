import styles from '../../../../styles/styles.module.css';
import classNames from 'classnames';
import btnStyles from './btn.module.css';

import { useLocation, useNavigate } from 'react-router-dom';
import data from '../../../../data/data';

export default function Down() {
  const location = useLocation();
  const navigate = useNavigate();
  const items = Object.keys(data);
  const index = items.indexOf(location.pathname.slice(1));
  const limit = index === 9;

  const handleClick = (e) => {
    if (limit === false) {
      navigate(`/${items[index + 1]}`);
    }
  };

  return (
    <div
      className={classNames(
        { [styles.hover]: !limit, [btnStyles.dim]: limit },
        btnStyles.container
      )}
      role="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 15 9" className={btnStyles.symbol}>
        <path d="M7.92188 8.65625C8.19531 8.64844 8.44531 8.54688 8.64844 8.32812L14.5859 2.25C14.7578 2.07812 14.8516 1.85938 14.8516 1.60156C14.8516 1.08594 14.4453 0.671875 13.9297 0.671875C13.6797 0.671875 13.4375 0.773438 13.2578 0.953125L7.92969 6.42969L2.58594 0.953125C2.40625 0.78125 2.17188 0.671875 1.91406 0.671875C1.39844 0.671875 0.992188 1.08594 0.992188 1.60156C0.992188 1.85938 1.08594 2.07812 1.25781 2.25L7.20312 8.32812C7.41406 8.54688 7.64844 8.65625 7.92188 8.65625Z" />
      </svg>
    </div>
  );
}
