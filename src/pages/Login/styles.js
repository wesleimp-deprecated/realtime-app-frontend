import styled from 'styled-components';

export const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Form = styled.form`
	margin: 20px 0 0;
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

	input {
		background: #fff;
		border: 1px solid #ddd;
		border-radius: 5px;
		height: 44px;
		padding: 0 15px;
		font-size: 14px;
	}

	button {
		margin: 10px 0 0;
		background: #4bb0ee;
		border-radius: 5px;
		height: 44px;
		border: 0;
		color: #fff;
		font-weight: bold;
		cursor: pointer;
		font-size: 16px;
		text-transform: uppercase;

		&:hover {
			background: #42a1db;
		}
	}


`;

