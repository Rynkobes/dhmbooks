import gql from 'graphql-tag';

const OutboundMutation = gql`
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

const InboundMutation = gql`
	mutation Inbound($warehousename: String, $language: String, $title: String, $quantity: Int, $date: String) {
		transactionInbound(
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
export default (OutboundMutation, InboundMutation);
