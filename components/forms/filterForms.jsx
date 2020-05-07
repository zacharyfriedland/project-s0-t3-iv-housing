// filterForms.jsx

import utilStyles from '../../styles/utils.module.css'
import HouseTable from '../table.jsx'

class FilterForms extends React.Component {
	constructor(props) {
		super(props)
		this.state = {block:'Any',street:'Any'}
		this.streetChange = this.streetChange.bind(this)
		this.blockChange = this.blockChange.bind(this)
	}
	streetChange(event) {
		this.state.street = event.target.value
		this.props.filter(this.state.street,this.state.block)
	}
	blockChange(event) {
		this.state.block = event.target.value
		this.props.filter(this.state.street,this.state.block)
	}
	render(){
		return (
			<div className={utilStyles.formSelects}>
				<label>Choose a Street:</label>
				<select id="street-values" defaultValue="default" onChange={this.streetChange}>
					<option value = "Any"> Any </option>
					<option value = "Cervantes Rd.">Cervantes Rd.</option>
					<option value = "El Greco Rd.">El Greco Rd.</option>
					<option value = "Picasso Rd.">Picasso Rd.</option>
					<option value = "Segovia Rd.">Segovia Rd.</option>
					<option value = "Cordoba Rd.">Cordoba Rd.</option>
					<option value = "Pardall Rd.">Pardall Rd.</option>
					<option value = "Madrid Rd.">Madrid Rd.</option>
					<option value = "Seville Rd.">Seville Rd.</option>
					<option value = "Trigo Rd.">Trigo Rd.</option>
					<option value = "El Nido Ln.">El Nido Ln.</option>
					<option value = "Sabado Tarde Rd.">Sabado Tarde Rd.</option>
					<option value = "Del Playa Dr.">Del Playa Dr.</option>
					<option value = "El Colegio Rd.">El Colegio Rd.</option>
					<option value = "Abrego Rd.">Abrego Rd.</option>
					<option value = "Sueno Rd.">Sueno Rd.</option>
					<option value = "Pasado Rd.">Pasado Rd.</option>
					<option value = "Estero Rd.">Estero Rd.</option>
					<option value = "Fortuna Rd.">Fortuna Rd.</option>
					<option value = "Embarcadero Del Norte">Embarcadero Del Norte</option>
					<option value = "Embarcadero Del Mar">Embarcadero Del Mar</option>
					<option value = "Camino Del Pescadero">Camino Del Pescadero</option>
					<option value = "Camino Del Sur">Camino Del Sur</option>
					<option value = "Camino Corto">Camino Corto</option>
					<option value = "Camino Lindo">Camino Lindo</option>
				</select>

				<label>Choose a Block:</label>
				<select id="block-values" defaultValue="default" onChange={this.blockChange}>
					<option value = "Any">Any</option>
					<option value = "65"> 65 Block </option>
					<option value = "66">  66 Block </option>
					<option value = "67"> 67 Block </option>
					<option value = "68"> 68 Block </option>
				</select>
			</div>
		)
	}
}
export default FilterForms

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "default") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
