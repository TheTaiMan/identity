import React from 'react';
import Tag from '../../../components/type/tag/Tag';
import categoryStyles from './category.module.css';

export default function Category({ type }) {
  return (
    <div className={categoryStyles.container}>
      <div className={categoryStyles['container-second']}>
        <div className={categoryStyles['container-third']}>
          <div className={categoryStyles['child-one']}>
            <div className={categoryStyles['child-two']}>
              <div>
                <div className={categoryStyles['child-three']}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 34,
                      width: 160,
                      flex: '0 0 auto',
                      color: 'rgba(55, 53, 47, 0.65)',
                    }}
                  >
                    <div
                      role="button"
                      tabIndex={-1}
                      style={{
                        userSelect: 'none',
                        transition: 'background 20ms ease-in 0s',
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        borderRadius: 3,
                        padding: '0px 6px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          lineHeight: '120%',
                          fontSize: 14,
                          minWidth: 0,
                        }}
                      >
                        <div style={{ marginRight: 8 }}>
                          <img
                            src="/icons/file.png"
                            alt="File Icon"
                            style={{
                              width: 22,
                              height: 22,
                              opacity: 0.5,
                              marginTop: 1.5,
                              marginLeft: 1,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          Category
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      marginLeft: 4,
                      height: '100%',
                      flex: '1 1 auto',
                      flexDirection: 'column',
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 4,
                        height: '100%',
                        flex: '1 1 auto',
                        minWidth: 0,
                      }}
                    >
                      <div
                        role="button"
                        tabIndex={-1}
                        style={{
                          userSelect: 'none',
                          transition: 'background 20ms ease-in 0s',
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: 3,
                          width: '100%',
                          minHeight: 34,
                          padding: '0px 8px',
                          fontSize: 14,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            paddingTop: 8,
                            paddingBottom: 2,
                          }}
                        >
                          <Tag type={type} page={true} />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            position: 'absolute',
                            right: 6,
                            top: 4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: 0 }} />
        <div
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(55, 53, 47, 0.09)',
            marginBottom: 8,
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            color: 'rgba(55, 53, 47, 0.5)',
            fontFamily:
              'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
          }}
        />
      </div>
    </div>
  );
}
