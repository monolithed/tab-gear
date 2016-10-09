import tabs from './tabs';
import locale from '../../_locales/ru/messages.json';

chrome.tabs.query.yields(tabs);
chrome.tabs.remove.yields(tabs);
chrome.tabs.create.yields(tabs);
// chrome.tabs.discard.yields(tabs);
chrome.tabs.highlight.yields(tabs);

chrome.i18n.getMessage = (key, positions = []) => {
	let { message } = locale[key];

	return message.replace(/\$(\d+)/g, (source, match) => {
		return  `${positions[match - 1]}` || source;
	});
};
