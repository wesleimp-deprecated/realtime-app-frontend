import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
	align-items: stretch;
`;

const colors = {
	border: 'rgba(255,255,255,.2)',
	backgound: 'rgba(40,40,40,.5)',
	color: 'rgba(255,255,255,.9)',
}

export const Form = styled.form`
	width: 100%;
	background: rgba(255,255,255, .1);
	padding: 20px;
	border-radius: 5px;
	margin: 30px 0;

	textarea {
		/* border: 2px solid rgba(255,255,255,.2); */
		border: 2px solid ${colors.border};
		background-color: ${colors.backgound};
		border-radius: 5px;
		color: ${colors.color};
		font-size: 15px;
		font-family: inherit;
		padding: 15px;
		width: 100%;
		resize: none;
	}

	button {
		float: right;
		border: solid 2px ${colors.border};
		border-radius: 5px;
		padding: 7px 25px;
		margin: 5px;
		background-color: ${colors.backgound};
		color: ${colors.color};
		font-size: 15px;
	}
`;