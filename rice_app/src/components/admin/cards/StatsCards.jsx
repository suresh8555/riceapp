
import React from 'react';

const StatsCards = ({ title, value, icon, iconColor, percent, isPositive }) => {
  return (
    <div className="card shadow-sm border-0 h-100 " style={{ background: "blue", color: "black"}}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <small className="text-white">{title}</small>
          <h4 className="fw-bold m-0">
            {value}{' '}
            <span className={`fs-6 ms-2 ${isPositive ? 'text-success' : 'text-danger'}`}>
              {isPositive ? `+${percent}%` : `-${percent}%`}
            </span>
          </h4>
        </div>
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: '45px',
            height: '45px',
            backgroundColor: iconColor,
            color: '#fff',
          }}
        >
          <i className={`bi ${icon} fs-5`}></i>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
