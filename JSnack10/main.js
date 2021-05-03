let browser = {
  tabs: ["Facebook", "GitHub", "Gmail"],
  activeTab: 0
};

let browserMod = {
  tabs: [],
  activeTab : 0
};

browser.tabs.forEach((tab)=>{
  if(tab != 'Facebook' && tab != 'Twitter' && tab != 'Instagram'){
    browserMod.tabs.push(tab);
  }
  

});

console.log(browserMod)