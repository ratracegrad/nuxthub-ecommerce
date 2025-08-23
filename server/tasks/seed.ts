export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed task'
  },
  async run() {
    console.log('Running DB seed task...')
    const products = [
      {
        name: 'Cream Blouse',
        shortDescription: 'A versatile cream blouse with a soft V-neckline and long sleeves, perfect for pairing with jeans or skirts for an effortless everyday look',
        longDescription: 'The cream blouse is a wardrobe essential that transitions seamlessly from work to casual wear. Featuring a flattering V-neckline and long sleeves, it offers a clean, polished look. Made from lightweight, breathable fabric, it is designed for all-day comfort. A classic piece that elevates any outfit.',
        price: 12000,
        quantity: 10,
        size: ['S', 'M', 'L'],
        color: ['Cream'],
        image: '/womens/creamBlouse.png',
        category: 'womens',
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lavender Blouse',
        shortDescription: 'A light lavender button-down blouse with a tailored feminine fit',
        longDescription: 'Soft and feminine, this lavender blouse brings a refreshing pop of color to your closet. Its tailored fit and button-down style make it suitable for both office settings and casual outings. Crafted from smooth fabric, it provides all-day ease. A subtle yet stylish addition to your collection.',
        price: 9700,
        quantity: 7,
        size: ['M', 'L', 'XL'],
        color: ['Lavender'],
        image: '/womens/lavenderBlouse.jpg',
        category: 'womens',
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt',
        shortDescription: 'A simple black short-sleeve T-shirt made from soft cotton fabric',
        longDescription: 'This black T-shirt delivers effortless style with its classic crew neckline and soft cotton feel. Its versatile design makes it perfect for layering or wearing solo. Durable stitching ensures it will hold up to everyday wear. A timeless staple you will wear again and again.',
        price: 4800,
        quantity: 4,
        size: ['XS', 'S', 'M', 'L', 'XL'],
        color: ['Black', 'White', 'Gray'],
        image: '/womens/blackTshirt.jpg',
        category: 'womens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'White Long-Sleeve Top',
        shortDescription: 'A fitted white long-sleeve top with a round neckline for a clean look',
        longDescription: 'A clean and minimal white long-sleeve top that offers both comfort and flexibility. Designed with a flattering round neckline, it works equally well under jackets or on its own. Its breathable fabric makes it ideal for year-round wear. A must-have for building a capsule wardrobe.',
        price: 6200,
        quantity: 4,
        size: ['S', 'XL'],
        color: ['White'],
        image: '/womens/whiteTop.jpg',
        category: 'womens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beige Skirt',
        shortDescription: 'A high-waisted beige skirt with a flowing A-line silhouette',
        longDescription: 'This beige A-line skirt offers a perfect balance of sophistication and comfort. High-waisted with a flowing silhouette, it flatters a wide range of body types. Its neutral tone makes it easy to style with blouses, sweaters, or tees. A versatile piece for both casual and dressy looks.',
        price: 24000,
        quantity: 2,
        size: ['8', '10', '12', '14', '16'],
        color: ['Beige', 'Hazel', 'Black'],
        image: '/womens/beigeSkirt.png',
        category: 'womens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rust Blouse',
        shortDescription: 'A stylish rust-colored blouse with subtle pleat and tie detailing',
        longDescription: 'This rust-colored blouse combines a classic button-down style with subtle pleat and tie detailing. Its tailored fit and neutral tone make it versatile for both office and casual settings.',
        price: 6500,
        quantity: 6,
        size: ['S', 'M', 'L', '2x'],
        color: ['Rust', 'Charcoal'],
        image: '/womens/rustBlouse.png',
        category: 'womens',
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Olive Jacket',
        shortDescription: 'A casual olive over shirt jacket with button front and chest pockets',
        longDescription: 'This olive over shirt jacket combines a classic button-down style with a casual, relaxed fit. Its button front and chest pockets add a touch of functionality. Made from high-quality fabric, it offers a versatile look that can be styled with jeans or chinos.',
        price: 30000,
        quantity: 11,
        size: ['S', 'M', 'L', '2x'],
        color: ['Olive', 'Charcoal'],
        image: '/mens/oliveJacket.png',
        category: 'mens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Denim-Style Blue Shirt',
        shortDescription: 'A blue long-sleeve shirt with a denim-inspired texture and finish',
        longDescription: 'This blue long-sleeve shirt features a denim-inspired texture and finish. Its button-down style and tailored fit make it versatile for both office and casual settings.',
        price: 9700,
        quantity: 3,
        size: ['S', 'M', 'L', '2x'],
        color: ['Blue', 'Charcoal'],
        image: '/mens/blueDenimShirt.png',
        category: 'mens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Light Blue Pinstriped Shirt',
        shortDescription: 'A professional button-down shirt in light blue with thin white pinstripes',
        longDescription: 'This light blue button-down shirt features thin white pinstripes, adding a touch of sophistication. Its professional, fit and tailored design make it suitable for both office and casual settings.',
        price: 15000,
        quantity: 7,
        size: ['S', 'M', 'L', '2x'],
        color: ['Light Blue', 'Charcoal'],
        image: '/mens/bluePinstripe.png',
        category: 'mens',
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brown Cargo Shorts',
        shortDescription: 'Comfortable brown cargo shorts with multiple utility pockets',
        longDescription: 'These brown cargo shorts offer a perfect blend of comfort and functionality. With multiple utility pockets, they are designed for everyday wear. Crafted from high-quality fabric, they offer a polished look that never goes out of style.',
        price: 5000,
        quantity: 12,
        size: ['S', 'M', 'L', '2x'],
        color: ['Brown', 'Charcoal'],
        image: '/mens/brownCargoShorts.png',
        category: 'mens',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classic Blue Jeans',
        shortDescription: 'Straight leg blue jeans with a traditional five pocket design',
        longDescription: 'These classic blue jeans feature a straight leg silhouette with a traditional five pocket design. Crafted from high quality denim, they offer a durable and comfortable fit. Their versatile design makes them perfect for both casual and dressy occasions.',
        price: 29800,
        quantity: 10,
        size: ['S', 'M', 'L', '2X'],
        color: ['Blue', 'Charcoal'],
        image: '/mens/bluejeans.png',
        category: 'mens',
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Industrial Accent Headphones',
        shortDescription: 'Over-ear headphones with brushed metal design and bold orange details',
        longDescription: 'This industrial accent headphones features a brushed metal design and bold orange details. Its sleek design and lightweight construction make it easy to carry and use. Crafted from high-quality material, it offers a durable and long-lasting headphones. A must-have for your tech collection.',
        price: 37500,
        quantity: 4,
        size: ['Reg'],
        color: ['Orange', 'Charcoal'],
        image: '/tech/industrialHeadphones.png',
        category: 'tech',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Silver Over-Ear Headphones',
        shortDescription: 'Over-ear headphones in silver with cushioned pads for comfort',
        longDescription: 'This silver over-ear headphones features cushioned pads for comfort. Its sleek design and lightweight construction make it easy to carry and use. Crafted from high-quality material, it offers a durable and long-lasting headphones. A must-have for your tech collection.',
        price: 32500,
        quantity: 3,
        size: ['Reg'],
        color: ['Silver', 'Charcoal'],
        image: '/tech/silverHeadphones.png',
        category: 'tech',
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brown Leather Strap Watch',
        shortDescription: 'A stainless steel wristwatch with a brown stitched leather strap',
        longDescription: 'This stainless steel wristwatch features a brown stitched leather strap. Its sleek design and lightweight construction make it easy to carry and use. Crafted from high-quality material, it offers a durable and long-lasting watch. A must-have for your tech collection.',
        price: 49700,
        quantity: 2,
        size: ['10mm', '12mm', '14mm'],
        color: ['Brown', 'Charcoal'],
        image: '/tech/brownWatch.png',
        category: 'tech',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stainless Steel Chronograph Watch',
        shortDescription: 'A chronograph wristwatch with stainless steel bracelet and black dial.',
        longDescription: 'This stainless steel chronograph watch features a stainless steel bracelet and black dial. Its sleek design and lightweight construction make it easy to carry and use. Crafted from high-quality material, it offers a durable and long-lasting watch. A must-have for your tech collection.',
        price: 75000,
        quantity: 5,
        size: ['10mm', '12mm', '14mm'],
        color: ['Black', 'Charcoal'],
        image: '/tech/stainlessSteelWatch.png',
        category: 'tech',
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aluminum Laptop Stand',
        shortDescription: 'A minimalist silver aluminum laptop stand with a fixed angled design',
        longDescription: 'This minimalist silver aluminum laptop stand features a fixed angled design. Its sleek design and lightweight construction make it easy to carry and use. Crafted from high-quality material, it offers a durable and long-lasting stand. A must-have for your tech collection.',
        price: 9900,
        quantity: 111,
        size: ['Reg'],
        color: ['Silver'],
        image: '/tech/laptopStand.png',
        category: 'tech',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Adjustable Cellphone Stand',
        shortDescription: 'Modern aluminum cellphone stand with a hinge for adjustable positioning',
        longDescription: 'This modern aluminum cellphone stand features a hinge for adjustable positioning. Its sleek design and lightweight construction make it easy to carry and use. Crafted from high-quality material, it offers a durable and long-lasting stand. A must-have for your tech collection.',
        price: 3700,
        quantity: 14,
        size: [],
        color: ['Silver'],
        image: '/tech/cellphoneStand.png',
        category: 'tech',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await useDrizzle().insert(tables.products).values(products)
    return { result: 'success' }
  }
})
