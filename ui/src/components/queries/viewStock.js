import gql from 'graphql-tag';

export default gql`
	{
		Country {
			name
			warehouse {
				name
				warehouseID
				books {
					bookID
					title
					language {
						language
					}
					stock {
						balance
					}
				}
			}
		}
	}
`;
