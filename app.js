// Get Temp HTML
const temp = document.getElementById('temp');
const htmlString = new XMLSerializer().serializeToString(
	temp.contentWindow.document
);
document.getElementById('editor').innerHTML = htmlString;

// Define an extended mixed-mode that understands vbscript and
// leaves mustache/handlebars embedded templates in html mode
const myModeSpec = {
	name: 'htmlmixed',
	tags: {
		style: [
			['type', /^text\/(x-)?scss$/, 'text/x-scss'],
			[null, null, 'css'],
		],
		custom: [[null, null, 'customMode']],
	},
};

let delay;
const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: myModeSpec,
	theme: 'dracula',
	lineNumbers: true,
	autoCloseTags: true,
	lineWrapping: true,
});

editor.on('change', () => {
	clearTimeout(delay);
	delay = setTimeout(updatePreview, 300);
});

const updatePreview = () => {
	const previewFrame = document.getElementById('preview');
	const preview =
		previewFrame.contentDocument || previewFrame.contentWindow.document;
	preview.open();
	preview.write(editor.getValue());
	preview.close();
};

setTimeout(updatePreview, 300);
