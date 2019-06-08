import gql from 'graphql-tag';

export default gql`
	mutation Outbound($warehousename: String, $language: String, $title: String, $quantity: Int, $date: String) {
		transactionOutbound(
			warehousename: $warehousename
			title: $title
			language: $language
			quantity: $quantity
			date: $date
		) {
			bookID
		}
	}
`;
