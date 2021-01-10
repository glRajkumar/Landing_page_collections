const tabItems= document.querySelectorAll('.tab-item');
// console.log(tabItems)
const tabContentItems= document.querySelectorAll('.tab-content-item');
// console.log(tabContentItems)

//Select tab content item
function selectItem(e) {
  removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');       
    //Grab content item from DOM
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show')   
}

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
  tabContentItems.forEach(item =>item.classList.remove('show'));
}

//lister to tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
