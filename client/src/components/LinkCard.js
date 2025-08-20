import React from "react";

export const LinkCard = ({ link }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{link.title}</span>
        <p>
          <strong>
            Original URL:
            <a href={link.from} target="_blank" rel="noopener noreferrer">
              {link.from}
            </a>
          </strong>
        </p>
        <p>
          <strong>
            Shortened URL:
            <a href={link.to} target="_blank" rel="noopener noreferrer">
              {link.to}
            </a>
          </strong>
        </p>
        <p>
          <strong>Amount of clicks:</strong> {link.clicks}
        </p>
        <p>
          <strong>Date:</strong> {new Date(link.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};
