import React from 'react';
import { graphql } from 'react-apollo';
import Styledsection from './Styledsection';
import { TopSection, Wrapper, Table } from './viewStockComponents';
import { Select, Label } from './BookStyles';
import viewStock from './queries/viewStock';

class DisplayStock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialData: [],
			country: '---',
			option: ''
			// countryIndex: 0
		};
		this.handlePick = this.handlePick.bind(this);
	}

	displayCountry = () => {
		const data = this.props.data.Country;
		if (data === undefined) {
			return (
				<TopSection>
					<Label right="-1.5cm"> Select Country</Label>
					<Select>
						<option>loading...</option>
					</Select>
				</TopSection>
			);
		}
		return (
			<div>
				<TopSection>
					<Label right="-1.5cm">Select Country</Label>
					<Select onChange={this.countryPick}>
						{data.map((country) => <option key={country.name}> {country.name} </option>)}
					</Select>
				</TopSection>
			</div>
		);
	};

	countryPick = (e) => {
		this.setState({
			country: e.target.value,
			option: ''
		});
	};

	displayWarehouse(e) {
		let pick = this.state.initialData;
		let countryOption = this.state.country;
		let countryIndex = pick.findIndex((countryName, index) => {
			return countryOption === countryName.name;
		});
		if (
			countryIndex === -1 ||
			pick[countryIndex].warehouse[0] === undefined ||
			pick[countryIndex].warehouse[0].books === undefined
		) {
			return (
				<Wrapper>
					<Styledsection bgcolor="#4ea9ad">
						<TopSection>{this.displayCountry()}</TopSection>
					</Styledsection>
				</Wrapper>
			);
		}
		return (
			<Wrapper>
				<Styledsection bgcolor="#4ea9ad">
					<TopSection>
						{this.displayCountry()}
						<Label right="-0.7cm">Select Warehouse</Label>
						<Select onChange={this.handlePick}>
							{pick[countryIndex].warehouse.map((warehousename) => {
								return <option key={warehousename.warehouseID}>{warehousename.name}</option>;
							})}
						</Select>
					</TopSection>
				</Styledsection>
				{this.displayBooks()}
			</Wrapper>
		);
	}

	handlePick(e) {
		// console.log(this.state.option);
		this.setState({ option: e.target.value });
	}

	displayBooks() {
		console.log(this.state);
		let pick = this.state.initialData;
		let countryOption = this.state.country;
		let Index = pick.findIndex((countryName) => {
			return countryOption === countryName.name;
		});
		let warehousePick = this.state.option;
		let warehouseData = this.props.data.Country[Index];
		let warehouseIndex = warehouseData.warehouse.findIndex((name, index) => {
			return warehousePick === name.name;
		});
		if (warehouseIndex !== -1) {
			return (
				<Table>
					<tbody>
						<tr>
							<th>Title</th>
							<th>Stock</th>
							<th>Language</th>
						</tr>
						{warehouseData.warehouse[warehouseIndex].books.map((titles) => {
							return (
								<tr key={titles.bookID}>
									<td>{titles.title}</td>
									<td>{titles.stock.balance}</td>
									<td>{titles.language.language}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			);
		} else if (pick[Index].warehouse[0].books === undefined) {
			return (
				<Table>
					<tbody>
						<tr>
							<th>Title</th>
							<th>Stock</th>
							<th>Language</th>
						</tr>
					</tbody>
				</Table>
			);
		} else if (warehousePick === '') {
			return (
				<Table>
					<tbody>
						<tr>
							<th>Title</th>
							<th>Stock</th>
							<th>Language</th>
						</tr>
						{warehouseData.warehouse[0].books.map((titles) => {
							return (
								<tr key={titles.bookID}>
									<td>{titles.title}</td>
									<td>{titles.stock.balance}</td>
									<td>{titles.language.language}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			);
		}
	}

	componentDidUpdate() {
		let fetchedData = this.props.data.Country;
		if (this.state.country === '---') {
			this.setState({
				country: fetchedData[0].name,
				initialData: this.props.data.Country
			});
		}
	}

	render() {
		return <Wrapper marginLeft="200px">{this.displayWarehouse()}</Wrapper>;
	}
}

export default graphql(viewStock)(DisplayStock);
