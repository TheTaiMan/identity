import React from 'react';

export default function Category() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        flexGrow: 0,
        paddingLeft: 126,
      }}
    >
      <div
        contentEditable="false"
        data-content-editable-void="true"
        style={{
          paddingLeft: 'calc(126px + env(safe-area-inset-left))',
          paddingRight: 'calc(126px + env(safe-area-inset-right))',
          maxWidth: '100%',
          width: '100%',
        }}
      >
        <div style={{ width: '100%', fontSize: 14 }}>
          <div
            style={{
              width: '100%',
              maxWidth: '100%',
              paddingTop: 8,
              paddingBottom: 8,
              margin: '0px auto',
            }}
          >
            <div style={{ margin: 0 }}>
              <div>
                <div
                  style={{ display: 'flex', paddingBottom: 4, width: '100%' }}
                >
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
                      className="notion-focusable"
                      role="button"
                      aria-disabled="true"
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
                              marginLeft: 1
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
                        className="notion-focusable"
                        role="button"
                        aria-disabled="true"
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
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              flexShrink: 1,
                              minWidth: 0,
                              height: 20,
                              borderRadius: 3,
                              paddingLeft: 6,
                              paddingRight: 6,
                              fontSize: 14,
                              lineHeight: '120%',
                              color: 'rgb(68, 42, 30)',
                              background: 'rgb(238, 224, 218)',
                              margin: '0px 6px 6px 0px',
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
          className="notion-page-details-controls"
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
