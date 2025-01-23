import React from 'react';
import './JoinButton.css';

function JoinButton({ href = '/join-the-family', text = 'Join the Family' }) {
  return (
    <a href={href} className="join-btn">
      {text}
    </a>
  );
}

export default JoinButton;
