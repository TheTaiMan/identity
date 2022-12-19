import React from 'react';
import Banner from '../banner/Banner';

export default function Gallery() {
  return (
    <div>
      <a
        href="/"
        style={{
          display: 'block',
          color: 'inherit',
          textDecoration: 'none',
          boxShadow:
            'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px',
          borderRadius: 3,
          background: 'white',
          overflow: 'hidden',
          transition: 'background 100ms ease-out 0s',
          position: 'static',
          height: '100%',
        }}
      >
        <div
          style={{
            userSelect: 'none',
            transition: 'background 20ms ease-in 0s',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Banner main={false} />
          <div
            style={{
              width: '100%',
              display: 'flex',
              padding: '8px 10px 6px',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 18,
                width: 18,
                borderRadius: '0.25em',
                flexShrink: 0,
                float: 'left',
                marginTop: 2,
                marginRight: 4,
                marginLeft: '-2px',
              }}
            >
              <div>
                <div style={{ width: '100%', height: '100%' }}>
                  <img
                    src="/icon/userIcon.png"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      borderRadius: 3,
                      width: '17.28px',
                      height: '17.28px',
                      transition: 'opacity 100ms ease-out 0s',
                    }}
                    alt={'ya'}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: '100%',
                width: 'auto',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                caretColor: 'rgb(55, 53, 47)',
                fontSize: 14,
                lineHeight: '1.5',
                minHeight: 21,
                fontWeight: 500,
                pointerEvents: 'none',
              }}
            >
              Anime
            </div>
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
