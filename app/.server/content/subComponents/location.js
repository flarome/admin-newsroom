export function html(item) {
    return item?.location
      ? `
      
    <strong>
        <span class="pagebody-location">${item.location.toUpperCase()}</span>
    </strong>
  
    `
      : "";
  }