jQuery(document).ready(function($){
	//hide the subtle gradient layer (.cd-pricing-list > li::after) when pricing table has been scrolled to the end (mobile version only)
	checkScrolling($('.cd-pricing-body'));
	$(window).on('resize', function(){
		window.requestAnimationFrame(function(){checkScrolling($('.cd-pricing-body'))});
	});
	$('.cd-pricing-body').on('scroll', function(){ 
		var selected = $(this);
		window.requestAnimationFrame(function(){checkScrolling(selected)});
	});

	function checkScrolling(tables){
		tables.each(function(){
			var table= $(this),
				totalTableWidth = parseInt(table.children('.cd-pricing-features').width()),
		 		tableViewport = parseInt(table.width());
			if( table.scrollLeft() >= totalTableWidth - tableViewport -1 ) {
				table.parent('li').addClass('is-ended');
			} else {
				table.parent('li').removeClass('is-ended');
			}
		});
	}

	//switch from monthly to annual pricing tables
	bouncy_filter($('.cd-pricing-container'));

	function bouncy_filter(container) {
		var wdth=$('.cd-pricing-switcher input[type="radio"]:checked + label').innerWidth();
		$(".cd-switch").css('width', wdth+12);
		container.each(function(){
			var pricing_table = $(this);
			var filter_list_container = $(".cd-pricing-switcher-container").children('.cd-pricing-switcher'),
				filter_radios = filter_list_container.find('input[type="radio"]'),
				pricing_table_wrapper = pricing_table.find('.cd-pricing-wrapper');

			//store pricing table items
			var table_elements = {};
			filter_radios.each(function(){
				var filter_type = $(this).val();
				table_elements[filter_type] = pricing_table_wrapper.find('li[data-type="'+filter_type+'"]');
			});

			//detect input change event
			filter_radios.on('change', function(event){
				event.preventDefault();
				//detect which radio input item was checked
				var selected_filter = $(event.target).val();

				//give higher z-index to the pricing table items selected by the radio input
				show_selected_items(table_elements[selected_filter]);

				//rotate each cd-pricing-wrapper 
				//at the end of the animation hide the not-selected pricing tables and rotate back the .cd-pricing-wrapper
				
				if( !Modernizr.cssanimations ) {
					hide_not_selected_items(table_elements, selected_filter);
					pricing_table_wrapper.removeClass('is-switched');
				} else {
					pricing_table_wrapper.addClass('is-switched').eq(0).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {		
						hide_not_selected_items(table_elements, selected_filter);
						pricing_table_wrapper.removeClass('is-switched');
						//change rotation direction if .cd-pricing-list has the .cd-bounce-invert class
						if(pricing_table.find('.cd-pricing-list').hasClass('cd-bounce-invert')) pricing_table_wrapper.toggleClass('reverse-animation');
					});
				}
			});
		});
	}
	function show_selected_items(selected_elements) {
		selected_elements.addClass('is-selected');
	}

	function hide_not_selected_items(table_containers, filter) {		
		$.each(table_containers, function(key, value){
	  		if ( key != filter ) {	
				$(this).removeClass('is-visible is-selected').addClass('is-hidden');

			} else {				
				$(this).addClass('is-visible').removeClass('is-hidden is-selected');
				var wdth=$('.cd-pricing-switcher input[type="radio"]:checked + label').innerWidth();
				// $(".cd-switch").css('width', wdth);		
			}
		});
	}
});
// $(document).ready(function(){
// 	"use strict";

// const DOM = {
//   tabsNav: document.querySelector('#annual-essentials .tabs__nav'),
//   tabsNavItems: document.querySelectorAll('.tabs__nav-item'),
//   panels: document.querySelectorAll('.tabs__panel')
// }; //set active nav element

// const setActiveItem = elem => {
//   DOM.tabsNavItems.forEach(el => {
//     el.classList.remove('js-active');
//   });
//   elem.classList.add('js-active');
// }; //find active nav element


// const findActiveItem = () => {
//   let activeIndex = 0;

//   for (let i = 0; i < DOM.tabsNavItems.length; i++) {
//     if (DOM.tabsNavItems[i].classList.contains('js-active')) {
//       activeIndex = i;
//       break;
//     }

//     ;
//   }

//   ;
//   return activeIndex;
// }; //find active nav elements parameters: left coord, width


// const findActiveItemParams = activeItemIndex => {
//   const activeTab = DOM.tabsNavItems[activeItemIndex]; //width of elem

//   const activeItemWidth = activeTab.offsetWidth - 1; //left coord in the tab navigation

//   const activeItemOffset_left = activeTab.offsetLeft;
//   return [activeItemWidth, activeItemOffset_left];
// }; //appending decoration block to an active nav element


// const appendDecorationNav = () => {
//   //creating decoration element
//   let decorationElem = document.createElement('div');
//   decorationElem.classList.add('tabs__nav-decoration');
//   decorationElem.classList.add('js-decoration'); //appending decoration element to navigation

//   DOM.tabsNav.append(decorationElem); //appending styles to decoration element

//   return decorationElem;
// }; //appending styles to decoration nav element


// const styleDecorElem = (elem, decorWidth, decorOffset) => {
//   elem.style.width = `${decorWidth}px`;
//   elem.style.transform = `translateX(${decorOffset}px)`;
// }; //find active panel


