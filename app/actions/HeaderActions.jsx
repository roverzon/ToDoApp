import alt from '../alt';

class HeaderActions {
	constructor(){
		this.generateActions(
			'addNewItemSuccess',
			'addNewItemFail',
			'handleInputChange'
		);
	}

	addNewItem(text){
		$.ajax({
			url: '/api/items',
			type: 'POST',
			data: {
				text : text,
				done : false
			}
		})
		.done((data) => {
			this.actions.addNewItemSuccess(data);
		})
		.fail((data)=>{
			this.actions.addNewItemFail(data);
		})
	}
}

export default alt.createActions(HeaderActions)