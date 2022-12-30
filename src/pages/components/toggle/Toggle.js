import React from 'react';
import styles from '../../../styles/styles.module.css'

export default function Toggle({ text, img, className }) {
  return (
    <div
      style={{
        display: 'flex',
        paddingTop: 12,
        paddingBottom: 12,
        flexGrow: 0,
        flexShrink: 0,
        width: '100%',
      }}
      className={className}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            width: '100%',
            marginTop: 2,
            marginBottom: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              width: '100%',
              paddingLeft: 2,
              color: 'inherit',
              fill: 'inherit',
            }}
          >
            <div
              style={{
                userSelect: 'none',
                marginRight: 2,
                width: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 0,
                flexShrink: 0,
                minHeight: 'calc(1.5em + 3px + 3px)',
                paddingRight: 2,
              }}
            >
              <div
                style={{
                  userSelect: 'none',
                  transition: 'background 20ms ease-in 0s',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 24,
                  height: 24,
                  borderRadius: 3,
                }}
                className={styles.hover}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="triangle"
                  style={{
                    width: '0.6875em',
                    height: '0.6875em',
                    display: 'block',
                    fill: 'inherit',
                    flexShrink: 0,
                    backfaceVisibility: 'hidden',
                    transition: 'transform 200ms ease-out 0s',
                    transform: 'rotateZ(180deg)',
                    opacity: 1,
                  }}
                >
                  <polygon points="5.9,88.2 50,11.8 94.1,88.2 " />
                </svg>
              </div>
            </div>
            <div style={{ flex: '1 1 0px', minWidth: 1 }}>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    maxWidth: '100%',
                    width: '100%',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    caretColor: 'rgb(55, 53, 47)',
                    padding: '3px 2px',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{text}</span>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      width: 288,
                      maxWidth: '100%',
                      alignSelf: 'flex-start',
                      marginTop: 4,
                      marginBottom: 0,
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex' }}>
                        <div
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            flexGrow: 1,
                          }}
                        >
                          <div style={{ position: 'relative' }}>
                            <div>
                              <div style={{ height: '100%', width: '100%' }}>
                                <img
                                  src={img}
                                  style={{
                                    display: 'block',
                                    objectFit: 'cover',
                                    borderRadius: 1,
                                    pointerEvents: 'auto',
                                    width: '100%',
                                  }}
                                  alt="Naruto"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
