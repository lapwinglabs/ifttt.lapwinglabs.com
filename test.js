var res = {"title":"Iconic Designer Massimo Vignelli on Intellectual Elegance, Education, and Love | Brain Pickings","description":"{ \\\"url\\\": \\\"http://ift.tt/1IaslJa\\\", \\\"title\\\": \\\"IFTTT, Twitter\\\", \\\"description\\\": \\\"The great @Vignelli would've been 84 today – here is his timeless wisdom on \"intellectual elegance” and love http://t.co/dQWLkIM7QP\n\n\t— Maria Popova (@brainpicker) January 11, 2015\\\", \\\"time\\\": \\\"January 10, 2015 at 05:48PM\\\" }","tags":[{"string":"IFTTT"},{"string":"Twitter"}],"post_status":"publish","user":{"user":"matt","pass":"mattym"}}
var des = res.description.replace(/([^\\])"/g, '$1\\\\\"').replace(/\\"/g, '\"');
var data = JSON.parse(escape(des));

function escape(str) {
  return str
    .replace(/[\b]/g, '\\b')
    .replace(/[\f]/g, '\\f')
    .replace(/[\n]/g, '\\n')
    .replace(/[\r]/g, '\\r')
    .replace(/[\t]/g, '\\t');
};
