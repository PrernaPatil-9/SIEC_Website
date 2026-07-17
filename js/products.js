// products.js - Product data store

const Products = [
    // Gear Box
    { 
        id: 1, 
        name: 'Industrial Helical Gearbox', 
        category: 'Gear Box', 
        price: 1240, 
        rating: 4.8, 
        stock: 7, 
        desc: 'Heavy-duty helical gearbox for conveyor systems. High torque capacity with efficiency up to 98%.', 
        img: '/images/pc_1-removebg-preview.png' 
    },
        // ===== WHATSAPP INQUIRY CARD (Dummy Product with WhatsApp Integration) =====
    { 
        id: 'whatsapp', 
        name: 'Custom Industrial Solutions', 
        category: 'Tailored Products', 
        price: 0, 
        rating: 5.0, 
        stock: 'always', 
        desc: 'Need a custom industrial product? Our team specializes in tailored solutions for your specific requirements. Get a free consultation today!', 
        img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop&crop=center',
        isWhatsApp: true,
        whatsappNumber: '9075030505',
        whatsappMessage: 'Hello SIEC Team, I am interested in custom industrial solutions. Please share more details about your products and services.'
    },
    // { 
    //     id: 2, 
    //     name: 'Bevel Helical Gear Unit', 
    //     category: 'Gear Box', 
    //     price: 980, 
    //     rating: 4.5, 
    //     stock: 0, 
    //     desc: 'Right-angle drive with high torque density. Suitable for heavy industrial applications.', 
    //     img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop&crop=center' 
    // },
    // { 
    //     id: 3, 
    //     name: 'Planetary Gear Reducer', 
    //     category: 'Gear Box', 
    //     price: 2100, 
    //     rating: 4.9, 
    //     stock: 4, 
    //     desc: 'Compact planetary gearbox for servo motors. High precision with low backlash.', 
    //     img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop&crop=center' 
    // },
    
    // Fabrication
    { 
        id: 4, 
        name: 'Steel Fabricated Frame', 
        category: 'Fabrication', 
        price: 650, 
        rating: 4.2, 
        stock: 12, 
        desc: 'Custom welded steel frames for industrial machinery. Available in various sizes.', 
        img: '/images/pc_3-removebg-preview.png' 
    },
    // { 
    //     id: 5, 
    //     name: 'Stainless Steel Hopper', 
    //     category: 'Fabrication', 
    //     price: 2150, 
    //     rating: 4.9, 
    //     stock: 3, 
    //     desc: '304 SS hopper for bulk material handling. Food-grade finish available.', 
    //     img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop&crop=center' 
    // },
    // { 
    //     id: 6, 
    //     name: 'Industrial Conveyor Bed', 
    //     category: 'Fabrication', 
    //     price: 1800, 
    //     rating: 4.6, 
    //     stock: 6, 
    //     desc: 'Heavy-duty conveyor bed with adjustable height. Powder coated finish.', 
    //     img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop&crop=center' 
    // },
    
    // Pipe Fittings
    { 
        id: 7, 
        name: 'Carbon Steel Elbow 90°', 
        category: 'Pipe Fittings', 
        price: 450, 
        rating: 4.3, 
        stock: 40, 
        desc: 'SCH 40 seamless elbow, 2" NPT. Suitable for high-pressure applications.', 
        img: '/images/pc_4.webp' 
    },
    // { 
    //     id: 8, 
    //     name: 'Stainless Tee Fitting', 
    //     category: 'Pipe Fittings', 
    //     price: 78, 
    //     rating: 4.6, 
    //     stock: 18, 
    //     desc: '316 SS tee, 3" socket weld. Corrosion resistant for chemical applications.', 
    //     img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop&crop=center' 
    // },
    // { 
    //     id: 9, 
    //     name: 'Flange Adapter Set', 
    //     category: 'Pipe Fittings', 
    //     price: 120, 
    //     rating: 4.4, 
    //     stock: 25, 
    //     desc: 'ANSI 150# flange adapter kit. Includes gaskets and hardware.', 
    //     img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop&crop=center' 
    // },
    
    // Pump Motor
    { 
        id: 10, 
        name: 'Centrifugal Pump 5HP', 
        category: 'Pump Motor', 
        price: 890, 
        rating: 4.7, 
        stock: 5, 
        desc: 'Cast iron pump with 5HP motor, 50 GPM capacity. Self-priming design.', 
        img: '/images/pc_5-removebg-preview.png' 
    },
    // { 
    //     id: 11, 
    //     name: 'Submersible Motor 3HP', 
    //     category: 'Pump Motor', 
    //     price: 540, 
    //     rating: 4.1, 
    //     stock: 9, 
    //     desc: 'Stainless submersible motor for water wells. IP68 rated for continuous operation.', 
    //     img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop&crop=center' 
    // },
    // { 
    //     id: 12, 
    //     name: 'Diaphragm Pump 2HP', 
    //     category: 'Pump Motor', 
    //     price: 720, 
    //     rating: 4.5, 
    //     stock: 7, 
    //     desc: 'Air-operated double diaphragm pump. Suitable for viscous fluids.', 
    //     img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop&crop=center' 
    // },
    
    // Resin
    { 
        id: 13, 
        name: 'Epoxy Resin 5L', 
        category: 'Resin', 
        price: 600, 
        rating: 4.4, 
        stock: 25, 
        desc: 'High-strength epoxy for coatings and composites. Excellent adhesion properties.', 
        img: '/images/pc_6-removebg-preview.png' 
    },
    // { 
    //     id: 14, 
    //     name: 'Polyester Resin 1L', 
    //     category: 'Resin', 
    //     price: 35, 
    //     rating: 3.9, 
    //     stock: 0, 
    //     desc: 'General purpose polyester resin for fiberglass applications.', 
    //     img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop&crop=center' 
    // },
    // { 
    //     id: 15, 
    //     name: 'Phenolic Resin 10L', 
    //     category: 'Resin', 
    //     price: 280, 
    //     rating: 4.8, 
    //     stock: 8, 
    //     desc: 'High-temperature phenolic resin for industrial laminates.', 
    //     img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop&crop=center' 
    // },
    
    // Sand Media
    { 
        id: 16, 
        name: 'Silica Sand 50lb', 
        category: 'Sand Media', 
        price: 800, 
        rating: 4.0, 
        stock: 60, 
        desc: 'Filter sand #20, for water treatment and filtration systems.', 
        img: '/images/pc_7.avif' 
    },
    // { 
    //     id: 17, 
    //     name: 'Garnet Sand 25lb', 
    //     category: 'Sand Media', 
    //     price: 52, 
    //     rating: 4.8, 
    //     stock: 15, 
    //     desc: 'High-density garnet for abrasive blasting and waterjet cutting.', 
    //     img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop&crop=center' 
    // },
    // { 
    //     id: 18, 
    //     name: 'Activated Carbon Media', 
    //     category: 'Sand Media', 
    //     price: 85, 
    //     rating: 4.6, 
    //     stock: 22, 
    //     desc: 'Activated carbon for VOC removal and water purification.', 
    //     img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop&crop=center' 
    // },


];

// Make Products globally accessible
window.Products = Products;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Products;
}