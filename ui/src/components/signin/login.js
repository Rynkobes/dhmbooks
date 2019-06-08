import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}
	allowTyping = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<div className="loginBody">
				<form className="form" onSubmit={this.handleSubmit}>
					<fieldset className="fieldset">
						<img src={fleetrecs_header_logo} alt="logo" height="55" />
						<h4 className="h4">Need an Account? Click here.</h4>

						<input
							className="input"
							name="email"
							type="text"
							placeholder="Email Address"
							value={this.state.email}
							onChange={(e) => this.allowTyping(e)}
						/>
						<br />

						<input
							className="input"
							name="password"
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={(e) => this.allowTyping(e)}
						/>
						<br />

						<br />
						<button className="button" disabled={!this.validateForm()}>
							LOGIN
							<FontAwesomeIcon icon={faSignInAlt} />
						</button>

						<p>Forgot your password ? Click here</p>
					</fieldset>
				</form>
			</div>
		);
	}
}
export default Login;
