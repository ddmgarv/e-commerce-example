import React from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/utils";
import swal from "sweetalert";
import "./signUp.scss";

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async handleSubmit(event) {
		event.preventDefault();
		const { password, email, displayName, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			return swal("Aviso", "Las contraseñas no coinciden", "warning");
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {
				displayName,
			});
			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
			swal("Success", "Your user have been created.", "success");
		} catch (error) {
			console.log(error);
			swal({
				title: "Error",
				text: "There was an error trying to create the user.",
				icon: "warning",
				dangerMode: true,
			});
		}
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="signUp">
				<h2 className="signUp--title">I do not have an account</h2>
				<form action="" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						value={displayName}
						name="displayName"
						id="displayName"
						handleChange={this.handleChange}
						label="Name"
						required
					/>
					<FormInput
						type="email"
						value={email}
						name="email"
						id="email"
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						value={password}
						name="password"
						id="password"
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						value={confirmPassword}
						name="confirmPassword"
						id="confirmPassword"
						handleChange={this.handleChange}
						label="Confirm password"
						required
					/>
					<CustomButton children="Sign Up" type="submit" />
				</form>
			</div>
		);
	}
}

export default SignUp;
