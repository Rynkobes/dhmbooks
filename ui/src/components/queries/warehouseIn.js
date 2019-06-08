import gql from 'graphql-tag';

export default gql`
	{
		Warehouse {
			name
			warehouseID
			books {
				bookID
				title
				stock {
					balance
				}
				language {
					language
				}
			}
		}
		Language {
			language
		}
	}
`;
