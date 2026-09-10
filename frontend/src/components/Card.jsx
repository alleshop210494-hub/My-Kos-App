import React from 'react';

export default function Card({ title, children, style }) {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        padding: '15px',
        marginBottom: '15px',
        ...style,
      }}
    >
      {title && (
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
}
