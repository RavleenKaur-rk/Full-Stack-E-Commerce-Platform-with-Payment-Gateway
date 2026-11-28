
export function getSaved(key) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }
  
  export function toggleWishlist(id) {
    const saved = getSaved("veloraWishlist");
  
    const updated = saved.includes(id)
      ? saved.filter(item => item !== id)
      : [...saved, id];
  
    localStorage.setItem("veloraWishlist", JSON.stringify(updated));
    window.dispatchEvent(new Event("wishlistUpdated"));
  
    return updated;
  }
  
  export function addToBag(product, size = "M") {
    const bag = getSaved("veloraBag");
    const existing = bag.find(
      item => item.id === product.id && item.size === size
    );
  
    if (existing) {
      existing.quantity += 1;
    } else {
      bag.push({
        id: product.id,
        size,
        quantity: 1
      });
    }
  
    localStorage.setItem("veloraBag", JSON.stringify(bag));
    window.dispatchEvent(new Event("bagUpdated"));
  }
  