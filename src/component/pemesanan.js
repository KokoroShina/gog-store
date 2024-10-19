import React, { useState, useEffect } from 'react';
import { products } from './features'; // Import produk
import { Icon } from '@iconify/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Styles toast
import '../css/style.css'; // CSS untuk animasi shake

const Pemesanan = () => {
  const [selectedProducts, setSelectedProducts] = useState([{ product: products[0], quantity: 0 }]);
  const [shake, setShake] = useState(false); // State untuk efek shake

  useEffect(() => {
    toast.success("HALO SELAMAT DATANG! 🎉", {
      position: "top-center", // Set position to top-center
    });
  }, []);

  const handleProductSelect = (index, event) => {
    const newSelectedProducts = [...selectedProducts];
    const productId = event.target.value;
    const product = products.find(p => p.id === parseInt(productId));
    newSelectedProducts[index].product = product;
    setSelectedProducts(newSelectedProducts);
  };

  const handleQuantityChange = (index, event) => {
    const newSelectedProducts = [...selectedProducts];
    newSelectedProducts[index].quantity = parseInt(event.target.value);
    setSelectedProducts(newSelectedProducts);
  };

  const handleAddProduct = () => {
    setSelectedProducts([...selectedProducts, { product: products[0], quantity: 0 }]);
  };

  const handlePlaceOrder = () => {
    const noProductSelected = selectedProducts.every(item => item.quantity === 0);

    if (noProductSelected) {
      setShake(true); // Aktifkan animasi shake
      toast.error('Tolong isi pesanan Anda! 🛑', {
        position: 'top-center', // Position for error toast
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      setTimeout(() => setShake(false), 500); // Matikan shake
      return;
    }

    try {
      const orderSummary = selectedProducts
        .filter(item => item.quantity > 0)
        .map(item => `${item.quantity} x ${item.product.name}`)
        .join(', ');

      const phoneNumber = '6282240176390';
      const message = `Halo, saya mau memesan: ${orderSummary}`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      const newWindow = window.open(whatsappURL, '_blank');
      if (!newWindow) {
        throw new Error('Popup diblokir, pastikan browser Anda mengizinkan pop-up.');
      }
    } catch (error) {
      console.error('Error saat membuka WhatsApp:', error);
    }
  };

  return (
    <section id="pemesanan" className="bg-gray-100 py-10 px-4 md:px-10">
      <div className="container mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Order Products</h2>

        {/* Button Add Product */}
        <div className="text-right mb-4">
          <button
            onClick={handleAddProduct}
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            + Add Another Product
          </button>
        </div>

        {/* GIF */}
        <div className="flex justify-center mb-8">
          <iframe
            src="https://tenor.com/embed/25805976"
            width="250"
            height="250"
            frameBorder="0"
            allowFullScreen
            title="Wawa Cat GIF"
          ></iframe>
        </div>

        {/* List Produk */}
        {selectedProducts.map((item, index) => (
          <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ${shake ? 'shake' : ''}`}>
            <div>
              <label className="block mb-2 text-lg font-semibold">Pilih Produk</label>
              <select
                onChange={(e) => handleProductSelect(index, e)}
                className="w-full p-3 border rounded-lg"
                value={item.product.id}
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold">Jumlah:</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e)}
                className="w-full p-3 border rounded-lg"
                min="0"
              />
            </div>
          </div>
        ))}

        {/* Button Pesan */}
        <div className="flex justify-center">
          <button
            onClick={handlePlaceOrder}
            className="w-full md:w-64 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-900 transition duration-300 flex items-center justify-center"
          >
            <Icon icon="mdi:whatsapp" className="w-5 h-5 mr-2" />
            Pesan Di sini
          </button>
        </div>

        <ToastContainer />
      </div>
    </section>
  );
};

export default Pemesanan;
