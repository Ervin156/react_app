import React from "react";
const arrList = [
  { name: "item-1", link: "#" },
  { name: "item-2", link: "#" },
  { name: "item-3", link: "#" },
  { name: "item-4", link: "#" }
];
const htmlMenu = handler =>
  arrList.map(item => {
    return (
      <li onClick={handler} key={item.name}>
        {item.name}
      </li>
    );
    
  });

function Menu() {
  const onDdeliteHandler = e => {
    console.log(e.target);
    alert(e.target.innerHTML);  

  };

  return <ul>{htmlMenu(onDdeliteHandler)}</ul>;
}

export default Menu;
