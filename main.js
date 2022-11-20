let current_money = 1500;
let current_money_text = `$${current_money}`;

let App = document.getElementById('App');
let nav_el = document.createElement('nav');
let brand_el = document.createElement('h1');
let current_money_el = document.createElement('p');
let products_container = document.createElement('div');
products_container.classList.add('prod_container',"flex");

brand_el.innerText = "SpendIt";
current_money_el.innerText = `Current Money : ${current_money_text}`;

nav_el.classList.add('navbar','flex','flex-space-between','flex-center-all');
brand_el.classList.add('nav__brand');
current_money_el.classList.add('nav__crrnt_mny')

App.appendChild(nav_el);
nav_el.appendChild(brand_el);
nav_el.appendChild(current_money_el);
App.appendChild(products_container);

function MoneySpend(val){
	current_money -= val;
	current_money_el.innerText = `$${current_money}`;
}
function MoneyGain(val){
	current_money += val;
	current_money_el.innerText = `$${current_money}`;
}

class ProductCard{
	constructor(img_url,title,price){
		this.img_url = img_url;
		this.title = title;
		this.price = price;
		this.count = 0;
	}
}

function CreateProdCardElements(img_url,title,price){
	let count = 0;
	let main_el = document.createElement('div');
	let img_div_el = document.createElement('div');
	let img_el = document.createElement('img');

	let top_div_el = document.createElement('div');
	let title_el = document.createElement('h3');
	let price_el = document.createElement('p');

	let bottom_div_el = document.createElement('div');
	let count_el = document.createElement('p');
	let min_btn = document.createElement('button');
	let pls_btn = document.createElement('button');


	main_el.classList.add('prod_card');
	top_div_el.classList.add('top_div','flex','flex-center-all','flex-space-between');
	title_el.classList.add('pc_title');
	price_el.classList.add('pc_price');
	min_btn.classList.add('pc_min_btn');
	pls_btn.classList.add('pc_pls_btn');
	bottom_div_el.classList.add('pc_bottom','flex','flex-space-between');
	count_el.classList.add('pc_count');
	img_div_el.classList.add('pc_img_div');
	img_el.classList.add('pc_img');


	bottom_div_el.appendChild(pls_btn);
	bottom_div_el.appendChild(count_el);
	bottom_div_el.appendChild(min_btn);

	top_div_el.appendChild(title_el);
	top_div_el.appendChild(price_el);

	img_div_el.appendChild(img_el);
	main_el.appendChild(img_div_el);
	main_el.appendChild(top_div_el);
	main_el.appendChild(bottom_div_el);


	img_el.src = img_url;
	title_el.innerText = title;
	price_el.innerText = `$${price}`;
	min_btn.innerText = "Sell";
	pls_btn.innerText = "Buy";
	count_el.innerText = count;

	min_btn.addEventListener("click",e=>{
		console.log("clickedMinBut");
		MoneySpend(price);
		count -= 1;
		count_el.innerText = count;
		e.preventDefault();
	})
	pls_btn.addEventListener("click",e=>{
		console.log("clickedPlustBut");
		MoneyGain(price);
		count += 1;
		count_el.innerText = count;
		e.preventDefault();
		e.preventDefault();
	})
	return main_el;
}

//-------------------------------------------------------------------------

let product_creds = [
	['https://loremflickr.com/500/420/1',"Hello",100],
	['https://loremflickr.com/544/460/2',"World",120],
	['https://loremflickr.com/544/460/3',"World",120],
	['https://loremflickr.com/544/460/4',"World",120],
	['https://loremflickr.com/544/460/5',"World",120],
	['https://loremflickr.com/544/460/6',"World",120],
	['https://loremflickr.com/544/460/7',"World",120],
	['https://loremflickr.com/544/460/8',"World",120],
	['https://loremflickr.com/544/460/9',"World",120],
	['https://loremflickr.com/500/684/10',"Tester",110]
]
product_creds.forEach((prod) =>{
	let temp_prodcard = new ProductCard(prod[0],prod[1],prod[2]);
	let temp_prodcard_el = CreateProdCardElements(temp_prodcard.img_url,temp_prodcard.title,temp_prodcard.price);
	products_container.appendChild(temp_prodcard_el);
});
