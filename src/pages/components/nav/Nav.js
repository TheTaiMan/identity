import React from 'react';
import styles from '../../../styles/styles.module.css';
import Down from './btn/Down';
import Up from './btn/Up';

export default function Nav() {
  return (
    <div
      style={{
        zIndex: 110,
        background: 'white',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        
      }}
    >
      <div
        style={{
          height: 44,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            columnGap: 2,
            alignItems: 'center',
          }}
        >
          <div
            href="#"
            className={styles.hover}
            style={{
              display: 'block',
              textDecoration: 'none',
              userSelect: 'none',
              cursor: 'pointer',
              color: 'inherit',
              height: 24,
            }}
          >
            <div
              className="notion-focusable"
              role="button"
              tabIndex={0}
              style={{
                userSelect: 'none',
                transition: 'background 20ms ease-in 0s',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                borderRadius: 3,
                height: 24,
                width: 24,
                padding: 0,
              }}
            >
              <svg
                viewBox="0 0 16 16"
                className="openAsPageThick"
                style={{
                  width: 16,
                  height: 16,
                  display: 'block',
                  fill: 'rgba(55, 53, 47, 0.45)',
                  flexShrink: 0,
                  backfaceVisibility: 'hidden',
                }}
              >
                <path d="M2.16895 7.19629C2.59277 7.19629 2.90723 6.88867 2.90723 6.45801V5.96582L2.75684 3.81934L4.35645 5.50098L6.3252 7.4834C6.46875 7.63379 6.65332 7.70215 6.85156 7.70215C7.30957 7.70215 7.6377 7.39453 7.6377 6.93652C7.6377 6.72461 7.55566 6.54004 7.41211 6.39648L5.43652 4.4209L3.74805 2.82129L5.91504 2.96484H6.44141C6.86523 2.96484 7.18652 2.65723 7.18652 2.22656C7.18652 1.7959 6.87207 1.48145 6.44141 1.48145L2.64746 1.48145C1.86816 1.48145 1.41699 1.93262 1.41699 2.71875L1.41699 6.45801C1.41699 6.88184 1.73828 7.19629 2.16895 7.19629ZM9.55176 14.6543H13.3389C14.125 14.6543 14.5762 14.2031 14.5762 13.417V9.67773C14.5762 9.25391 14.2549 8.93945 13.8242 8.93945C13.4004 8.93945 13.0859 9.24707 13.0859 9.67773V10.1699L13.2295 12.3164L11.6299 10.6348L9.66113 8.65234C9.52441 8.50195 9.33984 8.43359 9.1416 8.43359C8.68359 8.43359 8.35547 8.74121 8.35547 9.19922C8.35547 9.41113 8.43066 9.5957 8.57422 9.73926L10.5566 11.7148L12.2383 13.3145L10.0781 13.1709H9.55176C9.12793 13.1709 8.80664 13.4785 8.80664 13.9092C8.80664 14.3398 9.12109 14.6543 9.55176 14.6543Z" />
              </svg>
            </div>
          </div>
          <div style={{ position: 'relative' }} className={styles.hover}>
            <div
              className="notion-focusable"
              role="button"
              tabIndex={0}
              style={{
                userSelect: 'none',
                transition: 'background 20ms ease-in 0s',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                borderRadius: 3,
                height: 24,
                width: 24,
                padding: 0,
              }}
            >
              <svg
                viewBox="0 0 16 16"
                className="peekModeCenter"
                style={{
                  width: 14,
                  height: 14,
                  display: 'block',
                  fill: 'rgba(55, 53, 47, 0.45)',
                  flexShrink: 0,
                  backfaceVisibility: 'hidden',
                }}
              >
                <path d="M2.1416 14.4492H13.8516C15.3281 14.4492 16.0938 13.6904 16.0938 12.2344V3.9082C16.0938 2.45215 15.3281 1.69336 13.8516 1.69336H2.1416C0.665039 1.69336 -0.100586 2.44531 -0.100586 3.9082V12.2344C-0.100586 13.6904 0.665039 14.4492 2.1416 14.4492ZM2.22363 13.1094C1.58789 13.1094 1.23926 12.7812 1.23926 12.1182V4.02441C1.23926 3.36133 1.58789 3.02637 2.22363 3.02637H13.7695C14.3984 3.02637 14.7539 3.36133 14.7539 4.02441V12.1182C14.7539 12.7812 14.3984 13.1094 13.7695 13.1094H2.22363ZM4.33594 11.0654H11.6504C12.0742 11.0654 12.2588 10.8809 12.2588 10.4502V5.69238C12.2588 5.25488 12.0742 5.07715 11.6504 5.07715H4.33594C3.91211 5.07715 3.72754 5.25488 3.72754 5.69238V10.4502C3.72754 10.8809 3.91211 11.0654 4.33594 11.0654Z" />
              </svg>
            </div>
          </div>
          <div
            style={{
              height: 14,
              width: 1,
              marginLeft: 6,
              marginRight: 6,
              background: 'rgba(55, 53, 47, 0.16)',
            }}
          />
          <Up />
          <Down />
        </div>
        <div style={{ flexGrow: 1, flexShrink: 1 }} />
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            flexGrow: 0,
            flexShrink: 0,
            zIndex: 1,
          }}
        />
      </div>
      <div style={{ width: 'calc(100% - 0px)', userSelect: 'none' }} />
    </div>
  );
}
