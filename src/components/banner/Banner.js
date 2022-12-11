import bannerStyle from './Banner.module.css';

export default function Banner() {
  return (
    <div className={bannerStyle.container}>
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
