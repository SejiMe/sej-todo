import React from 'react';
import MainApp from '../../components/layouts/MainApp';
import { type NextPage } from 'next';
import CardTodo from '../../components/card/CardTodo';

const index: NextPage  = () => {
	const date = new Date()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const year = date.getFullYear()
	console.log(day);
	return (
		<MainApp>
			<h1>What&apos;s Up?</h1>
			<CardTodo title='Work Today!' date={`${month}/${day}/${year}`} />
			<h2>hello</h2>
		</MainApp>
	);
};

export default index;
