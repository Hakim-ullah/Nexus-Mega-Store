  // =====================================================================
        // IMAGE POOL
        // =====================================================================
        const PRODUCT_IMGS = { 1: 'photo-1496181133206-80ce9b88a853', 2: 'photo-1590658165737-15a047b8b5e6', 3: 'photo-1523275335684-37898b6baf30', 4: 'photo-1527814050087-3793815479db', 5: 'photo-1609091839311-d5365f9ff1c5', 6: 'photo-1547082299-de196ea013d6', 7: 'photo-1541140532154-b024d705b90a', 8: 'photo-1509460913899-515f1df34fea', 9: 'photo-1545454675-3479531966b9', 10: 'photo-1516035069371-29a1b244cc32', 11: 'photo-1587919825764-6a3571db2daa', 12: 'photo-1505740420928-5e560c06d30e', 13: 'photo-1606144042614-b2417e99c4e3', 14: 'photo-1511707171634-5f897ff02aa9', 15: 'photo-1575311373937-040b8e1fd5b6', 16: 'photo-1591488320449-011701bb6704', 17: 'photo-1512820790803-83ca734da794', 18: 'photo-1473968512647-3e447244af8f', 19: 'photo-1622979135225-d2ba269cf1ac', 20: 'photo-1558618666-fcd25c85cd64', 21: 'photo-1597872200969-0dbf5cd76424', 22: 'photo-1608043152269-423dbba4e7e1', 23: 'photo-1555041469-d03c1f65e536', 24: 'photo-1513506003901-1e6a35749a70', 25: 'photo-1626200419199-391ae4be7a41', 26: 'photo-1558618047-3c8c76ca3e8d', 27: 'photo-1558618047-3c8c76ca3e8d', 28: 'photo-1621929747188-0b4dc28498d2', 29: 'photo-1581092795360-fd1ba04bb0a8', 30: 'photo-1585771724684-38269d6639fd', 31: 'photo-1551028719-00167b16eac5', 32: 'photo-1548036161-cc16c78b2ab0', 33: 'photo-1542291026-7eec264c27ff', 34: 'photo-1543163521-1bf539c55dd2', 35: 'photo-1515886657613-9f3515b0c78f', 36: 'photo-1594938298604-8b580b7571bc', 37: 'photo-1511499767150-a7dfa8d0b97b', 38: 'photo-1542219550-37153d387353', 39: 'photo-1547996160-0dce8f8c3b79', 40: 'photo-1576566588028-4147f3842f27', 41: 'photo-1538481199705-c710c4e965fc', 42: 'photo-1598522001285-38bb0e7eff7a', 43: 'photo-1518622358385-8ea7d0794bf6', 44: 'photo-1553062407-98eeb64c6a62', 45: 'photo-1604644401890-0bd678c83788', 46: 'photo-1559087867-ce4c91325525', 47: 'photo-1547037617-71f8e01d7946', 48: 'photo-1434389677669-e08b4cac3105', 49: 'photo-1523987355523-c7b5b0dd90a7', 50: 'photo-1496747986083-52e0fe049706', 51: 'photo-1507003211169-0a1dd7228f2d', 52: 'photo-1473966968600-fa801b869a1a', 53: 'photo-1485231183945-fffde7ae021e', 54: 'photo-1449505278894-297fdb3edbc1', 55: 'photo-1590874082350-e76c5c2f5b4f', 56: 'photo-1555041469-d03c1f65e536', 57: 'photo-1555041469-d03c1f65e536', 58: 'photo-1495474472287-4d71bcdd2085', 59: 'photo-1585771724684-38269d6639fd', 60: 'photo-1490923902041-4b43b6cc5fae', 61: 'photo-1416879595882-3373a0480b5b', 62: 'photo-1463936575829-25148e1db1b8', 63: 'photo-1558618666-fcd25c85cd64', 64: 'photo-1555041469-d03c1f65e536', 65: 'photo-1509440159596-0249088772ff', 66: 'photo-1631049552057-403cdb8f0658', 67: 'photo-1584568694244-14fbdf83bd30', 68: 'photo-1586023492125-27b2c045efd3', 69: 'photo-1556909172-54557c7e9bf5', 70: 'photo-1631049421450-348ccd7f8949', 71: 'photo-1567538231151-369bfa125eb1', 72: 'photo-1558618666-fcd25c85cd64', 73: 'photo-1558618047-3c8c76ca3e8d', 74: 'photo-1555685812-fdf4c9e3e0f6', 75: 'photo-1510812431401-41d2bd2722f3', 76: 'photo-1485955900006-10f4d324d411', 77: 'photo-1571902943202-507ec2618e8f', 78: 'photo-1504280390367-361c6d9f38f4', 79: 'photo-1575052814086-f385e2e2ad1b', 80: 'photo-1534438327276-14e5300c3a48', 81: 'photo-1531325082793-ca7c9db6a4c1', 82: 'photo-1534438327276-14e5300c3a48', 83: 'photo-1533922922960-9fceb9ef4e24', 84: 'photo-1501555088652-021faa106b9b', 85: 'photo-1517836357463-d25dfeac3438', 86: 'photo-1611374243147-44a702c2d44c', 87: 'photo-1571019613454-1cb2f99b2d8b', 88: 'photo-1542621334-a254cf47733d', 89: 'photo-1571019613454-1cb2f99b2d8b', 90: 'photo-1571902943202-507ec2618e8f', 91: 'photo-1481627834876-b7833e8f5557', 92: 'photo-1490645935967-10de6ba17061', 93: 'photo-1507842217343-583bb7270b66', 94: 'photo-1497633762265-9d179a990aa6', 95: 'photo-1544947950-fa07a98d237f', 96: 'photo-1533669955142-6a73332af4db', 97: 'photo-1512820790803-83ca734da794', 98: 'photo-1495446815901-a7297e633e8d', 99: 'photo-1476275466078-4cad05e3ffdb', 100: 'photo-1526374965328-7f61d4dc18c5' };
        function imgUrl(id, w = 600) { const k = PRODUCT_IMGS[id] || 'photo-1556742049-0cfed4f6a45d'; return `https://images.unsplash.com/${k}?auto=format&fit=crop&w=${w}&q=80` }

        // =====================================================================
        // PRODUCTS DATABASE
        // =====================================================================
        const PRODUCTS = [
            { id: 1, name: 'Quantum Pro Laptop 15"', cat: 'electronics', price: 1299.99, oldPrice: 1599.99, rating: 4.8, reviews: 342, desc: 'High-performance laptop with quantum processor, 32GB RAM, 2TB SSD and 4K OLED display.', tags: ['featured', 'bestseller'], discount: 19, stock: 15, brand: 'Quantum' },
            { id: 2, name: 'Zenith Wireless Earbuds Pro', cat: 'electronics', price: 249.99, oldPrice: 299.99, rating: 4.6, reviews: 128, desc: 'Premium TWS earbuds with 40dB ANC, 30-hour battery life, and spatial audio.', tags: ['new', 'bestseller'], discount: 17, stock: 42, brand: 'Zenith' },
            { id: 3, name: 'Aura Smartwatch Series 5', cat: 'electronics', price: 399.99, oldPrice: 449.99, rating: 4.7, reviews: 89, desc: 'Advanced smartwatch with ECG monitoring, GPS, blood oxygen sensor, and always-on display.', tags: ['featured'], discount: 11, stock: 28, brand: 'Aura' },
            { id: 4, name: 'Nexus RGB Gaming Mouse', cat: 'electronics', price: 89.99, rating: 4.5, reviews: 203, desc: 'Ergonomic gaming mouse with customizable RGB, 16000 DPI sensor and 8 programmable buttons.', tags: ['bestseller'], discount: 0, stock: 63, brand: 'Nexus' },
            { id: 5, name: 'Solar Power Bank 26800mAh', cat: 'electronics', price: 79.99, oldPrice: 99.99, rating: 4.4, reviews: 56, desc: 'Dual-panel solar 26800mAh power bank with 65W USB-C PD fast charging. Waterproof.', tags: [], discount: 20, stock: 37, brand: 'SolarTech' },
            { id: 6, name: 'Ultra HD 4K Curved Monitor', cat: 'electronics', price: 549.99, rating: 4.9, reviews: 112, desc: '34" ultrawide curved 4K IPS monitor with HDR1000, 144Hz, 1ms and HDMI 2.1.', tags: ['new', 'featured'], discount: 0, stock: 12, brand: 'UltraView' },
            { id: 7, name: 'Bluetooth Mech Keyboard', cat: 'electronics', price: 129.99, rating: 4.3, reviews: 78, desc: 'Wireless TKL mechanical keyboard with Cherry MX switches and per-key RGB backlit.', tags: [], discount: 0, stock: 51, brand: 'Typecraft' },
            { id: 8, name: 'Portable 4K Mini Projector', cat: 'electronics', price: 299.99, oldPrice: 349.99, rating: 4.5, reviews: 45, desc: 'True 4K portable projector with 1500 ANSI lumens, Dolby speakers and WiFi6.', tags: ['featured'], discount: 14, stock: 19, brand: 'ProjectX' },
            { id: 9, name: 'Smart Home Hub Pro', cat: 'electronics', price: 149.99, rating: 4.6, reviews: 231, desc: '360° smart home hub with Matter protocol, built-in Zigbee hub and voice assistant.', tags: ['bestseller'], discount: 0, stock: 84, brand: 'SmartHub' },
            { id: 10, name: '4K60fps Action Camera', cat: 'electronics', price: 349.99, oldPrice: 399.99, rating: 4.7, reviews: 167, desc: 'Waterproof 4K/60fps action camera with 6-axis stabilization and 2-hour battery.', tags: ['new'], discount: 12, stock: 27, brand: 'ActionPro' },
            { id: 11, name: 'MagSafe Wireless Charger 15W', cat: 'electronics', price: 39.99, rating: 4.2, reviews: 98, desc: 'MagSafe-compatible 15W wireless charging pad with LED status indicator.', tags: [], discount: 0, stock: 105, brand: 'ChargePad' },
            { id: 12, name: 'Studio Noise-Cancel Headphones', cat: 'electronics', price: 299.99, rating: 4.8, reviews: 312, desc: 'Over-ear headphones with adaptive ANC, 40-hour battery and LDAC codec.', tags: ['bestseller'], discount: 0, stock: 33, brand: 'Zenith' },
            { id: 13, name: 'Next-Gen Gaming Console X', cat: 'electronics', price: 499.99, rating: 4.9, reviews: 421, desc: 'Latest-gen gaming console with 4K@120fps, ray tracing, 1TB NVMe and haptics.', tags: ['featured', 'new'], discount: 0, stock: 8, brand: 'GameX' },
            { id: 14, name: 'Smartphone X Ultra 200MP', cat: 'electronics', price: 1199.99, oldPrice: 1299.99, rating: 4.7, reviews: 543, desc: 'Flagship smartphone with 200MP periscope camera, Snapdragon 8 Gen 3 and 5G.', tags: ['bestseller'], discount: 8, stock: 22, brand: 'Quantum' },
            { id: 15, name: 'Pro Fitness Smart Band', cat: 'electronics', price: 199.99, rating: 4.4, reviews: 189, desc: 'Advanced fitness band with ECG, SpO2, stress tracking, GPS and 21-day battery.', tags: [], discount: 0, stock: 67, brand: 'FitPro' },
            { id: 16, name: 'Gaming Desktop Beast RTX', cat: 'electronics', price: 1899.99, rating: 4.9, reviews: 78, desc: 'RTX 4090 + Intel i9-14900K, 64GB DDR5, 4TB NVMe, liquid cooling tower.', tags: ['featured'], discount: 0, stock: 5, brand: 'GameX' },
            { id: 17, name: 'Paperwhite E-Reader Pro', cat: 'electronics', price: 179.99, oldPrice: 199.99, rating: 4.5, reviews: 134, desc: '6.8" 300ppi e-ink display, warm light, 12-week battery, IPX8 waterproof.', tags: [], discount: 10, stock: 41, brand: 'ReadPro' },
            { id: 18, name: 'Pro Drone 4K 3-Axis Gimbal', cat: 'electronics', price: 799.99, rating: 4.6, reviews: 92, desc: '4K/60fps drone with 3-axis gimbal, obstacle avoidance, 40min flight time.', tags: ['new'], discount: 0, stock: 14, brand: 'SkyView' },
            { id: 19, name: 'VR Headset Standalone 4K', cat: 'electronics', price: 399.99, rating: 4.3, reviews: 67, desc: 'Standalone VR headset with dual 4K micro-OLED displays and 120Hz.', tags: [], discount: 0, stock: 23, brand: 'VirtualX' },
            { id: 20, name: 'AI Smart Thermostat', cat: 'electronics', price: 249.99, rating: 4.7, reviews: 156, desc: 'Self-learning AI thermostat with touch screen and energy savings reports.', tags: ['bestseller'], discount: 0, stock: 38, brand: 'SmartHome' },
            { id: 21, name: 'Portable SSD 2TB NVMe', cat: 'electronics', price: 229.99, oldPrice: 279.99, rating: 4.8, reviews: 203, desc: '2TB rugged NVMe SSD with Thunderbolt 4, 2000MB/s read and IP55 rating.', tags: [], discount: 18, stock: 52, brand: 'DataMax' },
            { id: 22, name: '360° Spatial Audio Speaker', cat: 'electronics', price: 399.99, rating: 4.7, reviews: 89, desc: '360° WiFi speaker with Dolby Atmos, 24hr battery, IPX7 rated.', tags: ['featured'], discount: 0, stock: 31, brand: 'Zenith' },
            { id: 23, name: 'Pro Ergonomic Gaming Chair', cat: 'electronics', price: 349.99, rating: 4.5, reviews: 178, desc: '4D adjustable gaming chair with lumbar air pump, massage headrest and RGB.', tags: ['bestseller'], discount: 0, stock: 19, brand: 'ChairPro' },
            { id: 24, name: 'Smart RGBIC Bulbs 4-Pack', cat: 'electronics', price: 69.99, rating: 4.4, reviews: 245, desc: 'RGBIC smart bulbs with 16M colors, music sync and Alexa/Google compatible.', tags: [], discount: 0, stock: 76, brand: 'SmartHome' },
            { id: 25, name: 'Pro Drawing Tablet 13"', cat: 'electronics', price: 299.99, oldPrice: 349.99, rating: 4.6, reviews: 112, desc: '13.3" 2.5K OLED drawing tablet with 8192 pressure levels and OLED display.', tags: ['new'], discount: 14, stock: 24, brand: 'ArtPro' },
            { id: 26, name: 'Robot Vacuum Self-Empty', cat: 'electronics', price: 449.99, rating: 4.7, reviews: 198, desc: 'LiDAR robot vacuum with AI obstacle avoidance and 60-day self-empty station.', tags: ['featured'], discount: 0, stock: 17, brand: 'CleanBot' },
            { id: 27, name: 'Fingerprint Smart Door Lock', cat: 'electronics', price: 199.99, rating: 4.5, reviews: 87, desc: 'Biometric smart lock with fingerprint, PIN, Bluetooth and auto-lock.', tags: [], discount: 0, stock: 42, brand: 'SmartHome' },
            { id: 28, name: 'Portable WiFi Air Conditioner', cat: 'electronics', price: 399.99, oldPrice: 499.99, rating: 4.3, reviews: 56, desc: '10000 BTU WiFi portable AC with dehumidifier mode and app control.', tags: [], discount: 20, stock: 11, brand: 'CoolAir' },
            { id: 29, name: 'FDM 3D Printer Pro', cat: 'electronics', price: 699.99, rating: 4.8, reviews: 73, desc: '300×300mm FDM printer with auto mesh leveling, dual direct drive and Klipper.', tags: ['new'], discount: 0, stock: 9, brand: 'PrintPro' },
            { id: 30, name: '4K WiFi Security Camera', cat: 'electronics', price: 129.99, rating: 4.4, reviews: 167, desc: 'Outdoor 4K PoE security camera with color night vision and AI detection.', tags: [], discount: 0, stock: 58, brand: 'SecureCam' },
            { id: 31, name: 'Genuine Leather Moto Jacket', cat: 'fashion', price: 199.99, oldPrice: 249.99, rating: 4.7, reviews: 89, desc: 'Full-grain cowhide leather jacket with asymmetric zip and quilted lining.', tags: ['featured'], discount: 20, stock: 34, brand: 'LeatherCo' },
            { id: 32, name: 'Designer Leather Tote Bag', cat: 'fashion', price: 299.99, rating: 4.8, reviews: 156, desc: 'Premium pebbled leather tote with suede interior and gold hardware.', tags: ['bestseller'], discount: 0, stock: 22, brand: 'LuxBag' },
            { id: 33, name: 'Ultra Boost 24 Running Shoes', cat: 'fashion', price: 129.99, oldPrice: 159.99, rating: 4.6, reviews: 234, desc: 'Primeknit+ upper with Continental rubber outsole and Boost midsole.', tags: [], discount: 19, stock: 47, brand: 'RunPro' },
            { id: 34, name: "Women's Chelsea Winter Boots", cat: 'fashion', price: 149.99, rating: 4.5, reviews: 78, desc: 'Full-grain waterproof leather Chelsea boots with Thinsulate 200g insulation.', tags: ['new'], discount: 0, stock: 29, brand: 'BootMaker' },
            { id: 35, name: 'Pure Silk Evening Gown', cat: 'fashion', price: 189.99, rating: 4.9, reviews: 45, desc: '100% Charmeuse silk cowl-neck gown with spaghetti straps and floor-sweeping hem.', tags: ['featured'], discount: 0, stock: 16, brand: 'SilkHaus' },
            { id: 36, name: "Men's Italian Wool Suit", cat: 'fashion', price: 399.99, oldPrice: 499.99, rating: 4.7, reviews: 67, desc: 'Hand-tailored Super 120s Italian wool suit with double-vent jacket.', tags: [], discount: 20, stock: 12, brand: 'TailoredFit' },
            { id: 37, name: 'Polarized Titanium Aviators', cat: 'fashion', price: 159.99, rating: 4.6, reviews: 189, desc: 'Lightweight titanium frame aviators with polarized UV400 glass lenses.', tags: ['bestseller'], discount: 0, stock: 54, brand: 'OpticsPro' },
            { id: 38, name: '4-Way Stretch Slim Jeans', cat: 'fashion', price: 79.99, rating: 4.4, reviews: 312, desc: '12oz 4-way stretch denim with slim fit and comfort waistband.', tags: [], discount: 0, stock: 86, brand: 'DenimCo' },
            { id: 39, name: 'Swiss Automatic Dress Watch', cat: 'fashion', price: 599.99, rating: 4.9, reviews: 92, desc: 'ETA 2824-2 Swiss automatic movement with sapphire crystal and 100m resistance.', tags: ['featured'], discount: 0, stock: 8, brand: 'ChronoSwiss' },
            { id: 40, name: '100% Cashmere Wrap Scarf', cat: 'fashion', price: 89.99, oldPrice: 119.99, rating: 4.5, reviews: 134, desc: 'Grade-A Mongolian cashmere 200×70cm wrap scarf in 16 colors.', tags: [], discount: 25, stock: 63, brand: 'CashmereKing' },
            { id: 41, name: 'High-Waist Sculpt Leggings', cat: 'fashion', price: 49.99, rating: 4.7, reviews: 278, desc: 'Squat-proof 4-way stretch high-waist leggings with hidden pocket.', tags: ['bestseller'], discount: 0, stock: 97, brand: 'ActiveWear' },
            { id: 42, name: 'Non-Iron Slim Dress Shirt', cat: 'fashion', price: 69.99, rating: 4.3, reviews: 89, desc: '100% cotton non-iron shirt with 2-ply fabric and slim fit.', tags: [], discount: 0, stock: 45, brand: 'ShirtPro' },
            { id: 43, name: 'Block Heel Leather Ankle Boots', cat: 'fashion', price: 179.99, rating: 4.6, reviews: 56, desc: 'Genuine leather ankle boots with 3" block heel and inside zip.', tags: ['new'], discount: 0, stock: 27, brand: 'BootMaker' },
            { id: 44, name: 'Reversible Calfskin Belt', cat: 'fashion', price: 119.99, rating: 4.5, reviews: 67, desc: 'Full-grain calfskin reversible belt in black/tan with brushed nickel buckle.', tags: [], discount: 0, stock: 38, brand: 'LeatherCo' },
            { id: 45, name: 'Merino Wool Crew Sweater', cat: 'fashion', price: 89.99, oldPrice: 109.99, rating: 4.4, reviews: 123, desc: 'Ultra-fine 17.5 micron Merino wool crew-neck, naturally temperature-regulating.', tags: [], discount: 18, stock: 52, brand: 'WoolMaster' },
            { id: 46, name: 'Rhinestone Evening Clutch', cat: 'fashion', price: 139.99, rating: 4.7, reviews: 45, desc: 'Hand-set crystal rhinestone minaudière with magnetic clasp and mirror interior.', tags: ['featured'], discount: 0, stock: 19, brand: 'LuxBag' },
            { id: 47, name: '750-Fill Packable Down Jacket', cat: 'fashion', price: 149.99, rating: 4.6, reviews: 78, desc: 'RDS certified 750-fill packable puffer compresses to integrated stuff sack.', tags: [], discount: 0, stock: 34, brand: 'DownPro' },
            { id: 48, name: '100% Mulberry Silk Blouse', cat: 'fashion', price: 99.99, rating: 4.8, reviews: 92, desc: '6A grade mulberry silk charmeuse blouse with mother-of-pearl buttons.', tags: ['bestseller'], discount: 0, stock: 41, brand: 'SilkHaus' },
            { id: 49, name: 'RFID Slim Bifold Wallet', cat: 'fashion', price: 79.99, oldPrice: 99.99, rating: 4.5, reviews: 156, desc: 'Full-grain leather bifold with RFID-blocking and 8 card slots.', tags: [], discount: 20, stock: 67, brand: 'LeatherCo' },
            { id: 50, name: 'Floral Chiffon Maxi Dress', cat: 'fashion', price: 69.99, rating: 4.7, reviews: 134, desc: 'Lightweight 100% chiffon floral maxi with self-tie waist and flutter sleeves.', tags: ['new'], discount: 0, stock: 28, brand: 'FloralHouse' },
            { id: 51, name: 'Structured Tweed Blazer', cat: 'fashion', price: 189.99, rating: 4.6, reviews: 67, desc: 'Boucle tweed single-button blazer with structured shoulders and slit pockets.', tags: [], discount: 0, stock: 23, brand: 'TailoredFit' },
            { id: 52, name: 'Compression Running Shorts', cat: 'fashion', price: 39.99, rating: 4.4, reviews: 189, desc: '4" compression-lined training shorts with reflective details and zip pocket.', tags: [], discount: 0, stock: 78, brand: 'ActiveWear' },
            { id: 53, name: 'Sequin Fishtail Gown', cat: 'fashion', price: 299.99, rating: 4.9, reviews: 34, desc: 'Full-length sequin fishtail gown with boned bodice and sweeping train.', tags: ['featured'], discount: 0, stock: 11, brand: 'GlitterHaus' },
            { id: 54, name: 'Italian Leather Penny Loafers', cat: 'fashion', price: 129.99, oldPrice: 159.99, rating: 4.5, reviews: 89, desc: 'Hand-stitched Italian calfskin loafers with leather sole and penny strap.', tags: [], discount: 19, stock: 42, brand: 'ShoeItaly' },
            { id: 55, name: 'Waxed Canvas Weekender Bag', cat: 'fashion', price: 249.99, rating: 4.7, reviews: 112, desc: 'Premium waxed canvas weekend bag with leather handles and shoe compartment.', tags: ['bestseller'], discount: 0, stock: 17, brand: 'CrafterBag' },
            { id: 56, name: '12" Gel Memory Foam Mattress', cat: 'home', price: 699.99, oldPrice: 899.99, rating: 4.8, reviews: 234, desc: 'Queen 12" hybrid memory foam mattress with cooling gel layer and bamboo cover.', tags: ['featured'], discount: 22, stock: 14, brand: 'DreamSleep' },
            { id: 57, name: 'Top-Grain Leather Sectional', cat: 'home', price: 1299.99, rating: 4.7, reviews: 89, desc: 'L-shaped top-grain leather sectional with power recliners and USB charging.', tags: ['bestseller'], discount: 0, stock: 7, brand: 'HomeComfort' },
            { id: 58, name: 'Smart Grind & Brew Coffee Maker', cat: 'home', price: 149.99, rating: 4.6, reviews: 156, desc: 'Built-in burr grinder, 12-cup thermal carafe, WiFi scheduling.', tags: ['new'], discount: 0, stock: 32, brand: 'BrewMaster' },
            { id: 59, name: 'H13 HEPA Air Purifier 800ft²', cat: 'home', price: 199.99, rating: 4.5, reviews: 78, desc: '5-stage True H13 HEPA purifier for 800sq/ft with UV-C sterilizer.', tags: [], discount: 0, stock: 25, brand: 'PureAir' },
            { id: 60, name: 'Fine Porcelain 20pc Dinner Set', cat: 'home', price: 89.99, oldPrice: 119.99, rating: 4.7, reviews: 134, desc: 'White bone china dinner service for 4 with gold rim. Dishwasher safe.', tags: [], discount: 25, stock: 48, brand: 'TableArt' },
            { id: 61, name: 'GPS Robotic Lawn Mower', cat: 'home', price: 899.99, rating: 4.6, reviews: 45, desc: 'RTK GPS robotic mower for 3200sq/m with rain sensor and app control.', tags: ['featured'], discount: 0, stock: 9, brand: 'GardenBot' },
            { id: 62, name: 'Indoor Tropical Plant Bundle', cat: 'home', price: 49.99, rating: 4.8, reviews: 189, desc: 'Set of 5 air-purifying plants (monstera, pothos, snake, ZZ, peace lily) in pots.', tags: ['bestseller'], discount: 0, stock: 63, brand: 'GreenThumb' },
            { id: 63, name: 'Learning Smart Thermostat', cat: 'home', price: 249.99, rating: 4.7, reviews: 112, desc: 'AI-powered thermostat with OLED display, energy history and remote sensors.', tags: [], discount: 0, stock: 38, brand: 'SmartHome' },
            { id: 64, name: '9-Piece Rattan Patio Set', cat: 'home', price: 499.99, oldPrice: 649.99, rating: 4.5, reviews: 67, desc: 'All-weather PE rattan 9-piece set with deep-seat cushions and glass table.', tags: [], discount: 23, stock: 12, brand: 'OutdoorLiving' },
            { id: 65, name: '7-Quart Pro Stand Mixer', cat: 'home', price: 399.99, rating: 4.9, reviews: 92, desc: '7-quart bowl-lift stand mixer with 500W DC motor and 10 attachments.', tags: ['featured'], discount: 0, stock: 21, brand: 'KitchenPro' },
            { id: 66, name: 'Shredded Latex Pillow Pair', cat: 'home', price: 69.99, rating: 4.6, reviews: 278, desc: 'Adjustable fill shredded natural latex pillows with GOLS certified cotton cover.', tags: ['bestseller'], discount: 0, stock: 87, brand: 'DreamSleep' },
            { id: 67, name: 'Smart French Door Refrigerator', cat: 'home', price: 2499.99, rating: 4.8, reviews: 34, desc: '36" smart French door refrigerator with 28cu ft and Family Hub touchscreen.', tags: ['new'], discount: 0, stock: 5, brand: 'HomeComfort' },
            { id: 68, name: '50" Electric Wall Fireplace', cat: 'home', price: 299.99, oldPrice: 399.99, rating: 4.5, reviews: 56, desc: '50" recessed electric fireplace with 3D flame effect and remote.', tags: [], discount: 25, stock: 18, brand: 'FlameDecor' },
            { id: 69, name: 'Ceramic Nonstick Set 10pc', cat: 'home', price: 199.99, rating: 4.7, reviews: 123, desc: '10-piece ceramic nonstick set, oven safe to 450°F and PFOA-free.', tags: [], discount: 0, stock: 42, brand: 'KitchenPro' },
            { id: 70, name: 'Robot Vacuum Mop Combo', cat: 'home', price: 349.99, rating: 4.6, reviews: 189, desc: '2-in-1 robot vacuum with LiDAR mapping, 4000Pa suction and wash station.', tags: ['bestseller'], discount: 0, stock: 27, brand: 'CleanBot' },
            { id: 71, name: 'Upholstered Platform Bed', cat: 'home', price: 299.99, rating: 4.5, reviews: 78, desc: 'Queen linen-upholstered bed with button-tufted headboard and 4-drawer storage.', tags: [], discount: 0, stock: 16, brand: 'BedroomCo' },
            { id: 72, name: '6-Burner Infrared Gas Grill', cat: 'home', price: 499.99, oldPrice: 599.99, rating: 4.8, reviews: 67, desc: '6-burner 60000 BTU gas grill with rear infrared rotisserie and smoker box.', tags: ['featured'], discount: 17, stock: 11, brand: 'GrillMaster' },
            { id: 73, name: 'Fingerprint Smart Deadbolt', cat: 'home', price: 179.99, rating: 4.7, reviews: 89, desc: 'Biometric deadbolt with fingerprint, keypad, app control and auto-lock.', tags: ['new'], discount: 0, stock: 34, brand: 'SmartHome' },
            { id: 74, name: 'Washable Geometric Area Rug', cat: 'home', price: 149.99, rating: 4.6, reviews: 45, desc: '8×10 ft machine washable area rug with non-slip backing and pet-friendly.', tags: [], discount: 0, stock: 23, brand: 'FloorDecor' },
            { id: 75, name: '50-Bottle Dual-Zone Wine Cooler', cat: 'home', price: 399.99, rating: 4.8, reviews: 34, desc: '50-bottle dual-zone wine refrigerator with UV-resistant glass and LED lighting.', tags: ['featured'], discount: 0, stock: 14, brand: 'CellarPro' },
            { id: 76, name: '29" Full-Suspension MTB', cat: 'sports', price: 699.99, oldPrice: 899.99, rating: 4.7, reviews: 89, desc: '29" full-suspension mountain bike with Shimano 12-speed and hydraulic brakes.', tags: ['featured'], discount: 22, stock: 12, brand: 'TrailKing' },
            { id: 77, name: 'Smart Folding Treadmill', cat: 'sports', price: 1299.99, rating: 4.8, reviews: 45, desc: 'Folding treadmill with 15 incline levels, 20kph max and 22" touch screen.', tags: ['bestseller'], discount: 0, stock: 8, brand: 'FitPro' },
            { id: 78, name: '4-Person Instant Cabin Tent', cat: 'sports', price: 199.99, rating: 4.6, reviews: 134, desc: '4-person BlackOut Tech instant cabin tent with 60-second setup.', tags: ['new'], discount: 0, stock: 27, brand: 'CampPro' },
            { id: 79, name: 'Eco Non-Slip Yoga Mat', cat: 'sports', price: 39.99, rating: 4.7, reviews: 278, desc: '6mm natural rubber yoga mat with alignment lines and carry strap. Non-toxic.', tags: ['bestseller'], discount: 0, stock: 96, brand: 'YogaFlow' },
            { id: 80, name: 'Adjustable 5–52.5lb Dumbbells', cat: 'sports', price: 149.99, oldPrice: 199.99, rating: 4.5, reviews: 67, desc: 'SelectTech 5-52.5lb adjustable dumbbell pair. Replaces 15 pairs.', tags: [], discount: 25, stock: 34, brand: 'IronFlex' },
            { id: 81, name: '9-Piece Fly Fishing Combo', cat: 'sports', price: 89.99, rating: 4.6, reviews: 89, desc: '9ft 5/6wt 4-piece fly rod with CNC-machined reel and floating line.', tags: [], discount: 0, stock: 42, brand: 'AnglerPro' },
            { id: 82, name: 'Silent Magnetic Elliptical', cat: 'sports', price: 599.99, rating: 4.7, reviews: 56, desc: '24-level magnetic resistance elliptical with 20" stride and Bluetooth.', tags: ['featured'], discount: 0, stock: 14, brand: 'FitPro' },
            { id: 83, name: '65L Hiking Backpack', cat: 'sports', price: 79.99, rating: 4.8, reviews: 123, desc: '65L hiking backpack with compression, BioForm hip belt and rainfly.', tags: ['bestseller'], discount: 0, stock: 58, brand: 'TrailKing' },
            { id: 84, name: 'Inflatable SUP Board 11ft', cat: 'sports', price: 499.99, oldPrice: 649.99, rating: 4.6, reviews: 45, desc: '11ft inflatable SUP with carbon paddle, pump, leash and carry bag.', tags: [], discount: 23, stock: 16, brand: 'WaterPro' },
            { id: 85, name: '100lb Heavy Bag Boxing Set', cat: 'sports', price: 129.99, rating: 4.5, reviews: 78, desc: 'Filled 100lb Muay Thai heavy bag with gloves, hand wraps and bracket.', tags: ['new'], discount: 0, stock: 23, brand: 'FightPro' },
            { id: 86, name: "Men's 14-Piece Golf Set", cat: 'sports', price: 399.99, rating: 4.7, reviews: 34, desc: 'Complete 14-piece golf set with titanium driver, fairway woods and cart bag.', tags: [], discount: 0, stock: 18, brand: 'GolfPro' },
            { id: 87, name: '5-Band Resistance Set', cat: 'sports', price: 29.99, rating: 4.6, reviews: 189, desc: 'Natural latex resistance bands (10-50lb) with door anchor and ankle straps.', tags: ['bestseller'], discount: 0, stock: 124, brand: 'IronFlex' },
            { id: 88, name: 'Sit-In Touring Kayak 12ft', cat: 'sports', price: 399.99, oldPrice: 499.99, rating: 4.8, reviews: 56, desc: '12ft sit-in touring kayak with adjustable foot pegs and bilge pump.', tags: ['featured'], discount: 20, stock: 11, brand: 'WaterPro' },
            { id: 89, name: 'Cable Speed Jump Rope', cat: 'sports', price: 19.99, rating: 4.5, reviews: 167, desc: 'Ultra-speed 4mm cable jump rope with sealed ball-bearing handles.', tags: [], discount: 0, stock: 89, brand: 'FightPro' },
            { id: 90, name: 'Magnetic Upright Exercise Bike', cat: 'sports', price: 299.99, rating: 4.7, reviews: 92, desc: '100-level magnetic resistance indoor cycle with 22lb flywheel and Bluetooth.', tags: [], discount: 0, stock: 21, brand: 'FitPro' },
            { id: 91, name: 'The Midnight Library — Haig', cat: 'books', price: 14.99, oldPrice: 19.99, rating: 4.8, reviews: 1234, desc: "Matt Haig's award-winning bestseller about infinite second chances.", tags: ['bestseller'], discount: 25, stock: 87, brand: 'Publisher' },
            { id: 92, name: "Ottolenghi's Flavor Cookbook", cat: 'books', price: 29.99, rating: 4.7, reviews: 234, desc: '500+ vegetable-forward recipes from Michelin-star chef Ottolenghi.', tags: ['featured'], discount: 0, stock: 42, brand: 'Publisher' },
            { id: 93, name: 'Zero to One — Peter Thiel', cat: 'books', price: 24.99, rating: 4.6, reviews: 189, desc: "Peter Thiel's guide to startup thinking: build companies that create new things.", tags: [], discount: 0, stock: 56, brand: 'Publisher' },
            { id: 94, name: 'Dune Complete 6-Book Set', cat: 'books', price: 12.99, rating: 4.9, reviews: 567, desc: "Frank Herbert's complete Dune Chronicles in a hardcover slipcase edition.", tags: ['bestseller'], discount: 0, stock: 34, brand: 'Publisher' },
            { id: 95, name: 'Atomic Habits — James Clear', cat: 'books', price: 18.99, oldPrice: 24.99, rating: 4.7, reviews: 678, desc: 'The guide to building powerful habits using small 1% daily improvements.', tags: [], discount: 24, stock: 78, brand: 'Publisher' },
            { id: 96, name: 'Elon Musk — Isaacson Bio', cat: 'books', price: 21.99, rating: 4.8, reviews: 145, desc: "Walter Isaacson's definitive biography of the world's most ambitious entrepreneur.", tags: ['new'], discount: 0, stock: 29, brand: 'Publisher' },
            { id: 97, name: 'Where the Wild Things Are', cat: 'books', price: 9.99, rating: 4.9, reviews: 456, desc: "Maurice Sendak's timeless picture book classic. Perfect for all ages.", tags: ['bestseller'], discount: 0, stock: 103, brand: 'Publisher' },
            { id: 98, name: 'Phaidon Photography Book', cat: 'books', price: 49.99, rating: 4.7, reviews: 89, desc: "Phaidon's definitive photography reference with 500 landmark images.", tags: ['featured'], discount: 0, stock: 18, brand: 'Publisher' },
            { id: 99, name: 'Best of Contemporary Poetry', cat: 'books', price: 16.99, oldPrice: 22.99, rating: 4.6, reviews: 123, desc: 'Critically acclaimed anthology with 100+ contemporary voices across 300 poems.', tags: [], discount: 26, stock: 45, brand: 'Publisher' },
            { id: 100, name: 'The Algorithm Age — Tech Future', cat: 'books', price: 34.99, rating: 4.8, reviews: 234, desc: 'A comprehensive guide to AI, machine learning and the algorithm revolution.', tags: [], discount: 0, stock: 32, brand: 'Publisher' }
        ];

        const CATS = [
            { id: 'all', label: 'All Products', icon: 'fa-th-large', emoji: '🏪', count: 100 },
            { id: 'electronics', label: 'Electronics', icon: 'fa-laptop', emoji: '💻', count: 30 },
            { id: 'fashion', label: 'Fashion', icon: 'fa-tshirt', emoji: '👗', count: 25 },
            { id: 'home', label: 'Home & Garden', icon: 'fa-home', emoji: '🏡', count: 20 },
            { id: 'sports', label: 'Sports', icon: 'fa-dumbbell', emoji: '🏃', count: 15 },
            { id: 'books', label: 'Books', icon: 'fa-book', emoji: '📚', count: 10 }
        ];

        const BRANDS = ['All', 'Quantum', 'Zenith', 'Nexus', 'Aura', 'GameX', 'FitPro', 'LeatherCo', 'LuxBag', 'SmartHome', 'TrailKing', 'Publisher'];

        const PROMO_CODES = {
            'HAKIMULLAH47': { type: 'percent', value: 15, label: '15% off' },
            'SAVE10': { type: 'percent', value: 10, label: '10% off' },
            'FREESHIP': { type: 'shipping', value: 0, label: 'Free Shipping' },
            'NEWUSER20': { type: 'percent', value: 20, label: '20% off' }
        };

        // =====================================================================
        // STATE
        // =====================================================================
        const S = {
            products: [...PRODUCTS], filtered: [...PRODUCTS],
            cart: JSON.parse(localStorage.getItem('nm_cart') || '[]'),
            wishlist: JSON.parse(localStorage.getItem('nm_wish') || '[]'),
            compare: [], recent: JSON.parse(localStorage.getItem('nm_recent') || '[]'),
            page: 1, perPage: 12, cat: 'all', sort: 'featured',
            price: 5000, rating: 0, search: '', discount: 0, brand: 'All',
            view: 'grid', promoCode: null, promoDiscount: 0
        };

        // =====================================================================
        // INIT
        // =====================================================================
        document.addEventListener('DOMContentLoaded', () => {
            buildSidebar(); buildCatTabs(); startTimer(); renderProducts();
            updateCounts(); setupSearch(); setupEvents(); renderRecent();
            setupScrollProgress(); setupCursor(); showMobileFilterBtn(); applyTheme();
            showToast('Welcome to NexusMega! 🛍️', 'Use code HAKIMULLAH47 for 15% off!', 'info');
        });

        // CURSOR
        function setupCursor() {
            if (window.matchMedia('(pointer:coarse)').matches) {
                document.getElementById('cursor').style.display = 'none';
                document.getElementById('cursorRing').style.display = 'none'; return;
            }
            const c = document.getElementById('cursor'), r = document.getElementById('cursorRing');
            document.addEventListener('mousemove', e => { c.style.left = e.clientX - 6 + 'px'; c.style.top = e.clientY - 6 + 'px'; r.style.left = e.clientX - 18 + 'px'; r.style.top = e.clientY - 18 + 'px'; });
            document.addEventListener('mousedown', () => { c.style.transform = 'scale(1.6)'; r.style.transform = 'scale(0.7)'; });
            document.addEventListener('mouseup', () => { c.style.transform = ''; r.style.transform = ''; });
        }

        // SIDEBAR
        function buildSidebar() {
            document.getElementById('sidebarCats').innerHTML = CATS.map(c => `<button class="cat-btn${c.id === S.cat ? ' active' : ''}" onclick="setCategory('${c.id}')"><i class="fas ${c.icon}"></i>${c.label}<span class="cat-num">${c.count}</span></button>`).join('');
            const slider = document.getElementById('priceSlider');
            const updateFill = () => { const pct = parseInt(slider.value) / 5000 * 100; document.getElementById('priceFill').style.width = pct + '%'; document.getElementById('priceVal').textContent = parseInt(slider.value) >= 5000 ? '$5,000+' : '$' + parseInt(slider.value).toLocaleString(); };
            slider.addEventListener('input', e => { S.price = parseInt(e.target.value); updateFill(); applyFilters(); });
            updateFill();
            document.getElementById('ratingFilter').innerHTML = [0, 3, 3.5, 4, 4.5].map(r => `<button class="rating-row${S.rating === r ? ' active' : ''}" onclick="setRating(${r})">${r === 0 ? 'All Ratings' : `${r}+ <span class="stars-row">${'★'.repeat(Math.floor(r))}</span>`}</button>`).join('');
            document.getElementById('discountFilter').innerHTML = [[0, 'Any'], [10, '10%+ Off'], [20, '20%+ Off'], [30, '30%+ Off']].map(([v, l]) => `<button class="rating-row${S.discount === v ? ' active' : ''}" style="font-size:.82rem" onclick="setDiscount(${v})">${l}</button>`).join('');
            document.getElementById('brandFilter').innerHTML = BRANDS.map(b => `<span class="brand-chip${S.brand === b ? ' active' : ''}" onclick="setBrand('${b}')">${b}</span>`).join('');
        }

        function buildCatTabs() {
            document.getElementById('catTabs').innerHTML = CATS.map(c => `<button class="cat-tab${c.id === S.cat ? ' active' : ''}" onclick="setCategory('${c.id}')"><span class="tab-emoji">${c.emoji}</span>${c.label}</button>`).join('');
        }

        function startTimer() {
            const end = new Date(); end.setHours(23, 59, 59, 0);
            function tick() { const diff = end - new Date(); if (diff <= 0) end.setDate(end.getDate() + 1); document.getElementById('t-h').textContent = String(Math.floor(diff / 3600000)).padStart(2, '0'); document.getElementById('t-m').textContent = String(Math.floor(diff % 3600000 / 60000)).padStart(2, '0'); document.getElementById('t-s').textContent = String(Math.floor(diff % 60000 / 1000)).padStart(2, '0'); }
            tick(); setInterval(tick, 1000);
        }

        // FILTERS
        function setCategory(cat) {
            S.cat = cat; S.page = 1;
            document.querySelectorAll('.cat-btn').forEach(el => el.classList.toggle('active', el.textContent.includes(CATS.find(c => c.id === cat)?.label)));
            document.querySelectorAll('.cat-tab').forEach(el => el.classList.toggle('active', el.textContent.includes(CATS.find(c => c.id === cat)?.label)));
            applyFilters(); scrollToProducts();
        }
        function openCategory(cat) { setCategory(cat); }
        function setRating(r) { S.rating = r; S.page = 1; document.querySelectorAll('.rating-row').forEach(el => { el.classList.toggle('active', el.textContent.trim().startsWith(r === 0 ? 'All' : r + '')); }); applyFilters(); }
        function setDiscount(d) { S.discount = d; S.page = 1; const btns = document.querySelectorAll('#discountFilter .rating-row'); btns.forEach(el => el.classList.toggle('active', el.textContent.trim().startsWith(d === 0 ? 'Any' : d + '%'))); applyFilters(); }
        function setBrand(b) { S.brand = b; S.page = 1; document.querySelectorAll('.brand-chip').forEach(el => el.classList.toggle('active', el.textContent === b)); applyFilters(); }
        function setView(v) { S.view = v; const grid = document.getElementById('productsGrid'); grid.classList.toggle('list-view', v === 'list'); document.getElementById('gridViewBtn').classList.toggle('active', v === 'grid'); document.getElementById('listViewBtn').classList.toggle('active', v === 'list'); }
        function applyFilters() {
            S.filtered = S.products.filter(p => {
                if (S.cat !== 'all' && p.cat !== S.cat) return false;
                if (p.price > S.price) return false;
                if (p.rating < S.rating) return false;
                if (S.discount > 0 && (p.discount || 0) < S.discount) return false;
                if (S.brand !== 'All' && p.brand !== S.brand) return false;
                if (S.search) { const q = S.search.toLowerCase(); if (!p.name.toLowerCase().includes(q) && !p.desc.toLowerCase().includes(q) && !p.cat.includes(q) && !p.brand.toLowerCase().includes(q)) return false; }
                return true;
            });
            sortProducts(); S.page = 1; renderProducts();
        }
        function sortProducts() {
            S.filtered.sort((a, b) => {
                if (S.sort === 'price-asc') return a.price - b.price;
                if (S.sort === 'price-desc') return b.price - a.price;
                if (S.sort === 'rating') return b.rating - a.rating;
                if (S.sort === 'newest') return b.id - a.id;
                if (S.sort === 'discount') return (b.discount || 0) - (a.discount || 0);
                const fa = a.tags.includes('featured') ? 1 : 0, fb = b.tags.includes('featured') ? 1 : 0;
                return fb - fa || b.rating - a.rating;
            });
        }

        // RENDER
        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            const start = (S.page - 1) * S.perPage, end = start + S.perPage;
            const page = S.filtered.slice(start, end);
            document.getElementById('resultsNum').textContent = `${S.filtered.length} item${S.filtered.length !== 1 ? 's' : ''}`;
            renderActiveTags();
            if (S.view === 'list') grid.classList.add('list-view'); else grid.classList.remove('list-view');
            if (page.length === 0) {
                grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px"><div style="font-size:3.5rem;margin-bottom:14px">🔍</div><h3 style="font-family:'Clash Display',sans-serif;font-weight:700;margin-bottom:8px">No products found</h3><p style="color:var(--muted);margin-bottom:18px">Try adjusting your filters</p><button class="btn btn-primary" onclick="resetAll()"><i class="fas fa-refresh"></i>&nbsp;Reset Filters</button></div>`;
                document.getElementById('pagination').innerHTML = ''; return;
            }
            grid.innerHTML = page.map(p => productCardHTML(p)).join('');
            renderPagination(); setupCardEvents();
        }

        function productCardHTML(p) {
            const inCart = S.cart.some(c => c.id === p.id);
            const inWish = S.wishlist.includes(p.id);
            const inCmp = S.compare.includes(p.id);
            return `<div class="product-card" data-id="${p.id}">
<div class="card-badges">
${p.discount ? `<span class="badge-pill bp-sale">-${p.discount}%</span>` : ''}
${p.tags.includes('new') ? `<span class="badge-pill bp-new">New</span>` : ''}
${p.tags.includes('bestseller') ? `<span class="badge-pill bp-hot">🔥 Hot</span>` : ''}
${p.tags.includes('featured') ? `<span class="badge-pill bp-feat">Featured</span>` : ''}
</div>
<div class="card-img-wrap">
<img src="${imgUrl(p.id, 600)}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&q=80'">
</div>
<div class="card-actions">
<button class="card-action-btn${inWish ? ' wish-active' : ''}" data-action="wish" data-id="${p.id}" title="Wishlist"><i class="fas fa-heart"></i></button>
<button class="card-action-btn" data-action="quickview" data-id="${p.id}" title="Quick View"><i class="fas fa-eye"></i></button>
<button class="card-action-btn${inCmp ? ' active' : ''}" data-action="compare" data-id="${p.id}" title="Compare"><i class="fas fa-chart-bar"></i></button>
</div>
<div class="card-body">
<div class="card-cat">${p.brand} · ${p.cat}</div>
<div class="card-name">${p.name}</div>
<div class="card-desc">${p.desc}</div>
<div class="card-rating">
<div class="stars-wrap">${starsHTML(p.rating)}</div>
<span class="rating-text">${p.rating}</span>
<span class="rating-count">(${p.reviews.toLocaleString()})</span>
</div>
${p.stock < 10 ? `<div class="stock-alert"><i class="fas fa-bolt"></i> Only ${p.stock} left!</div>` : ''}
<div class="card-footer">
<div class="price-group">
<span class="price-now">$${p.price.toFixed(2)}</span>
${p.oldPrice ? `<span class="price-was">$${p.oldPrice.toFixed(2)}</span>` : ''}
</div>
<button class="cart-btn${inCart ? ' in-cart' : ''}" data-action="cart" data-id="${p.id}">
<i class="fas ${inCart ? 'fa-check' : 'fa-plus'}"></i><span>${inCart ? 'Added' : 'Add'}</span>
</button>
</div>
</div>
</div>`;
        }

        function starsHTML(r) { let h = ''; const full = Math.floor(r), half = r % 1 >= .5; for (let i = 1; i <= 5; i++) { if (i <= full) h += '<i class="fas fa-star"></i>'; else if (i === full + 1 && half) h += '<i class="fas fa-star-half-alt"></i>'; else h += '<i class="far fa-star"></i>'; } return h; }

        function setupCardEvents() {
            document.querySelectorAll('[data-action="cart"]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); addToCart(+btn.dataset.id); }));
            document.querySelectorAll('[data-action="wish"]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); toggleWish(+btn.dataset.id); }));
            document.querySelectorAll('[data-action="quickview"]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); openProductModal(+btn.dataset.id); }));
            document.querySelectorAll('[data-action="compare"]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); toggleCompare(+btn.dataset.id); }));
            document.querySelectorAll('.product-card').forEach(card => card.addEventListener('click', e => { if (!e.target.closest('button')) openProductModal(+card.dataset.id); }));
        }

        // PAGINATION
        function renderPagination() {
            const total = Math.ceil(S.filtered.length / S.perPage);
            if (total <= 1) { document.getElementById('pagination').innerHTML = ''; return; }
            let h = `<button class="pag-btn${S.page === 1 ? ' disabled' : ''}" onclick="goPage(${S.page - 1})"><i class="fas fa-chevron-left"></i></button>`;
            const st = Math.max(1, S.page - 2), en = Math.min(total, st + 4);
            if (st > 1) h += `<button class="pag-btn" onclick="goPage(1)">1</button>${st > 2 ? '<span class="pag-dots">…</span>' : ''}`;
            for (let i = st; i <= en; i++)h += `<button class="pag-btn${i === S.page ? ' active' : ''}" onclick="goPage(${i})">${i}</button>`;
            if (en < total) h += `${en < total - 1 ? '<span class="pag-dots">…</span>' : ''}<button class="pag-btn" onclick="goPage(${total})">${total}</button>`;
            h += `<button class="pag-btn${S.page === total ? ' disabled' : ''}" onclick="goPage(${S.page + 1})"><i class="fas fa-chevron-right"></i></button>`;
            document.getElementById('pagination').innerHTML = h;
        }
        function goPage(p) { const total = Math.ceil(S.filtered.length / S.perPage); if (p < 1 || p > total) return; S.page = p; renderProducts(); document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' }); }

        // ACTIVE TAGS
        function renderActiveTags() {
            const tags = [];
            if (S.cat !== 'all') tags.push({ label: CATS.find(c => c.id === S.cat)?.label, clear: () => { S.cat = 'all'; buildSidebar(); buildCatTabs(); applyFilters(); } });
            if (S.price < 5000) tags.push({ label: `Under $${S.price.toLocaleString()}`, clear: () => { S.price = 5000; document.getElementById('priceSlider').value = 5000; document.getElementById('priceFill').style.width = '100%'; document.getElementById('priceVal').textContent = '$5,000+'; applyFilters(); } });
            if (S.rating > 0) tags.push({ label: `${S.rating}+ Stars`, clear: () => setRating(0) });
            if (S.discount > 0) tags.push({ label: `${S.discount}%+ Off`, clear: () => setDiscount(0) });
            if (S.brand !== 'All') tags.push({ label: S.brand, clear: () => setBrand('All') });
            if (S.search) tags.push({ label: `"${S.search}"`, clear: () => { S.search = ''; document.getElementById('searchInput').value = ''; applyFilters(); } });
            document.getElementById('activeTags').innerHTML = tags.map((t, i) => `<span class="a-tag" onclick="clearTag(${i})">${t.label}<i class="fas fa-times"></i></span>`).join('');
            window._filterTags = tags;
        }
        function clearTag(i) { window._filterTags[i].clear(); }
        function resetAll() {
            S.cat = 'all'; S.price = 5000; S.rating = 0; S.discount = 0; S.search = ''; S.brand = 'All';
            document.getElementById('searchInput').value = '';
            document.getElementById('priceSlider').value = 5000;
            document.getElementById('priceFill').style.width = '100%';
            document.getElementById('priceVal').textContent = '$5,000+';
            buildSidebar(); buildCatTabs(); applyFilters();
        }

        // SEARCH
        function setupSearch() {
            const input = document.getElementById('searchInput');
            const dd = document.getElementById('searchDropdown');
            const clear = document.getElementById('searchClear');
            function doSearch(q, dropdownEl) {
                if (q.length < 2) { dropdownEl.classList.remove('show'); return; }
                const hits = S.products.filter(p => p.name.toLowerCase().includes(q) || p.cat.includes(q) || p.brand.toLowerCase().includes(q)).slice(0, 6);
                dropdownEl.innerHTML = `<div class="search-cat-label">Products</div>` +
                    (hits.length ? hits.map(p => `<div class="search-item" onclick="openProductModal(${p.id})"><img src="${imgUrl(p.id, 80)}" alt="${p.name}" onerror="this.style.display='none'"><div class="search-item-info"><div class="search-item-name">${p.name}</div><div class="search-item-cat">${p.brand} · ${p.cat}</div></div><span class="search-item-price">$${p.price.toFixed(2)}</span></div>`).join('') : '<div style="padding:12px 16px;color:var(--muted);font-size:.86rem">No products found</div>') +
                    `<div class="search-cat-label">Trending</div><div class="search-trending">${['Laptop', 'Headphones', 'Running Shoes', 'Yoga Mat', 'Coffee Maker', 'Smartwatch'].map(t => `<span class="trend-chip" onclick="searchFor('${t}')">${t}</span>`).join('')}</div>`;
                dropdownEl.classList.add('show');
            }
            input.addEventListener('input', debounce(e => { const q = e.target.value.trim().toLowerCase(); S.search = q; doSearch(q, dd); applyFilters(); }, 220));
            clear.addEventListener('click', () => { input.value = ''; S.search = ''; dd.classList.remove('show'); applyFilters(); });
            document.addEventListener('click', e => { if (!e.target.closest('.nav-search')) dd.classList.remove('show'); });
            // Mobile search
            const mobInput = document.getElementById('mobSearchInput');
            const mobDd = document.getElementById('mobSearchDropdown');
            mobInput.addEventListener('input', debounce(e => { const q = e.target.value.trim().toLowerCase(); S.search = q; doSearch(q, mobDd); applyFilters(); }, 220));
            document.getElementById('closeMobSearch').addEventListener('click', () => { closeMobSearch(); });
            document.getElementById('mobSearchBtn').addEventListener('click', openMobSearch);
        }
        function openMobSearch() { document.getElementById('mobSearchOverlay').classList.add('show'); document.getElementById('mobSearchInput').focus(); }
        function closeMobSearch() { document.getElementById('mobSearchOverlay').classList.remove('show'); document.getElementById('mobSearchDropdown').classList.remove('show'); }
        function searchFor(q) { document.getElementById('searchInput').value = q; S.search = q.toLowerCase(); document.getElementById('searchDropdown').classList.remove('show'); applyFilters(); scrollToProducts(); }

        // CART
        function addToCart(id, qty = 1) {
            const p = PRODUCTS.find(x => x.id === id); if (!p) return;
            const idx = S.cart.findIndex(x => x.id === id);
            if (idx > -1) { if (S.cart[idx].qty >= p.stock) { showToast('Stock Limit', `Only ${p.stock} available.`, 'error'); return; } S.cart[idx].qty += qty; }
            else S.cart.push({ id, qty: 1 });
            saveCart(); updateCounts(); renderProducts(); renderCart();
            if (idx === -1) showToast('Added to Cart!', p.name, 'success');
            else showToast('Cart Updated', p.name + ' qty increased.', 'success');
        }
        function removeFromCart(id) { S.cart = S.cart.filter(x => x.id !== id); saveCart(); updateCounts(); renderProducts(); renderCart(); }
        function changeQty(id, delta) {
            const idx = S.cart.findIndex(x => x.id === id); if (idx === -1) return;
            const p = PRODUCTS.find(x => x.id === id);
            const nq = S.cart[idx].qty + delta;
            if (nq < 1) { removeFromCart(id); return; }
            if (nq > p.stock) { showToast('Stock Limit', `Only ${p.stock} available.`, 'error'); return; }
            S.cart[idx].qty = nq; saveCart(); updateCounts(); renderCart();
        }
        function saveCart() { localStorage.setItem('nm_cart', JSON.stringify(S.cart)); }
        function openCart() { renderCart(); document.getElementById('cartDrawer').classList.add('open'); document.getElementById('overlay').classList.add('show'); }
        function closeCart() { document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }
        function renderCart() {
            const body = document.getElementById('cartBody');
            const foot = document.getElementById('cartFoot');
            const total = S.cart.reduce((s, c) => s + c.qty, 0);
            document.getElementById('cartDrawerCount').textContent = total;
            if (S.cart.length === 0) { body.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-bag"></i><h4>Your cart is empty</h4><p>Add some amazing products!</p></div>`; foot.innerHTML = ''; return; }
            body.innerHTML = S.cart.map(c => {
                const p = PRODUCTS.find(x => x.id === c.id); if (!p) return '';
                return `<div class="cart-item-card"><div class="cart-item-img"><img src="${imgUrl(p.id, 160)}" alt="${p.name}"></div><div class="cart-item-info"><div class="cart-item-name">${p.name}</div><div class="cart-item-cat">${p.brand}</div><div class="cart-item-price">$${(p.price * c.qty).toFixed(2)}</div><div class="qty-ctrl"><div class="qty-btn" onclick="changeQty(${p.id},-1)">−</div><div class="qty-val">${c.qty}</div><div class="qty-btn" onclick="changeQty(${p.id},1)">+</div></div></div><div class="cart-item-del" onclick="removeFromCart(${p.id})"><i class="fas fa-trash-alt"></i></div></div>`;
            }).join('');
            const sub = S.cart.reduce((s, c) => { const p = PRODUCTS.find(x => x.id === c.id); return s + (p ? p.price * c.qty : 0); }, 0);
            const ship = sub >= 100 || (S.promoCode && PROMO_CODES[S.promoCode]?.type === 'shipping') ? 0 : 9.99;
            let promoAmt = 0;
            if (S.promoCode && PROMO_CODES[S.promoCode]?.type === 'percent') promoAmt = sub * PROMO_CODES[S.promoCode].value / 100;
            const tax = (sub - promoAmt) * 0.08; const tot = sub - promoAmt + ship + tax;
            const pct = Math.min(100, (sub / 100) * 100);
            foot.innerHTML = `
<div class="promo-row"><input class="promo-input" placeholder="Promo code (try HAKIMULLAH47)" id="promoInput" value="${S.promoCode || ''}"><button class="promo-btn" onclick="applyPromo()">Apply</button></div>
${S.promoCode ? `<div style="background:var(--success);color:#fff;padding:6px 12px;border-radius:8px;font-size:.78rem;font-weight:700;margin-bottom:10px;display:flex;align-items:center;gap:6px"><i class="fas fa-check-circle"></i> ${PROMO_CODES[S.promoCode].label} applied!</div>` : ''}
<div class="ship-bar">${ship === 0 ? '🎉 Free shipping unlocked!' : `Add <strong>$${(100 - sub).toFixed(2)}</strong> more for free shipping`}<div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div></div>
<div class="order-summary">
<div class="row"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
${promoAmt > 0 ? `<div class="row discount-row"><span>Promo Discount</span><span>-$${promoAmt.toFixed(2)}</span></div>` : ''}
<div class="row"><span>Shipping</span><span>${ship === 0 ? 'FREE' : '$' + ship.toFixed(2)}</span></div>
<div class="row"><span>Tax (8%)</span><span>$${tax.toFixed(2)}</span></div>
<div class="row total"><span>Total</span><span>$${tot.toFixed(2)}</span></div>
</div>
<div class="checkout-actions"><button class="btn btn-ghost btn-sm" style="flex:1" onclick="closeCart()">Continue</button><button class="btn btn-primary" style="flex:2" onclick="openCheckout()"><i class="fas fa-lock"></i>&nbsp;Checkout</button></div>`;
        }
        function applyPromo() {
            const code = document.getElementById('promoInput')?.value.trim().toUpperCase();
            if (PROMO_CODES[code]) { S.promoCode = code; showToast('Promo Applied! 🎉', PROMO_CODES[code].label + ' discount added.', 'success'); renderCart(); }
            else showToast('Invalid Code', 'Check your promo code.', 'error');
        }

        // COUNTS
        function updateCounts() {
            const ct = S.cart.reduce((s, c) => s + c.qty, 0), wt = S.wishlist.length;
            const cartEl = document.getElementById('cartCount'), wishEl = document.getElementById('wishCount');
            cartEl.textContent = ct; cartEl.style.display = ct > 0 ? 'flex' : 'none';
            wishEl.textContent = wt; wishEl.style.display = wt > 0 ? 'flex' : 'none';
            const mc = document.getElementById('mobCartCount'), mw = document.getElementById('mobWlCount');
            if (mc) { mc.textContent = ct; mc.style.display = ct > 0 ? 'flex' : 'none'; }
            if (mw) { mw.textContent = wt; mw.style.display = wt > 0 ? 'flex' : 'none'; }
        }

        // WISHLIST
        function toggleWish(id) {
            const p = PRODUCTS.find(x => x.id === id); if (!p) return;
            const idx = S.wishlist.indexOf(id);
            if (idx > -1) { S.wishlist.splice(idx, 1); showToast('Removed', 'Removed from wishlist.', 'info'); }
            else { S.wishlist.push(id); showToast('Saved! ❤️', p.name + ' added to wishlist.', 'success'); }
            localStorage.setItem('nm_wish', JSON.stringify(S.wishlist));
            updateCounts(); renderProducts(); renderWishlist();
        }
        function openWishlist() { renderWishlist(); document.getElementById('wishlistDrawer').classList.add('open'); document.getElementById('overlay').classList.add('show'); }
        function closeWishlist() { document.getElementById('wishlistDrawer').classList.remove('open'); document.getElementById('overlay').classList.remove('show'); }
        function renderWishlist() {
            const body = document.getElementById('wlBody');
            document.getElementById('wlDrawerCount').textContent = S.wishlist.length;
            if (S.wishlist.length === 0) { body.innerHTML = `<div class="empty-cart"><i class="fas fa-heart"></i><h4>Nothing saved yet</h4><p>Heart items to save for later!</p></div>`; return; }
            const items = S.wishlist.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
            body.innerHTML = `<div class="wl-grid">${items.map(p => `<div class="wl-card"><div class="wl-img"><img src="${imgUrl(p.id, 400)}" alt="${p.name}"></div><div class="wl-info"><div class="wl-name">${p.name}</div><div class="wl-price">$${p.price.toFixed(2)}</div><div class="wl-btns"><button class="wl-btn add" onclick="addToCart(${p.id});closeWishlist()"><i class="fas fa-cart-plus"></i></button><button class="wl-btn remove" onclick="toggleWish(${p.id})"><i class="fas fa-times"></i></button></div></div></div>`).join('')}</div>`;
        }

        // COMPARE
        function toggleCompare(id) {
            const idx = S.compare.indexOf(id);
            if (idx > -1) { S.compare.splice(idx, 1); showToast('Removed', 'Removed from compare.', 'info'); }
            else if (S.compare.length >= 3) { showToast('Limit', 'Max 3 items to compare.', 'warning'); return; }
            else { const p = PRODUCTS.find(x => x.id === id); S.compare.push(id); showToast('Added', p?.name + ' added to compare.', 'info'); }
            renderCompareBar(); renderProducts();
        }
        function clearCompare() { S.compare = []; renderCompareBar(); renderProducts(); }
        function renderCompareBar() {
            const bar = document.getElementById('compareBar');
            document.getElementById('cmpCount').textContent = `${S.compare.length}/3 items`;
            if (S.compare.length === 0) { bar.classList.remove('show'); return; }
            bar.classList.add('show');
            let h = '';
            for (let i = 0; i < 3; i++) { const id = S.compare[i]; h += id ? `<div class="cmp-slot"><img src="${imgUrl(id, 140)}"><div class="cmp-rm" onclick="toggleCompare(${id})"><i class="fas fa-times"></i></div></div>` : `<div class="cmp-slot"><i class="fas fa-plus"></i></div>`; }
            document.getElementById('compareSlots').innerHTML = h;
        }
        function doCompare() {
            if (S.compare.length < 2) { showToast('Add More', 'Select at least 2 items.', 'warning'); return; }
            const items = S.compare.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
            document.getElementById('compareContent').innerHTML = `<div style="padding:24px"><h2 style="font-family:'Clash Display',sans-serif;font-size:1.4rem;font-weight:700;margin-bottom:20px">Product Comparison</h2><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;min-width:400px"><thead><tr><th style="padding:10px;text-align:left;font-size:.76rem;color:var(--muted);font-family:'DM Mono',monospace;text-transform:uppercase;border-bottom:1px solid var(--border)">Feature</th>${items.map(p => `<th style="padding:10px;text-align:center;border-bottom:1px solid var(--border)"><img src="${imgUrl(p.id, 120)}" style="width:72px;height:72px;object-fit:cover;border-radius:10px;margin:0 auto 7px;display:block"><div style="font-family:'Clash Display',sans-serif;font-size:.88rem;font-weight:700">${p.name}</div><div style="font-size:.7rem;color:var(--muted)">${p.brand}</div></th>`).join('')}</tr></thead><tbody>${[['Price', 'price', '$'], ['Rating', 'rating', ''], ['Reviews', 'reviews', ''], ['Stock', 'stock', ' units'], ['Discount', 'discount', '% OFF']].map(([label, key]) => `<tr><td style="padding:9px 10px;font-weight:700;font-size:.8rem;color:var(--muted);border-bottom:1px solid var(--border);font-family:'DM Mono',monospace;text-transform:uppercase">${label}</td>${items.map(p => { let v = p[key]; if (key === 'price') v = '$' + v.toFixed(2); else if (key === 'rating') v = starsHTML(v) + ` <span style="font-size:.78rem;font-weight:700">${v}</span>`; else if (key === 'reviews') v = v.toLocaleString() + ' reviews'; else if (key === 'stock') v = v + ' units'; else if (key === 'discount') v = v ? v + '% OFF' : '—'; return `<td style="padding:9px 10px;text-align:center;border-bottom:1px solid var(--border);font-weight:700;color:var(--brand)">${v}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div><div style="display:flex;gap:10px;margin-top:20px;justify-content:center;flex-wrap:wrap">${items.map(p => `<button class="btn btn-primary" onclick="addToCart(${p.id});document.getElementById('compareModal').classList.remove('show')"><i class="fas fa-cart-plus"></i>&nbsp;Add ${p.name.split(' ')[0]}</button>`).join('')}</div></div>`;
            document.getElementById('compareModal').classList.add('show');
        }

        // PRODUCT MODAL
        function openProductModal(id) {
            const p = PRODUCTS.find(x => x.id === id); if (!p) return;
            addRecent(id);
            const inWish = S.wishlist.includes(id);
            const save = p.oldPrice ? ((p.oldPrice - p.price) / p.oldPrice * 100).toFixed(0) : 0;
            document.getElementById('productModalContent').innerHTML = `
<div class="detail-grid">
<div class="detail-img-side">
<img class="detail-main-img" src="${imgUrl(p.id, 800)}" alt="${p.name}" id="detailImg">
<div class="detail-thumbs">
<div class="detail-thumb active"><img src="${imgUrl(p.id, 104)}" onclick="switchImg('${imgUrl(p.id, 800)}',this)"></div>
<div class="detail-thumb"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=104&auto=format&q=80" onclick="switchImg('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&q=80',this)"></div>
</div>
</div>
<div class="detail-info">
<div class="detail-cat">${p.brand} · ${p.cat.toUpperCase()}</div>
<h2 class="detail-name">${p.name}</h2>
<div class="detail-rating"><div class="stars-wrap">${starsHTML(p.rating)}</div><span style="font-weight:700;font-size:.88rem">${p.rating}</span><span style="color:var(--muted);font-size:.82rem">(${p.reviews.toLocaleString()} reviews)</span></div>
<div class="modal-tabs">
<div class="m-tab active" onclick="switchTab(this,'desc')">Description</div>
<div class="m-tab" onclick="switchTab(this,'specs')">Specs</div>
<div class="m-tab" onclick="switchTab(this,'reviews')">Reviews</div>
</div>
<div id="tab-desc" class="m-panel active">
<p class="detail-desc">${p.desc}</p>
<ul style="font-size:.82rem;color:var(--muted);line-height:2.1;list-style:disc;padding-left:16px">
<li>Premium materials &amp; build quality</li><li>30-day hassle-free returns</li>
<li>1-year manufacturer warranty</li><li>Free shipping on orders $100+</li>
</ul>
</div>
<div id="tab-specs" class="m-panel"><table class="specs-table">${[['Brand', p.brand], ['Category', p.cat], ['Rating', p.rating + '/5'], ['Reviews', p.reviews.toLocaleString()], ['Stock', p.stock + ' units'], ['Discount', p.discount ? p.discount + '%' : 'None'], ['Tags', p.tags.join(', ') || '—']].map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</table></div>
<div id="tab-reviews" class="m-panel">${[5, 4, 3].map(r => `<div class="review-item"><div class="review-avatar">${String.fromCharCode(64 + r)}</div><div><div style="font-weight:700;font-size:.83rem">Verified Buyer</div><div class="stars-wrap" style="font-size:.72rem">${starsHTML(r)}</div><div style="font-size:.8rem;color:var(--muted);margin-top:3px">Excellent product! Exactly as described. Highly recommend.</div></div></div>`).join('')}</div>
<div class="detail-price-row">
<span class="detail-price">$${p.price.toFixed(2)}</span>
${p.oldPrice ? `<span class="detail-old">$${p.oldPrice.toFixed(2)}</span><span class="detail-save">Save ${save}%</span>` : ''}
</div>
<div class="detail-meta">
<div class="detail-meta-row"><i class="fas fa-circle-check"></i>${p.stock > 10 ? 'In Stock' : 'Only ' + p.stock + ' left!'}</div>
<div class="detail-meta-row"><i class="fas fa-truck"></i>Free shipping over $100</div>
<div class="detail-meta-row"><i class="fas fa-rotate-left"></i>30-day free returns</div>
<div class="detail-meta-row"><i class="fas fa-shield-halved"></i>Secure 256-bit SSL checkout</div>
</div>
<div class="qty-row">
<label>Qty:</label>
<div class="qty-ctrl-lg">
<button onclick="this.nextElementSibling.textContent=Math.max(1,parseInt(this.nextElementSibling.textContent)-1)">−</button>
<div class="qty-disp">1</div>
<button onclick="this.previousElementSibling.textContent=Math.min(${p.stock},parseInt(this.previousElementSibling.textContent)+1)">+</button>
</div>
</div>
<div class="detail-actions">
<button class="btn btn-primary" onclick="addToCart(${id},parseInt(document.querySelector('.qty-disp').textContent));closeProductModal()"><i class="fas fa-cart-plus"></i>&nbsp;Add to Cart</button>
<button class="btn btn-ghost" onclick="toggleWish(${id})"><i class="fas fa-heart" style="color:${inWish ? 'var(--brand)' : ''}"></i>&nbsp;${inWish ? 'Saved' : 'Save'}</button>
<button class="btn btn-ghost" style="flex:0;width:40px;padding:0" onclick="toggleCompare(${id})"><i class="fas fa-chart-bar"></i></button>
</div>
</div>
</div>`;
            document.getElementById('productModal').classList.add('show');
        }
        function switchImg(src, thumb) { document.getElementById('detailImg').src = src; document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active')); thumb?.closest('.detail-thumb')?.classList.add('active'); }
        function switchTab(el, name) { document.querySelectorAll('.m-tab').forEach(t => t.classList.remove('active')); document.querySelectorAll('.m-panel').forEach(t => t.classList.remove('active')); el.classList.add('active'); document.getElementById('tab-' + name).classList.add('active'); }
        function closeProductModal() { document.getElementById('productModal').classList.remove('show'); }

        // CHECKOUT — with required payment fields validation
        function openCheckout() {
            if (S.cart.length === 0) { showToast('Empty Cart', 'Add items first.', 'error'); return; }
            closeCart();
            const sub = S.cart.reduce((s, c) => { const p = PRODUCTS.find(x => x.id === c.id); return s + (p ? p.price * c.qty : 0); }, 0);
            let promoAmt = 0;
            if (S.promoCode && PROMO_CODES[S.promoCode]?.type === 'percent') promoAmt = sub * PROMO_CODES[S.promoCode].value / 100;
            const ship = sub >= 100 ? 0 : 9.99; const tax = (sub - promoAmt) * 0.08; const tot = sub - promoAmt + ship + tax;
            document.getElementById('checkoutContent').innerHTML = `<div style="padding:24px 28px">
<h2 style="font-family:'Clash Display',sans-serif;font-size:1.4rem;font-weight:700;margin-bottom:20px">Secure Checkout</h2>
<div class="checkout-steps">
<div class="co-step active"><div class="snum">1</div><span class="lbl">Shipping</span></div>
<div class="co-step"><div class="snum">2</div><span class="lbl">Payment</span></div>
<div class="co-step"><div class="snum">3</div><span class="lbl">Confirm</span></div>
</div>
<div class="checkout-grid">
<div>
<div class="form-sec"><h4>Shipping Information</h4>
<div class="form-grid">
<div class="form-group"><label class="form-label">First Name <span class="req">*</span></label><input class="form-input" id="co-fname" placeholder="John" required></div>
<div class="form-group"><label class="form-label">Last Name <span class="req">*</span></label><input class="form-input" id="co-lname" placeholder="Doe" required></div>
<div class="form-group full"><label class="form-label">Email <span class="req">*</span></label><input class="form-input" id="co-email" placeholder="john@example.com" type="email" required></div>
<div class="form-group full"><label class="form-label">Phone <span class="req">*</span></label><input class="form-input" id="co-phone" placeholder="+1 (555) 000-0000" type="tel" required></div>
<div class="form-group full"><label class="form-label">Address <span class="req">*</span></label><input class="form-input" id="co-addr" placeholder="123 Main Street, Apt 4B" required></div>
<div class="form-group"><label class="form-label">City <span class="req">*</span></label><input class="form-input" id="co-city" placeholder="New York" required></div>
<div class="form-group"><label class="form-label">ZIP Code <span class="req">*</span></label><input class="form-input" id="co-zip" placeholder="10001" required></div>
</div></div>
<div class="form-sec"><h4>Payment Method</h4>
<div class="pay-opts">
<div class="pay-opt active" onclick="selectPay(this)"><i class="fab fa-cc-visa" style="color:#1a1f71"></i></div>
<div class="pay-opt" onclick="selectPay(this)"><i class="fab fa-cc-mastercard" style="color:#eb001b"></i></div>
<div class="pay-opt" onclick="selectPay(this)"><i class="fab fa-cc-amex" style="color:#2e77bc"></i></div>
<div class="pay-opt" onclick="selectPay(this)"><i class="fab fa-paypal" style="color:#003087"></i></div>
</div>
<div class="form-grid">
<div class="form-group full"><label class="form-label">Card Number <span class="req">*</span></label><input class="form-input" id="co-card" placeholder="4242 4242 4242 4242" maxlength="19" required oninput="formatCard(this)"><div class="form-error" id="err-card">Please enter a valid 16-digit card number</div></div>
<div class="form-group"><label class="form-label">Expiry <span class="req">*</span></label><input class="form-input" id="co-exp" placeholder="MM/YY" maxlength="5" required oninput="formatExpiry(this)"><div class="form-error" id="err-exp">Enter valid expiry (MM/YY)</div></div>
<div class="form-group"><label class="form-label">CVV <span class="req">*</span></label><input class="form-input" id="co-cvv" placeholder="•••" maxlength="4" type="password" required><div class="form-error" id="err-cvv">CVV must be 3–4 digits</div></div>
<div class="form-group full"><label class="form-label">Cardholder Name <span class="req">*</span></label><input class="form-input" id="co-cname" placeholder="John Doe" required><div class="form-error" id="err-cname">Please enter cardholder name</div></div>
</div>
</div>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<button class="btn btn-ghost" style="flex:1;min-width:120px" onclick="document.getElementById('checkoutModal').classList.remove('show');openCart()"><i class="fas fa-arrow-left"></i>&nbsp;Back</button>
<button class="btn btn-primary" style="flex:2;min-width:160px" onclick="placeOrder()"><i class="fas fa-lock"></i>&nbsp;Place Order — $${tot.toFixed(2)}</button>
</div>
</div>
<div>
<div class="co-summary">
<h4>Order Summary</h4>
${S.cart.map(c => { const p = PRODUCTS.find(x => x.id === c.id); if (!p) return ''; return `<div class="co-item"><img src="${imgUrl(p.id, 96)}" alt="${p.name}"><div class="ci-name">${p.name} ×${c.qty}</div><div class="ci-price">$${(p.price * c.qty).toFixed(2)}</div></div>`; }).join('')}
<div style="padding-top:10px;margin-top:6px;border-top:1px solid var(--border)">
<div style="display:flex;justify-content:space-between;font-size:.84rem;padding:4px 0"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
${promoAmt > 0 ? `<div style="display:flex;justify-content:space-between;font-size:.84rem;padding:4px 0;color:var(--success);font-weight:700"><span>Promo</span><span>-$${promoAmt.toFixed(2)}</span></div>` : ''}
<div style="display:flex;justify-content:space-between;font-size:.84rem;padding:4px 0"><span>Shipping</span><span>${ship === 0 ? 'FREE' : '$' + ship.toFixed(2)}</span></div>
<div style="display:flex;justify-content:space-between;font-size:.84rem;padding:4px 0"><span>Tax (8%)</span><span>$${tax.toFixed(2)}</span></div>
<div style="display:flex;justify-content:space-between;font-weight:800;font-size:1rem;padding-top:9px;border-top:1px solid var(--border);margin-top:5px"><span>Total</span><span style="color:var(--brand)">$${tot.toFixed(2)}</span></div>
</div>
</div>
<div style="background:var(--brand-light);border-radius:var(--radius-sm);padding:12px;margin-top:12px;font-size:.8rem;color:var(--brand);font-weight:600">
<div><i class="fas fa-shield-halved"></i>&nbsp;256-bit SSL encryption</div>
<div style="margin-top:5px"><i class="fas fa-truck"></i>&nbsp;Est. delivery: 3–5 business days</div>
</div>
</div>
</div>
</div>`;
            document.getElementById('checkoutModal').classList.add('show');
        }

        function formatCard(input) {
            let v = input.value.replace(/\D/g, '').substring(0, 16);
            input.value = v.replace(/(.{4})/g, '$1 ').trim();
        }
        function formatExpiry(input) {
            let v = input.value.replace(/\D/g, '');
            if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2, 4);
            input.value = v;
        }

        function validatePayment() {
            let ok = true;
            const card = document.getElementById('co-card');
            const exp = document.getElementById('co-exp');
            const cvv = document.getElementById('co-cvv');
            const cname = document.getElementById('co-cname');
            const cardVal = card.value.replace(/\s/g, '');
            if (!cardVal || cardVal.length < 15) { card.classList.add('error'); document.getElementById('err-card').classList.add('show'); ok = false; }
            else { card.classList.remove('error'); document.getElementById('err-card').classList.remove('show'); }
            const expOk = /^\d{2}\/\d{2}$/.test(exp.value);
            if (!expOk) { exp.classList.add('error'); document.getElementById('err-exp').classList.add('show'); ok = false; }
            else { exp.classList.remove('error'); document.getElementById('err-exp').classList.remove('show'); }
            const cvvVal = cvv.value.replace(/\D/g, '');
            if (!cvvVal || cvvVal.length < 3) { cvv.classList.add('error'); document.getElementById('err-cvv').classList.add('show'); ok = false; }
            else { cvv.classList.remove('error'); document.getElementById('err-cvv').classList.remove('show'); }
            const cnameVal = cname.value.trim();
            if (!cnameVal || cnameVal.length < 2) { cname.classList.add('error'); document.getElementById('err-cname').classList.add('show'); ok = false; }
            else { cname.classList.remove('error'); document.getElementById('err-cname').classList.remove('show'); }
            return ok;
        }

        function validateShipping() {
            const fields = ['co-fname', 'co-lname', 'co-email', 'co-phone', 'co-addr', 'co-city', 'co-zip'];
            let ok = true;
            fields.forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                if (!el.value.trim()) { el.classList.add('error'); ok = false; }
                else el.classList.remove('error');
            });
            return ok;
        }

        function selectPay(el) { document.querySelectorAll('.pay-opt').forEach(e => e.classList.remove('active')); el.classList.add('active'); }

        function placeOrder() {
            if (!validateShipping()) { showToast('Missing Info', 'Please fill all shipping fields.', 'error'); return; }
            if (!validatePayment()) { showToast('Payment Error', 'Please check your payment details.', 'error'); return; }
            const orderId = 'NM' + Math.floor(Math.random() * 1000000);
            document.getElementById('checkoutContent').innerHTML = `<div class="success-wrap">
<div class="success-icon"><i class="fas fa-check"></i></div>
<h2 style="font-family:'Clash Display',sans-serif;font-size:1.9rem;font-weight:700;margin-bottom:8px">Order Placed! 🎉</h2>
<p style="color:var(--muted);margin-bottom:6px">Thank you for shopping with NexusMega!</p>
<p style="font-weight:700">Order ID: <span style="color:var(--brand)">#${orderId}</span></p>
<p style="color:var(--muted);font-size:.86rem;margin-top:8px">Confirmation email sent · Est. delivery: 3–5 business days</p>
<div style="display:flex;gap:12px;justify-content:center;margin-top:28px;flex-wrap:wrap">
<button class="btn btn-primary btn-lg" onclick="document.getElementById('checkoutModal').classList.remove('show')"><i class="fas fa-shopping-bag"></i>&nbsp;Continue Shopping</button>
<button class="btn btn-ghost" onclick="document.getElementById('checkoutModal').classList.remove('show')"><i class="fas fa-list"></i>&nbsp;Track Order</button>
</div>
</div>`;
            S.cart = []; S.promoCode = null; saveCart(); updateCounts(); renderProducts();
            showToast('Order Confirmed! 🎉', `Order #${orderId} placed.`, 'success');
        }

        // RECENTLY VIEWED
        function addRecent(id) { S.recent = [id, ...S.recent.filter(x => x !== id)].slice(0, 10); localStorage.setItem('nm_recent', JSON.stringify(S.recent)); renderRecent(); }
        function renderRecent() {
            const sec = document.getElementById('recentSect');
            const items = S.recent.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
            if (items.length === 0) { sec.style.display = 'none'; return; }
            sec.style.display = 'block';
            document.getElementById('recentScroll').innerHTML = items.map(p => `<div class="recent-card" onclick="openProductModal(${p.id})"><img src="${imgUrl(p.id, 320)}" alt="${p.name}"><div class="recent-info"><div class="recent-name">${p.name}</div><div class="recent-price">$${p.price.toFixed(2)}</div></div></div>`).join('');
        }
        function clearRecent() { S.recent = []; localStorage.removeItem('nm_recent'); document.getElementById('recentSect').style.display = 'none'; }

        // THEME
        function toggleTheme() {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('nm_theme', next);
            document.getElementById('themeBtn').innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
        function applyTheme() {
            const saved = localStorage.getItem('nm_theme');
            if (saved === 'dark') { document.documentElement.setAttribute('data-theme', 'dark'); document.getElementById('themeBtn').innerHTML = '<i class="fas fa-sun"></i>'; }
        }

        // SCROLL
        function setupScrollProgress() {
            window.addEventListener('scroll', () => {
                const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                document.getElementById('scroll-progress').style.width = pct + '%';
                document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
            });
        }
        function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
        function scrollToProducts() { document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' }); }

        // MOBILE FILTER
        function showMobileFilterBtn() {
            const btn = document.getElementById('mobileFilterBtn');
            const check = () => btn.style.display = window.innerWidth < 1280 ? 'flex' : 'none';
            check(); window.addEventListener('resize', check);
        }
        function openMobileFilter() {
            document.getElementById('mobileFilterContent').innerHTML = document.getElementById('sidebar').innerHTML;
            document.getElementById('filterSheet').classList.add('show');
            document.getElementById('overlay').classList.add('show');
        }
        function closeMobileFilter() {
            document.getElementById('filterSheet').classList.remove('show');
            document.getElementById('overlay').classList.remove('show');
        }
        function closeMobileNav() {
            document.getElementById('mobileNav').classList.remove('show');
            document.getElementById('overlay').classList.remove('show');
        }

        // NEWSLETTER
        function subscribeNL() {
            const email = document.getElementById('nlEmail').value;
            if (!email || !email.includes('@')) { showToast('Invalid Email', 'Enter a valid email address.', 'error'); return; }
            showToast('Subscribed! 🎉', 'Welcome! Use code HAKIMULLAH47 for 15% off!', 'success');
            document.getElementById('nlEmail').value = '';
        }

        // TOAST
        const TOAST_ICONS = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info', warning: 'fa-triangle-exclamation' };
        function showToast(title, msg, type = 'info') {
            const stack = document.getElementById('toastStack');
            const t = document.createElement('div');
            t.className = `toast t-${type}`;
            t.innerHTML = `<div class="toast-icon"><i class="fas ${TOAST_ICONS[type]}"></i></div><div class="toast-content"><div class="toast-title">${title}</div><div class="toast-msg">${msg}</div></div><button class="toast-x" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
            stack.appendChild(t);
            requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
            setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 4500);
        }

        // EVENTS
        function setupEvents() {
            document.getElementById('themeBtn').addEventListener('click', toggleTheme);
            document.getElementById('cartNavBtn').addEventListener('click', openCart);
            document.getElementById('closeCartBtn').addEventListener('click', closeCart);
            document.getElementById('wishBtn').addEventListener('click', openWishlist);
            document.getElementById('closeWlBtn').addEventListener('click', closeWishlist);
            document.getElementById('mobMenuBtn').addEventListener('click', () => { document.getElementById('mobileNav').classList.add('show'); document.getElementById('overlay').classList.add('show'); });
            document.getElementById('closeMobileNav').addEventListener('click', closeMobileNav);
            document.getElementById('overlay').addEventListener('click', () => { closeCart(); closeWishlist(); closeMobileNav(); closeMobileFilter(); closeMobSearch(); });
            document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
            document.getElementById('closeCheckoutModal').addEventListener('click', () => document.getElementById('checkoutModal').classList.remove('show'));
            document.getElementById('closeCompareModal').addEventListener('click', () => document.getElementById('compareModal').classList.remove('show'));
            document.getElementById('compareNavBtn').addEventListener('click', () => { if (S.compare.length > 0) doCompare(); else showToast('Compare', 'Click the chart icon on products to compare.', 'info'); });
            document.getElementById('userAvatarBtn').addEventListener('click', () => document.getElementById('userDropdown').classList.toggle('show'));
            document.addEventListener('click', e => { if (!e.target.closest('.user-menu')) document.getElementById('userDropdown').classList.remove('show'); });
            document.getElementById('sortSel').addEventListener('change', e => { S.sort = e.target.value; sortProducts(); S.page = 1; renderProducts(); });
            document.getElementById('perPageSel').addEventListener('change', e => { S.perPage = +e.target.value; S.page = 1; renderProducts(); });
            document.getElementById('mobileFilterBtn').addEventListener('click', openMobileFilter);
            document.getElementById('searchMobBtn')?.addEventListener('click', openMobSearch);
            document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeProductModal(); document.getElementById('checkoutModal').classList.remove('show'); document.getElementById('compareModal').classList.remove('show'); closeCart(); closeWishlist(); closeMobSearch(); } });
        }

        function debounce(fn, delay) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), delay); }; }