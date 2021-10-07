import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import { fontSize, fontWeight } from './typography';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
    overflow-x: hidden;
    color: ${theme.color.white};
    min-height: 100vh;
  }

  html {
    font-size: 16px;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.color.white};
    background-color: ${theme.color.gray[900]};
    transition: all 0.3s ease;
    text-align: center;
  }


  h1, h2, h3, h4, h5, h6 {
		color: ${theme.color.gray[900]};
	}

  p {
    font-size: 1.25rem; 
    font-weight: ${theme.fontWeight.normal};
    line-height: 175%;
  }
  
  a {
		background-color: transparent;
		color: ${theme.color.gray[900]};

		&:hover {
			text-decoration: none;
		}
	}

  a, button {
    cursor: pointer;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    font-size: ${fontSize['lg']};
    font-weight: ${fontWeight.semibold};
  }

  ul {
		list-style: none;
		padding: 0;
	}

.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main {
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

`;
