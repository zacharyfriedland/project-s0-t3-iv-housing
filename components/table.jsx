import React, { useState, useEffect } from 'react';
import utilStyles from '../styles/utils.module.css'

export default function HouseTable(props){
	return(
		<div className={utilStyles.pageContainer}>
			<table id="house-table">
			<thead>
				<tr>
					<th>Housing Company</th>
					<th>Address</th>
					<th>Size</th>
					<th>Total Price</th>
					<th>Price Per Person</th>
					<th>Phone Number</th>
				</tr>
			</thead>
			<tbody>
				{
					props.list.map(row =>(
						<tr>
							<td>{row.company}</td>
							<td><a href={row.website}>{row.address}</a></td>
							<td>{row.size}</td>
							<td>{row.totalPrice}</td>
							<td>{row.totalPrice/row.size}</td>
							<td>{row.phone}</td>
						</tr>
					))
				}
				</tbody>
			</table>
		</div>
	)
}