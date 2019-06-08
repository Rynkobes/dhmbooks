import React from 'react';
import { graphql } from 'react-apollo';
import fetchbooks from './queries/fetchbooks';
import bookcreate from './queries/bookCreate';
import SelectLanguage from './languageSelect';
import styled from 'styled-components';
import { Wrapper, Section, Select, Input, Button, Label } from './BookStyles';

const Title = styled.h3`text-align: right;`;

class BookCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			warehouseOption: '',
			language: '',
			warehouseID: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.langPick = this.langPick.bind(this);
		this.titleInput = this.titleInput.bind(this);
	}

	selectWarehouse() {
		return (
			<Select onChange={this.handlePick} value={this.state.warehouseOption}>
				{this.props.data.Warehouse.map((warehouseName) => {
					return <option key={warehouseName.warehouseID}>{warehouseName.name}</option>;
				})}
			</Select>
		);
	}

	handlePick(e) {
		this.setState({
			warehouseOption: e.target.value
		});
		let selection = e.target.value;
		let pick = this.props.data.Warehouse;
		let result = pick.findIndex((warehousename, index) => {
			return warehousename.name === selection;
		});

		if (selection === pick[result].name) {
			console.log(this.state.warehouseOption);
			console.log(this.state.warehouseID);
			console.log(this.setState.language);
			this.setState({
				warehouseOption: pick[result].name,
				warehouseID: pick[result].warehouseID
			});
		} else {
			this.setState({
				warehouseOption: pick[result].name,
				warehouseID: pick[result].warehouseID
			});
			console.log('correct the logic above');
		}
	}

	langPick(event) {
		this.setState({
			language: event.target.value
		});
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.mutate({
			variables: {
				title: this.state.title,
				language: this.state.language,
				warehouseID: this.state.warehouseID,
				refetchQueries: [ { query: fetchbooks } ]
			}
		});
		this.setState({
			title: ''
		});
		// console.log(this.state);
	}
	titleInput(e) {
		this.setState({ title: e.target.value });
		this.initialState();
	}
	initialState() {
		if (this.state.warehouseOption === '') {
			this.setState({
				warehouseOption: this.props.data.Warehouse[0].name,
				warehouseID: this.props.data.Warehouse[0].warehouseID
			});

			if (this.state.language === '') {
				this.setState({ language: this.props.data.Language[0].language });
			}
		}
	}

	render() {
		if (this.props.data.loading) {
			return <div>loading...</div>;
		}
		return (
			<Wrapper>
				<form onSubmit={this.onSubmit}>
					<Title>ADD TITLE TO WAREHOUSE</Title>
					<Section>
						<Label>Select Warehouse</Label>
						{this.selectWarehouse()}
					</Section>
					<br />
					<Section>
						<Label>Enter Book Title</Label>
						<Input type="text" name="title" value={this.state.title} onChange={this.titleInput} />
					</Section>
					<br />
					<Section onChange={this.langPick}>
						<Label>Select Language</Label>
						<SelectLanguage
							// onChange={(e) => this.setState({ language: e.target.language })}
							value={this.langPick}
						/>
					</Section>
					<br />
					<Section>
						<Button onClick={this.onSubmit}>Submit</Button>
					</Section>
				</form>
			</Wrapper>
		);
	}
}

export default graphql(fetchbooks)(graphql(bookcreate)(BookCreate));
