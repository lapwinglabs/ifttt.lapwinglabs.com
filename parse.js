/**
 * Module Dependencies
 */

var extend = require('extend.js');
var isArray = Array.isArray;

/**
 * Expose `parse`
 */

module.exports = parse;

/**
 * Parse the data and return a JSON object
 *
 * @param {Object} obj
 * @return {Object}
 */

function parse(obj) {
  var data = obj.description.replace(/([^\\])"/g, '$1\\\\\"').replace(/\\"/g, '\"');
  data = JSON.parse(escape(data));

  // additional formatting
  data.title = obj.title || data.title;
  data.categories = format(obj.categories) || data.categories;
  data.tags = format(obj.tags) || data.tags;

  return data;
}

/**
 * Format
 *
 * @param {Mixed} obj
 * @param {Null|Array}
 */

function format(obj) {
  if (!obj) return null;
  else if (isArray(obj)) return obj.map(function(item) { return item.string; });
  else if ('object' == typeof obj) return [obj.string];
  return null;
}

/**
 * Escape the newline characters
 *
 * @param {String} str
 * @return {String}
 */

function escape(str) {
  return str
    .replace(/[\b]/g, '\\b')
    .replace(/[\f]/g, '\\f')
    .replace(/[\n]/g, '\\n')
    .replace(/[\r]/g, '\\r')
    .replace(/[\t]/g, '\\t');
};
