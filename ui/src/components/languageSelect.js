import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Select } from './BookStyles';

const SelectLanguage = (props) => {
	console.log(props);
	if (props.data.loading) {
		return <div>loading...</div>;
	}
	return (
		<Select>
			{props.data.Language.map((lang) => {
				return <option key={lang.language}>{lang.language}</option>;
			})}
		</Select>
	);
};

const query = gql`
	{
		Language {
			language
		}
		Warehouse {
			name
			warehouseID
		}
	}
`;

export default graphql(query)(SelectLanguage);