// const findActivePanel = index => {
//   return DOM.panels[index];
// }; //set active panel class


// const setActivePanel = index => {
//   DOM.panels.forEach(el => {
//     el.classList.remove('js-active');
//   });
//   DOM.panels[index].classList.add('js-active');
// }; //onload function


// window.addEventListener('load', () => {
//   //find active nav item
//   const activeItemIndex = findActiveItem(); //find active nav item params

//   const [decorWidth, decorOffset] = findActiveItemParams(activeItemIndex); //appending decoration element to an active elem

//   const decorElem = appendDecorationNav(); //setting styles to the decoration elem

//   styleDecorElem(decorElem, decorWidth, decorOffset); //find active panel

//   findActivePanel(activeItemIndex); //set active panel

//   setActivePanel(activeItemIndex);
// }); //click nav item function

// DOM.tabsNav.addEventListener('click', e => {
//   const navElemClass = 'tabs__nav-item'; //check if we click on a nav item

//   if (e.target.classList.contains(navElemClass)) {
//     const clickedTab = e.target;
//     const activeItemIndex = Array.from(DOM.tabsNavItems).indexOf(clickedTab); //set active nav item

//     setActiveItem(clickedTab); //find active nav item

//     const activeItem = findActiveItem(); //find active nav item params

//     const [decorWidth, decorOffset] = findActiveItemParams(activeItem); //setting styles to the decoration elem

//     const decorElem = document.querySelector('.js-decoration');
//     styleDecorElem(decorElem, decorWidth, decorOffset); //find active panel

//     findActivePanel(activeItemIndex); //set active panel

//     setActivePanel(activeItemIndex);
//   }
// });
// });
// $(document).ready(function(){
// 	"use strict";

// const DOM = {
//   tabsNav1: document.querySelector('#annual-enterprise .tabs__nav'),
//   tabsNav1Items: document.querySelectorAll('#annual-enterprise .tabs__nav-item'),
//   panels: document.querySelectorAll('#annual-enterprise .tabs__panel')
// }; //set active nav element

// const setActiveItem = elem => {
//   DOM.tabsNav1Items.forEach(el => {
//     el.classList.remove('js-active');
//   });
//   elem.classList.add('js-active');
// }; //find active nav element


// const findActiveItem = () => {
//   let activeIndex = 0;

//   for (let i = 0; i < DOM.tabsNav1Items.length; i++) {
//     if (DOM.tabsNav1Items[i].classList.contains('js-active')) {
//       activeIndex = i;
//       break;
//     }

//     ;
//   }

//   ;
//   return activeIndex;
// }; //find active nav elements parameters: left coord, width


// const findActiveItemParams = activeItemIndex => {
//   const activeTab = DOM.tabsNav1Items[activeItemIndex]; //width of elem

//   const activeItemWidth = activeTab.offsetWidth - 1; //left coord in the tab navigation

//   const activeItemOffset_left = activeTab.offsetLeft;
//   return [activeItemWidth, activeItemOffset_left];
// }; //appending decoration block to an active nav element


// const appendDecorationNav = () => {
//   //creating decoration element
//   let decorationElem = document.createElement('div');
//   decorationElem.classList.add('tabs__nav-decoration');
//   decorationElem.classList.add('js-decoration'); //appending decoration element to navigation

//   DOM.tabsNav1.append(decorationElem); //appending styles to decoration element

//   return decorationElem;
// }; //appending styles to decoration nav element


// const styleDecorElem = (elem, decorWidth, decorOffset) => {
//   elem.style.width = `${decorWidth}px`;
//   elem.style.transform = `translateX(${decorOffset}px)`;
// }; //find active panel


// const findActivePanel = index => {
//   return DOM.panels[index];
// }; //set active panel class


// const setActivePanel = index => {
//   DOM.panels.forEach(el => {
//     el.classList.remove('js-active');
//   });
//   DOM.panels[index].classList.add('js-active');
// }; //onload function


// window.addEventListener('load', () => {
//   //find active nav item
//   const activeItemIndex = findActiveItem(); //find active nav item params

//   const [decorWidth, decorOffset] = findActiveItemParams(activeItemIndex); //appending decoration element to an active elem

//   const decorElem = appendDecorationNav(); //setting styles to the decoration elem

//   styleDecorElem(decorElem, decorWidth, decorOffset); //find active panel

//   findActivePanel(activeItemIndex); //set active panel

//   setActivePanel(activeItemIndex);
// }); //click nav item function

// DOM.tabsNav1.addEventListener('click', e => {
//   const navElemClass = 'tabs__nav-item'; //check if we click on a nav item

//   if (e.target.classList.contains(navElemClass)) {
//     const clickedTab = e.target;
//     const activeItemIndex = Array.from(DOM.tabsNav1Items).indexOf(clickedTab); //set active nav item

//     setActiveItem(clickedTab); //find active nav item

//     const activeItem = findActiveItem(); //find active nav item params

//     const [decorWidth, decorOffset] = findActiveItemParams(activeItem); //setting styles to the decoration elem

//     const decorElem = document.querySelector('.js-decoration');
//     styleDecorElem(decorElem, decorWidth, decorOffset); //find active panel

//     findActivePanel(activeItemIndex); //set active panel

//     setActivePanel(activeItemIndex);
//   }
// });
// });