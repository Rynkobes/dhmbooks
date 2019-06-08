import gql from 'graphql-tag';

export default gql`
	mutation newbook($warehouseID: ID!, $title: String, $language: String) {
		addBookCreate(warehouseID: $warehouseID, title: $title, language: $language) {
			title
			bookID
			warehouse {
				name
			}
			language {
				language
			}
			stock {
				balance
			}
		}
	}
`;
