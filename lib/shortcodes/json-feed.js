const path = require('path');
const getMimeType = require('mime-type-check');
const absoluteUrl = require('../filters/absolute-url');
const markdown = require('../filters/markdown');
const templateContentToFeedHtml = require('../filters/template-content-to-feed-html');

/**
 * Generate a JSON Feed
 *
 * @param {Array} collection Collection to use
 * @param {object} app Application data
 * @param {number} n Number of items to include
 * @returns {object} JSON Feed
 * @see https://jsonfeed.org/version/1.1
 */
module.exports = (collection, app, n = 10) => {
  const items = collection.slice(0, n);

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: app.title,
    description: app.description,
    home_page_url: app.url,
    feed_url: absoluteUrl('feed.json', app.url),
    favicon: absoluteUrl(app.favicon, app.url),
    icon: absoluteUrl(app.icon, app.url),
    language: app.language,
    authors: [{
      name: app.author.name,
      url: app.author.url,
      avatar: app.author.avatar
    }],
    items: []
  };

  for (const item of items) {
    feed.items.push({
      id: absoluteUrl(item.url, app.url),
      url: absoluteUrl(item.url, app.url),
      date_published: item.date,
      title: item.data.title,
      summary: markdown(item.data.summary, 'inline'),
      content_html: templateContentToFeedHtml(item),
      tags: item.data.category,
      external_url: item.data.bookmarkOf || item.data.inReplyTo || item.data.url,
      ...(item.data.photo && {attachments: item.data.photo.map(photo => ({
        url: absoluteUrl(photo.url, app.url),
        title: photo.alt,
        mime_type: getMimeType(path.extname(photo.url).slice(1))[0]
      }))})
    });
  }

  const json = JSON.stringify(feed, null, 2);

  return json;
};
