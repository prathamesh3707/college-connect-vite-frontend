/* eslint-disable no-undef */
import React from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import chatImg from "../assets/chat.webp";
import moment from "moment";

import Message from "./Message";
const baseUrl = "https://college-connect-backend.onrender.com";

function Discussions() {
	// const [message,setMessage] React.const [state, setstate] = useState(initialState)
	// const sendMessage=()=>{

	// }

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("UserToken"))
	);

	const [newMsg, setNewMsg] = useState("");

	const [message, setMessage] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios
			.get(`${baseUrl}/posts/getmsgs`)
			.then((res) => {
				// console.log(res.data)
				setMessage(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [message]);

	const handleGoogleLogin = async (res) => {
		let userObject = res?.credential;

		if (userObject) {
			const userData = jwtDecode(userObject);

			const data = {
				email: userData.email,
				name: userData.given_name + " " + userData.family_name,
				picture: userData.picture,
			};

			axios
				.post(`${baseUrl}/auth/userauth`, data)
				.then((res) => {
					// console.log(res);
					window.localStorage.setItem("UserToken", JSON.stringify(res.data));
					setUser(res.data);
					location.reload();
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	useEffect(() => {
		google.accounts.id.initialize({
			client_id:
				"163807347805-2da9dm147goeg2tfg9avpkbsb0hs4vu5.apps.googleusercontent.com",
			callback: handleGoogleLogin,
		});
		google.accounts.id.renderButton(document.getElementById("google-signin"), {
			theme: "outline",
			size: "large",
		});
	}, []);

	const onSubmitHandler = () => {
		setLoading(true);
		const payloadData = {
			message: newMsg,
			user: user,
		};
		axios
			.post(`${baseUrl}/posts/createmsgs`, payloadData)
			.then((res) => {
				console.log(res);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	const inputChangeHandler = (e) => {
		e.preventDefault();
		setNewMsg(e.target.value);
	};

	return (
		<>
			{!user ? (
				<div className="bg-dark py-2">
					<div className="absolute z-10 top-1/2  right-1/2 bg-white rounded-md flex flex-col">
						<span className="p-2 ">Log In to start discussion </span>

						<button id="google-signin">sign in</button>
					</div>

					<img
						className="object-cover max-w-4xl mx-auto blur-md"
						src={chatImg}
						alt="chat"
					/>
				</div>
			) : (
				<div className="bg-dark py-2">
					<div className="overflow-y-auto sm:mt-4 border-2 rounded-lg border-slate-500 w-5/6 mx-auto h-96 bg-white">
						{message?.map((msg) => (
							<div key={msg?._id}>
								{/* Left */}

								{user.email === msg.userEmail ? (
									<div className="flex justify-end my-2  border w-1/3 float-right">
										<div className="rounded py-2 px-3">
											<p className="text-sm mt-1">{msg?.message}</p>
											<p className="text-xs text-grey-darkest text-gray-500">
												{moment(msg?.createdAt).startOf("mini").fromNow()}
											</p>
										</div>
									</div>
								) : (
									<div className="bg-grey-lighter flex-1 overflow-auto border flex flex-col w-1/3 my-2">
										<div className="px-3 flex items-center bg-grey-light cursor-pointer">
											<div>
												<img
													className="h-12 w-12 rounded-full"
													src={msg?.userPhoto}
												/>
											</div>
											<div className="ml-4 flex-1 border-b border-grey-lighter py-4">
												<div className="flex items-bottom justify-between">
													<p className="text-xs text-grey-darkest font-bold">
														{msg?.userName}
													</p>
												</div>
												<p className="text-grey-dark mt-1 text-sm">
													{msg?.message}
												</p>
												<div className="flex items-bottom justify-between">
													<p className="text-xs text-grey-darkest text-gray-500">
														{moment(msg?.createdAt).startOf("mini").fromNow()}
													</p>
												</div>
											</div>
										</div>
									</div>
								)}

								{/* Right */}
							</div>
						))}

						{/* <div className="w-1/2 h-auto bg-blue-200 my-2 rounded-md p-1 ml-64">
							Message text Message text Message text Message text Message text
							Message text Message text Message text
						</div> */}
					</div>
					<form className="flex flex-row mx-auto justify-center space-x-4 ">
						<input
							onChange={inputChangeHandler}
							className="mt-4 border-2 border-slate-500 h-16 sm:w-3/4 rounded-lg p-1 "
							placeholder="Message"
						></input>
						{loading ? (
							<button
								disabled={!newMsg}
								type="submit"
								className="sm:w-32 rounded-lg p-2 h-16 mt-4 text-white bg-blue-600 hover:bg-blue-900"
							>
								Loading...
							</button>
						) : (
							<button
								disabled={!newMsg}
								onClick={onSubmitHandler}
								type="submit"
								className="sm:w-32 rounded-lg p-2 h-16 mt-4 text-white bg-blue-600 hover:bg-blue-900"
							>
								Send
							</button>
						)}
					</form>
				</div>
			)}
		</>
	);
}

export default Discussions;
