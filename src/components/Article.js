import React from 'react';

function Article({ title, preview, minutes, date = "January 1, 1970" }) {
  let readingTime;
  if (minutes < 30) {
    const cups = Math.ceil(minutes/5);
    readingTime = '☕️'.repeat(cups) + `${minutes} min read`;
  } else {
    const boxes = Math.ceil(minutes / 10);
    readingTime = '🍱'.repeat(boxes) + `${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{readingTime}</p>

    </article>
  )
}

export default Article;