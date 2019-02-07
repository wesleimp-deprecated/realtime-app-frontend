import {
	createGlobalStyle
} from 'styled-components';

export default createGlobalStyle `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
			"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
			sans-serif;
		font-size: 14px;
		background: #282828;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}
	html, body, #root {
		height: 100%;
	}
`