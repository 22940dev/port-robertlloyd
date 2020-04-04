const {DateTime} = require('luxon');

module.exports = function () {
  const now = new Date();

  function * range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  /**
   * Create an array of years
   *
   * @param {Number} startDate e.g. '2008-09'
   * @param {Number} endDate e.g. '2020-04'
   * @return {String} ['2008',…,'2020']
   */
  function generateYears(startDate, endDate) {
    const firstYear = new Date(startDate).getFullYear();
    const lastYear = new Date(endDate).getFullYear();

    return [...range(firstYear, lastYear)].map(String);
  }

  /**
   * Create an array of months
   *
   * @param {String} startDate e.g. '2008-09'
   * @param {String} endDate e.g. '2020-04'
   * @return {String} ['2008-09',…,'2020-01']
   */
  function generateMonths(startDate, endDate) {
    const firstYear = new Date(startDate).getFullYear();
    const firstMonth = new Date(startDate).getMonth() + 1;
    const lastYear = new Date(endDate).getFullYear();
    const lastMonth = new Date(endDate).getMonth() + 1;

    const dates = [];
    const years = [...range(firstYear, lastYear)].map(String);
    years.forEach((year, i) => {
      let months = [];
      if (i === 0) {
        months = [...range(firstMonth, 12)];
      } else if (i === years.length - 1) {
        months = [...range(1, lastMonth)];
      } else {
        months = [...range(1, 12)];
      }

      months = months.map(month => String(month).padStart(2, '0'));
      months.forEach(month => dates.push(`${year}-${month}`));
    });

    return dates;
  }

  // Year archives
  const archivedYears = generateYears('2008-09', now);
  const yearArchives = archivedYears.map(year => {
    return {
      date: new Date(year),
      fileSlug: year,
      url: `/${year}/`,
      data: {
        title: year
      }
    };
  });

  // Month archives
  const archivedMonths = generateMonths('2008-09', now);
  const monthArchives = archivedMonths.map(month => {
    const date = DateTime.fromISO(month);

    return {
      date: new Date(month),
      fileSlug: date.toFormat('MM'),
      url: date.toFormat('/yyyy/MM/'),
      data: {
        date: date.toFormat('yyyy-MM'),
        title: date.toFormat('MMMM yyyy')
      }
    };
  });

  return {
    years: yearArchives,
    months: monthArchives
  };
};
