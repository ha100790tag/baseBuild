export default function() {
	const data = [
		{
			id: 1,
			category: 'nature',
			src: '1'
		},
		{
			id: 2,
			category: 'car',
			src: '2'
		},
		{
			id: 3,
			category: 'people',
			src: '3'
		},
		{
			id: 4,
			category: 'nature',
			src: '4'
		}
	];
	let currentData = data;
	function filterBy(property) {
		currentData = property ? data.filter(item => item.category === property) : data;
	}
	function createNode(nodeData) {
		nodeData.map(item => {
			$("#filter-content").append(`<span class='filter-item'>${item.src}</span>`)
		})
	}
	$(".filter-btn").click(e => {
		console.log()
		$(".filter-item").remove();
		const target = e.currentTarget;
		filterBy(target.dataset.filter);
		createNode(currentData);
	});
}