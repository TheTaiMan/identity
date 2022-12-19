import bannerStyle from './Banner.module.css';
import classNames from 'classnames';

export default function Banner({ main }) {
  console.log(main);
  return (
    <div
      className={classNames(
        bannerStyle.container,
        main && bannerStyle.marginTop
      )}
    >
      <div className={bannerStyle['container-second']}>
        <div className={bannerStyle['container-third']}>
          <div className={bannerStyle['container-forth']}>
            <div className={bannerStyle['container-sixth']}>
              <img
                className={bannerStyle.banner}
                alt="main banner"
                src={'/banners/lofi.png'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
