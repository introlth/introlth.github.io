document.addEventListener('DOMContentLoaded', () => {
  const movieListLink = document.getElementById('movie-list');
  const userRecommendationsLink = document.getElementById('user-recommendations');
  const contentSection = document.getElementById('content');


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
