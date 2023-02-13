import React from 'react';
import MainApp from '../../components/layouts/MainApp';
import { type NextPage } from 'next';
import CardTodo from '../../components/card/CardTodo';
import classNames from 'classnames';
import Button from '../../components/custom/Input/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
const index: NextPage = () => {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();
	console.log(day);
	return (
		<MainApp>
			<div className='relative flex h-screen flex-col content-center items-center gap-3 text-beige-500'>
				<div
					className={classNames(
						'mt-10 flex items-center justify-center gap-4'
					)}
				>
					<h1 className='text-beige-600'>What&apos;s Up?</h1>
					<h4>Get active today!</h4>
				</div>

				<div>
					<Button type='button' classname='text-beige-500 text-xl'>
						Add Task
						<PlusIcon className='h-6 w-6 ml-1' />
					</Button>
				</div>

				<div className='mt-10 flex flex-col'>
					<ul>
						<li>
							<CardTodo
								title='Work Today!'
								date={`${month}/${day}/${year}`}
								numberOfTask={10}
								slug='1233'
							/>
						</li>
					</ul>
				</div>
			</div>
		</MainApp>
	);
};

export default index;
