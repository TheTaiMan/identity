import styles from '../../../styles/styles.module.css';
import classNames from 'classnames';
import btnStyles from './btn.module.css';

export default function Up() {
  const handleClick = (event) => {
    console.log('Up');
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={classNames(styles.hover, btnStyles.container)}
      onClick={handleClick}
    >
      <svg viewBox="0 0 15 9" className={btnStyles.symbol}>
        <path d="M1.258 6.5L7.203.422a.946.946 0 01.719-.32.99.99 0 01.726.32L14.586 6.5a.89.89 0 01.266.648c0 .524-.407.93-.922.93a.921.921 0 01-.672-.281L7.93 2.32 2.586 7.797a.926.926 0 01-.672.281.915.915 0 01-.922-.93c0-.25.094-.476.266-.648z" />
      </svg>
    </div>
  );
}
