const app = Vue.createApp({
  data() {
    return {
      products: [
        { name: 'Diivan', price: 500 },
        { name: 'Lamp', price: 85 },
      ],
      showPopup: false,
    };
  },
  computed: {
    totalPrice() {
      return this.products.reduce((acc, product) => acc + product.price, 0);
    },
  },
  methods: {
    addProduct() {
      this.products.push({ name: null, price: 0 });
    },
    removeProduct(index) {
      if (this.products.length > 0) {
        this.products.pop();
      }
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
  },
});

app.mount('#app');
