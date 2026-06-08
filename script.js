// Category name to CSS modifier class mapping
const categoryMap = {
  Reaction: 'reaction',
  Memory:   'memory',
  Verbal:   'verbal',
  Visual:   'visual',
};

// Fetch data from data.json and dynamically build the summary list
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('summary-list');

    data.forEach(item => {
      const { category, score, icon } = item;
      const cls = categoryMap[category];

      // Create list item
      const li = document.createElement('li');
      li.classList.add('summary__item', `summary__item--${cls}`);

      // Build inner HTML
      li.innerHTML = `
        <div class="summary__item-left">
          <img class="summary__item-icon" src="${icon}" alt="${category} icon">
          <span class="summary__item-label">${category}</span>
        </div>
        <p class="summary__item-score">${score} <span>/ 100</span></p>
      `;

      list.appendChild(li);
    });
  })
  .catch(err => console.error('Could not load data.json:', err));
