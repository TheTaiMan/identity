import React from 'react';
import Banner from '../banner/Banner';
import galleryStyles from './Gallery.module.css';
import Title from '../title/Title';

export default function Gallery() {
  return (
    <div>
      <a href="/" className={galleryStyles.body}>
        <div className={galleryStyles.container}>
          <Banner main={false} />
          <div className={galleryStyles.title}>
            <Title type={'whoAmI'} element={'gallery'} />
          </div>
          <div
            style={{
              paddingTop: 0,
              paddingBottom: 10,
              paddingLeft: 6,
            }}
          >
            <div
              style={{
                paddingRight: 10,
                fontSize: 12,
                display: 'flex',
                alignItems: 'stretch',
                paddingBottom: 2,
                height: 24,
                whiteSpace: 'nowrap',
              }}
            >
              <div
                style={{
                  userSelect: 'none',
                  transition: 'background 20ms ease-in 0s',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 5,
                  paddingTop: 0,
                  paddingLeft: 4,
                }}
              >
                <div style={{ display: 'flex', minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 1,
                      minWidth: 0,
                      height: 14,
                      borderRadius: 3,
                      paddingLeft: 6,
                      paddingRight: 6,
                      fontSize: 12,
                      lineHeight: '120%',
                      color: 'rgb(68, 42, 30)',
                      background: 'rgb(238, 224, 218)',
                      margin: '0px 4px 0px 0px',
                    }}
                  >
                    <div
                      style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <div style={{ display: 'block' }}>Media</div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    right: 6,
                    top: '-1px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
