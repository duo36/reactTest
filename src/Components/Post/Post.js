import React, { Component } from 'react';

const post = (props) => (
		<article className="Post">
			<h1>{props.title}</h1>
			<div className="Info">
				<div className="Author">{props.email}</div>
			</div>
		</article>);

export default post;
