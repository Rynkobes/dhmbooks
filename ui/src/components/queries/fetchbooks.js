import gql from 'graphql-tag';

export default gql`
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
