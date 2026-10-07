"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Perfume, BottleSize, PERFUMES } from "@/data/perfumes";

export interface CartItem {
  perfume: Perfume;
  size: BottleSize;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (perfume: Perfume, size?: BottleSize, quantity?: number) => void;
  removeFromCart: (perfumeId: string, sizeName: string) => void;
  updateQuantity: (perfumeId: string, sizeName: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  promoCode: string;
  applyPromo: (code: string) => { success: boolean; message: string };
  removePromo: () => void;
  selectedSamples: string[];
  toggleSample: (sampleId: string) => void;
  isGiftWrapped: boolean;
  setIsGiftWrapped: (val: boolean) => void;
  giftMessage: string;
  setGiftMessage: (val: string) => void;
  total: number;
  totalItemsCount: number;
  toastMessage: string | null;
  wishlist: string[];
  toggleWishlist: (perfumeId: string) => void;
  isWishlisted: (perfumeId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [selectedSamples, setSelectedSamples] = useState<string[]>(["s-oud", "s-santal"]);
  const [isGiftWrapped, setIsGiftWrapped] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from localStorage or default starter cart
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("elysian_cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      } else {
        // Start with a delightful default cart item so user sees immediate live state
        const initialPerfume = PERFUMES[0];
        setItems([
          {
            perfume: initialPerfume,
            size: initialPerfume.sizes[1], // 100ml
            quantity: 1,
          },
        ]);
      }

      const savedWishlist = localStorage.getItem("elysian_wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch {
      // Ignore fallback
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("elysian_cart", JSON.stringify(items));
    } catch {
      // Ignore
    }
  }, [items, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("elysian_wishlist", JSON.stringify(wishlist));
    } catch {
      // Ignore
    }
  }, [wishlist, isLoaded]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (perfume: Perfume, chosenSize?: BottleSize, quantity = 1) => {
    const size = chosenSize || perfume.sizes[1] || perfume.sizes[0];
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.perfume.id === perfume.id && i.size.size === size.size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      } else {
        return [...prev, { perfume, size, quantity }];
      }
    });

    showToast(`Added ${quantity}x ${perfume.name} (${size.size}) to your bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (perfumeId: string, sizeName: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.perfume.id === perfumeId && i.size.size === sizeName))
    );
  };

  const updateQuantity = (perfumeId: string, sizeName: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(perfumeId, sizeName);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.perfume.id === perfumeId && item.size.size === sizeName
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "ELYSIAN15" || clean === "VIP15") {
      setPromoCode(clean);
      setDiscountPercent(0.15);
      showToast("Privilege code applied: 15% discount");
      return { success: true, message: "15% Haute Parfumerie privilege applied" };
    } else if (clean === "FIRST20" || clean === "NOIR20") {
      setPromoCode(clean);
      setDiscountPercent(0.2);
      showToast("Privilege code applied: 20% discount");
      return { success: true, message: "20% Inaugural privilege applied" };
    } else {
      return { success: false, message: "Invalid privilege code. Try ELYSIAN15" };
    }
  };

  const removePromo = () => {
    setPromoCode("");
    setDiscountPercent(0);
  };

  const toggleSample = (sampleId: string) => {
    setSelectedSamples((prev) => {
      if (prev.includes(sampleId)) {
        return prev.filter((id) => id !== sampleId);
      }
      if (prev.length >= 2) {
        showToast("Maximum 2 complimentary discovery vials allowed");
        return prev;
      }
      return [...prev, sampleId];
    });
  };

  const toggleWishlist = (perfumeId: string) => {
    setWishlist((prev) => {
      if (prev.includes(perfumeId)) {
        showToast("Removed from your private wishlist");
        return prev.filter((id) => id !== perfumeId);
      } else {
        showToast("Saved to your private wishlist");
        return [...prev, perfumeId];
      }
    });
  };

  const isWishlisted = (perfumeId: string) => wishlist.includes(perfumeId);

  // Price calculations
  const subtotal = items.reduce(
    (sum, item) => sum + item.size.price * item.quantity,
    0
  );
  const discount = Math.round(subtotal * discountPercent);
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 25;
  const giftWrapFee = isGiftWrapped ? 15 : 0;
  const tax = Math.round((subtotal - discount) * 0.08);
  const total = Math.max(0, subtotal - discount + shipping + giftWrapFee + tax);
  const totalItemsCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        subtotal,
        shipping,
        tax,
        discount,
        promoCode,
        applyPromo,
        removePromo,
        selectedSamples,
        toggleSample,
        isGiftWrapped,
        setIsGiftWrapped,
        giftMessage,
        setGiftMessage,
        total,
        totalItemsCount,
        toastMessage,
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
