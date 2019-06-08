import React, { Component } from 'react';
import Link from 'next/link';
import { graphql } from 'react-apollo';
import viewStock from './queries/viewStock';
import Section from './warehouseSelect';
import { Select, Label, Button, Input, Wrapper, OtherWrapper } from './BookStyles.js';
import warehouseIn from './queries/warehouseIn';
import InboundMutation from './queries/TransactionMutations';

class WarehouseInbound extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: [
				{
					bookTitle: '',
					quantity: 0
				}
			],
			title: '',
			warehouseOption: 'Parchment House',
			date: '',
			language: '',
			quantity: 0
		};

		console.log(this.props);
		this.addbook = this.addbook.bind(this);
		this.warehousePick = this.warehousePick.bind(this);
		this.submitQuantities = this.submitQuantities.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.bookSelection = this.bookSelection.bind(this);
		this.languageSelection = this.languageSelection.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDate = this.handleDate.bind(this);
		this.preventEnterSubmit = this.preventEnterSubmit.bind(this);
	}

	addbook(e) {
		e.preventDefault();
		// if (this.state.bookQty === 0) {
		// 	alert('Enter Quantity');
		// } else {
		this.setState({
			product: [ ...this.state.product, '' ]
		});
	}

	preventEnterSubmit(e) {
		if (e.key === 'Enter') e.preventDefault();
	}

	//What happens when a warehouse is selected
	warehousePick(e) {
		this.setState({
			warehouseOption: e.target.value
		});
	}
	WarehouseList() {
		return (
			<Section>
				<Select onChange={this.warehousePick} value={this.state.warehouseOption}>
					{this.props.data.Warehouse.map((warehouseName) => {
						return <option key={warehouseName.warehouseID}>{warehouseName.name}</option>;
					})}
				</Select>
			</Section>
		);
	}
	booksDropdown() {
		let option = this.state.warehouseOption;
		let pick = this.props.data.Warehouse;
		let Index = pick.findIndex((name) => {
			return option === name.name;
		});

		if (option === pick[Index].name) {
			return (
				<div>
					<Select margin="20px 1.2cm 0 0" onChange={this.bookSelection}>
						{pick[Index].books.map((book) => {
							return <option key={book.bookID}>{book.title}</option>;
						})}
					</Select>
					<Select margin="20px 1cm 0 0" onChange={this.languageSelection}>
						{this.props.data.Language.map((lang) => {
							return <option key={lang.language}>{lang.language}</option>;
						})}
					</Select>
				</div>
			);
		}
	}

	// what happens when product is selected
	bookSelection(e) {
		this.setState({
			title: e.target.value
		});
		//check if value in product field is being assigned to bookTitle
		console.log(this.state.title);
	}

	// what happens when language is selected
	languageSelection(e) {
		this.setState({
			language: e.target.value
		});
		console.log(this.state.language);
	}
	generateInput() {
		return this.state.product.map((item, index) => {
			return (
				<OtherWrapper key={index} onClick={this.handleOutClick}>
					{this.booksDropdown()}
					<Input
						type="number"
						mtop="20px"
						onBlur={this.submitQuantities}
						onChange={this.onInputChange}
						onkeypress={this.preventEnterSubmit}
					/>
				</OtherWrapper>
			);
		});
	}

	onInputChange(e) {
		let option = this.state.warehouseOption;
		let pick = this.props.data.Warehouse;
		let Index = pick.findIndex((warehouse) => {
			return option === warehouse.name;
		});
		if (this.state.title === '') {
			this.setState({
				title: pick[Index].books[0].title
			});
		}
		if (this.state.language === '') {
			this.setState({
				language: pick[Index].books[0].language.language
			});
		}
		this.setState({
			quantity: parseInt(e.target.value)
		});
	}
	handleDate(e) {
		this.setState({
			date: e.target.value
		});
	}
	submitQuantities(e) {
		if (this.state.date === '') {
			alert('select date');
		} else if (typeof this.state.quantity === 'number') {
			this.props.mutate({
				variables: {
					title: this.state.title,
					warehousename: this.state.warehouseOption,
					quantity: parseInt(this.state.quantity),
					date: this.state.date,
					language: this.state.language
				},
				refetchQueries: [ { query: viewStock } ]
			});
		} else {
			// throw Error ('Please Provide numbers only in Quantity')
			console.log(typeof this.state.quantity);
		}
		console.log(this.state.title);
		console.log(this.state.warehouseOption);
		console.log(this.state.quantity);
		console.log(this.state.date);
		console.log(this.state.language);
	}

	handleSubmit(e) {
		// e.preventDefault();
		// this.submitQuantities();
	}

	render() {
		if (this.props.data.loading) {
			return <div>loading...</div>;
		}
		return (
			<Wrapper>
				<form>
					<h3>Transaction Inbound</h3>
					<OtherWrapper className="top">
						{this.WarehouseList()}
						<Input pright="1.0cm" type="date" onChange={this.handleDate} />
					</OtherWrapper>

					<OtherWrapper>
						<Label align="center">Product</Label>
						<Label align="center">Language</Label>
						<Label align="center">Quantity</Label>
					</OtherWrapper>
					{this.generateInput()}

					<Button marginr="0.4cm" onClick={this.addbook}>
						Add Item
					</Button>
					<Link href="/">
						<Button event={this.handleSubmit}>Submit</Button>
					</Link>
				</form>
			</Wrapper>
		);
	}
}

export default graphql(warehouseIn)(graphql(InboundMutation)(WarehouseInbound));
