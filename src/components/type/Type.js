import React from 'react';
import typeStyles from './Type.module.css';
import Tag from './tag/Tag';

export default function Type() {
  return (
    <div className={typeStyles.container}>
      <div className={typeStyles['container-second']}>
        <div className={typeStyles['container-third']}>
          <div style={{ display: 'flex', minWidth: 0 }}>
            <Tag type={'tech'} />
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
  );
}
