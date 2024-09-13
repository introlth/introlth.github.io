document.addEventListener('DOMContentLoaded', () => {
  const movieListLink = document.getElementById('movie-list');
  const userRecommendationsLink = document.getElementById('user-recommendations');
  const contentSection = document.getElementById('content');

  movieListLink.addEventListener('click', (event) => {
      event.preventDefault();
      contentSection.innerHTML = `
          <h2>천만 영화</h2>
          <ul>
              <li>극한직업</li>
              <li>신과함께</li>
              <li>명량</li>
              <li>기생충</li>
          </ul>
      `;
  });

  userRecommendationsLink.addEventListener('click', (event) => {
      event.preventDefault();
      contentSection.innerHTML = `
          <h2>사용자 추천</h2>
          <ul>
              <li>이태훈</li>
              <li>김현우</li>
              <li>장수현</li>
          </ul>
      `;
  });
});
