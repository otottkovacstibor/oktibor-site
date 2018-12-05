const fetch = require('node-fetch');
const { parse } = require('node-html-parser');
const { document } = require('html-element');
const parser = require('github-calendar-parser');
const formatoid = require('formatoid');
const addSubtractDate = require('add-subtract-date');
const $ = require('elly');

const DATE_FORMAT1 = 'MMM D, YYYY';
const DATE_FORMAT2 = 'MMMM D';

const GitHubCalendar = async (username) => {
  try {
    const resolveGitHubLinks = content => content.replace(/href="\/(.*?)"/g, (m, link) => `href="https://github.com/${link}"`);

    const hideOverviewGraph = (content) => {
      const overviewClass = 'col-md-6 float-left pl-3 border-left';
      const activityClass = 'd-flex flex-column col-md-6 pr-5 float-left';
      return content
        .replace(overviewClass, `${overviewClass} d-none`)
        .replace(activityClass, activityClass.replace('col-md-6', 'col-md-12'));
    };

    const getCurrentStreakInfo = (currentStreak, currentStreakRange, lastContributed) => {
      if (currentStreak) return `${formatoid(currentStreakRange[0], DATE_FORMAT2)} – ${formatoid(currentStreakRange[1], DATE_FORMAT2)}`;
      if (lastContributed) return `Last contributed in ${formatoid(lastContributed, DATE_FORMAT2)}.`;
      return 'Rock - Hard Place';
    };

    const getLongestStreakInfo = (longestStreak, longestStreakRange, lastContributed) => {
      if (longestStreak) return `${formatoid(longestStreakRange[0], DATE_FORMAT2)} – ${formatoid(longestStreakRange[1], DATE_FORMAT2)}`;
      if (lastContributed) return `Last contributed in ${formatoid(lastContributed, DATE_FORMAT2)}.`;
      return 'Rock - Hard Place';
    };

    const response = await fetch(`https://github.com/users/${username}/contributions`);
    const text = await response.text();
    const responseHtml = parse(text);
    const contributions = responseHtml.querySelector('.js-yearly-contributions');
    const { innerHTML } = contributions;
    const { outerHTML } = $('svg', contributions);

    const {
      current_streak: currentStreak,
      current_streak_range: currentStreakRange,
      last_contributed: lastContributed,
      longest_streak: longestStreak,
      longest_streak_range: longestStreakRange,
      last_year: lastYear
    } = parser(outerHTML);

    const firstCol = document.createElement('div');
    firstCol.setAttribute('class', 'contrib-column contrib-column-first table-column');
    firstCol.innerHTML = `<span class='text-muted'>Contributions in the last year</span>
    <span class='contrib-number'>${lastYear} total</span>
    <span class='text-muted'>${formatoid(addSubtractDate.subtract(new Date(), 1, 'year'), DATE_FORMAT1)} – ${formatoid(new Date(), DATE_FORMAT1)}</span>`;

    const secondCol = document.createElement('div');
    secondCol.setAttribute('class', 'contrib-column table-column');
    secondCol.innerHTML = `<span class='text-muted'>Longest streak</span>
    <span class='contrib-number'>${longestStreak} days</span>
    <span class='text-muted'>${getLongestStreakInfo(longestStreak, longestStreakRange, lastContributed)}</span>`;

    const thirdCol = document.createElement('div');
    thirdCol.setAttribute('class', 'contrib-column table-column');
    thirdCol.innerHTML = `<span class='text-muted'>Current streak</span>
    <span class='contrib-number'>${currentStreak} days</span>
    <span class='text-muted'>${getCurrentStreakInfo(currentStreak, currentStreakRange, lastContributed)}</span>`;


    const div = document.createElement('div');
    div.innerHTML = innerHTML;
    div.appendChild(firstCol);
    div.appendChild(secondCol);
    div.appendChild(thirdCol);

    return hideOverviewGraph(resolveGitHubLinks(div.innerHTML));
  } catch (e) {
    console.log('Error: ', e);
    throw new Error(e);
  }
};

module.exports = GitHubCalendar;
