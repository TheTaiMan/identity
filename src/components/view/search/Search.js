import React from 'react';

export default function Search() {
  return (
    <div
      className="notion-focusable"
      role="button"
      tabIndex={0}
      style={{
        userSelect: 'none',
        transition: 'background 20ms ease-in 0s',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        borderRadius: 3,
        height: 28,
        width: 28,
        padding: 6,
        fontSize: 14,
        color: 'rgba(55, 53, 47, 0.65)',
        fill: 'rgba(55, 53, 47, 0.45)',
        fontWeight: 400,
        lineHeight: 1,
      }}
    >
      <svg
        viewBox="0 0 16 16"
        className="collectionSearch"
        style={{
          width: 14,
          display: 'block',
          fill: 'rgba(55, 53, 47, 0.65)',
          flexShrink: 0,
          backfaceVisibility: 'hidden',
        }}
      >
        <path d="M0 6.35938C0 9.86719 2.85156 12.7188 6.35938 12.7188C7.66406 12.7188 8.85938 12.3203 9.85938 11.6406L13.4531 15.2344C13.6719 15.4609 13.9766 15.5625 14.2812 15.5625C14.9453 15.5625 15.4219 15.0625 15.4219 14.4141C15.4219 14.1016 15.3125 13.8125 15.1016 13.5938L11.5312 10.0156C12.2734 8.99219 12.7188 7.72656 12.7188 6.35938C12.7188 2.85156 9.86719 0 6.35938 0C2.85156 0 0 2.85156 0 6.35938ZM1.65625 6.35938C1.65625 3.76562 3.75781 1.65625 6.35938 1.65625C8.95312 1.65625 11.0625 3.76562 11.0625 6.35938C11.0625 8.95312 8.95312 11.0625 6.35938 11.0625C3.75781 11.0625 1.65625 8.95312 1.65625 6.35938Z" />
      </svg>
    </div>
  );
}
