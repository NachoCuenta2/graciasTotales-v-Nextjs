interface SeedProduct {
    descripcion: string;
    Imagenes: string[];
    valor: number;
    slug: string;
    titulo: string;
    disponible: boolean;
}

export type ValidCategories = 'men' | 'women' | 'kid' | 'unisex';
export type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            Imagenes: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
                '1740507-00-A_0_2000.jpg',
            ],

            valor: 75,

            slug: "mens_chill_crew_neck_sweatshirt",


            titulo: "Men’s Chill Crew Neck Sweatshirt",
            disponible: true
        },
        {
            descripcion: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            Imagenes: [
                '1740507-00-A_0_2000.jpg',
                '1740507-00-A_1.jpg',
            ],

            valor: 200,

            slug: "men_quilted_shirt_jacket",


            titulo: "Men's Quilted Shirt Jacket",
            disponible: true
        },

        {
            descripcion: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            Imagenes: [
                '1740250-00-A_0_2000.jpg',
                '1740250-00-A_1.jpg'
            ],

            valor: 130,

            slug: "men_raven_lightweight_zip_up_bomber_jacket",


            titulo: "Men's Raven Lightweight Zip Up Bomber Jacket",
            disponible: true
        },

        {
            descripcion: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            Imagenes: [
                '1740280-00-A_0_2000.jpg',
                '1740280-00-A_1.jpg',
            ],

            valor: 45,

            slug: "men_turbine_long_sleeve_tee",


            titulo: "Men's Turbine Long Sleeve Tee",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            Imagenes: [
                '1741416-00-A_0_2000.jpg',
                '1741416-00-A_1.jpg',
            ],

            valor: 40,

            slug: "men_turbine_short_sleeve_tee",


            titulo: "Men's Turbine Short Sleeve Tee",
            disponible: true
        },
        {
            descripcion: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            Imagenes: [
                '7654393-00-A_2_2000.jpg',
                '7654393-00-A_3.jpg',
            ],

            valor: 35,

            slug: "men_cybertruck_owl_tee",


            titulo: "Men's Cybertruck Owl Tee",
            disponible: true
        },
        {
            descripcion: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            Imagenes: [
                '1703767-00-A_0_2000.jpg',
                '1703767-00-A_1.jpg',
            ],

            valor: 35,

            slug: "men_solar_roof_tee",


            titulo: "Men's Solar Roof Tee",
            disponible: true
        },
        {
            descripcion: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            Imagenes: [
                '1700280-00-A_0_2000.jpg',
                '1700280-00-A_1.jpg',
            ],

            valor: 35,

            slug: "men_let_the_sun_shine_tee",


            titulo: "Men's Let the Sun Shine Tee",
            disponible: true
        },
        {
            descripcion: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            Imagenes: [
                '8764734-00-A_0_2000.jpg',
                '8764734-00-A_1.jpg',
            ],

            valor: 35,

            slug: "men_3d_large_wordmark_tee",


            titulo: "Men's 3D Large Wordmark Tee",
            disponible: true
        },
        {
            descripcion: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            Imagenes: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],

            valor: 35,

            slug: "men_3d_t_logo_tee",


            titulo: "Men's 3D T Logo Tee",
            disponible: true
        },
        {
            descripcion: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            Imagenes: [
                '8528839-00-A_0_2000.jpg',
                '8528839-00-A_2.jpg',
            ],

            valor: 35,

            slug: "men_3d_small_wordmark_tee",


            titulo: "Men’s 3D Small Wordmark Tee",
            disponible: true
        },
        {
            descripcion: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            Imagenes: [
                '1549268-00-A_0_2000.jpg',
                '1549268-00-A_2.jpg',
            ],

            valor: 35,

            slug: "men_plaid_mode_tee",


            titulo: "Men's Plaid Mode Tee",
            disponible: true
        },
        {
            descripcion: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            Imagenes: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],

            valor: 35,

            slug: "men_powerwall_tee",


            titulo: "Men's Powerwall Tee",
            disponible: true
        },
        {
            descripcion: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            Imagenes: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],

            valor: 30,

            slug: "men_battery_day_tee",


            titulo: "Men's Battery Day Tee",
            disponible: true
        },
        {
            descripcion: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            Imagenes: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],

            valor: 30,

            slug: "men_cybertruck_bulletproof_tee",


            titulo: "Men’s Cybertruck Bulletproof Tee",
            disponible: true
        },
        {
            descripcion: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            Imagenes: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],

            valor: 35,

            slug: "men_haha_yes_tee",


            titulo: "Men's Haha Yes Tee",
            disponible: true
        },
        {
            descripcion: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            Imagenes: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],

            valor: 35,

            slug: "men_s3xy_tee",


            titulo: "Men's S3XY Tee",
            disponible: true
        },
        {
            descripcion: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            Imagenes: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],

            valor: 40,

            slug: "men_3d_wordmark_long_sleeve_tee",


            titulo: "Men's 3D Wordmark Long Sleeve Tee",
            disponible: true
        },
        {
            descripcion: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            Imagenes: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],

            valor: 40,

            slug: "men_3d_t_logo_long_sleeve_tee",


            titulo: "Men's 3D T Logo Long Sleeve Tee",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            Imagenes: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],

            valor: 115,

            slug: "men_raven_lightweight_hoodie",


            titulo: "Men's Raven Lightweight Hoodie",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            Imagenes: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],

            valor: 130,

            slug: "chill_pullover_hoodie",


            titulo: "Chill Pullover Hoodie",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            Imagenes: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],

            valor: 85,

            slug: "men_chill_full_zip_hoodie",


            titulo: "Men's Chill Full Zip Hoodie",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            Imagenes: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],

            valor: 85,

            slug: "men_chill_quarter_zip_pullover_-_gray",


            titulo: "Men's Chill Quarter Zip Pullover - Gray",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            Imagenes: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],

            valor: 85,

            slug: "men_chill_quarter_zip_pullover_-_white",


            titulo: "Men's Chill Quarter Zip Pullover - White",
            disponible: true
        },
        {
            descripcion: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            Imagenes: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],

            valor: 70,

            slug: "3d_large_wordmark_pullover_hoodie",


            titulo: "3D Large Wordmark Pullover Hoodie",
            disponible: true
        },
        {
            descripcion: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            Imagenes: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],

            valor: 60,

            slug: "cybertruck_graffiti_hoodie",


            titulo: "Cybertruck Graffiti Hoodie",
            disponible: true
        },
        {
            descripcion: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            Imagenes: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],

            valor: 30,

            slug: "relaxed_t_logo_hat",


            titulo: "Relaxed T Logo Hat",
            disponible: true
        },
        {
            descripcion: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            Imagenes: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],

            valor: 35,

            slug: "thermal_cuffed_beanie",


            titulo: "Thermal Cuffed Beanie",
            disponible: true
        },
        {
            descripcion: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            Imagenes: [
                '1740535-00-A_0_2000.jpg',
                '1740535-00-A_1.jpg',
            ],

            valor: 225,

            slug: "women_cropped_puffer_jacket",


            titulo: "Women's Cropped Puffer Jacket",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            Imagenes: [
                '1740226-00-A_0_2000.jpg',
                '1740226-00-A_1.jpg',
            ],

            valor: 130,

            slug: "women_chill_half_zip_cropped_hoodie",


            titulo: "Women's Chill Half Zip Cropped Hoodie",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            Imagenes: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],

            valor: 110,

            slug: "women_raven_slouchy_crew_sweatshirt",


            titulo: "Women's Raven Slouchy Crew Sweatshirt",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            Imagenes: [
                '1740290-00-A_0_2000.jpg',
                '1740290-00-A_1.jpg',
            ],

            valor: 45,

            slug: "women_turbine_cropped_long_sleeve_tee",


            titulo: "Women's Turbine Cropped Long Sleeve Tee",
            disponible: true
        },
        {
            descripcion: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            Imagenes: [
                '1741441-00-A_0_2000.jpg',
                '1741441-00-A_1.jpg',
            ],

            valor: 40,

            slug: "women_turbine_cropped_short_sleeve_tee",


            titulo: "Women's Turbine Cropped Short Sleeve Tee",
            disponible: true
        },
        {
            descripcion: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            Imagenes: [
                '8765090-00-A_0_2000.jpg',
                '8765090-00-A_1.jpg',
            ],

            valor: 35,

            slug: "women_t_logo_short_sleeve_scoop_neck_tee",


            titulo: "Women's T Logo Short Sleeve Scoop Neck Tee",
            disponible: true
        },
        {
            descripcion: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            Imagenes: [
                '8765100-00-A_0_2000.jpg',
                '8765100-00-A_1.jpg',
            ],

            valor: 40,

            slug: "women_t_logo_long_sleeve_scoop_neck_tee",


            titulo: "Women's T Logo Long Sleeve Scoop Neck Tee",
            disponible: true
        },
        {
            descripcion: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
            Imagenes: [
                '8765120-00-A_0_2000.jpg',
                '8765120-00-A_1.jpg',
            ],

            valor: 35,

            slug: "women_small_wordmark_short_sleeve_v-neck_tee",


            titulo: "Women's Small Wordmark Short Sleeve V-Neck Tee",
            disponible: true
        },
        {
            descripcion: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            Imagenes: [
                '8765115-00-A_0_2000.jpg',
                '8765115-00-A_1.jpg',
            ],

            valor: 35,

            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",


            titulo: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
            disponible: true
        },
        {
            descripcion: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            Imagenes: [
                '1549275-00-A_0_2000.jpg',
                '1549275-00-A_1.jpg',
            ],

            valor: 35,

            slug: "women_plaid_mode_tee",


            titulo: "Women's Plaid Mode Tee",
            disponible: true
        },
        {
            descripcion: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            Imagenes: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],

            valor: 130,

            slug: "women_powerwall_tee",


            titulo: "Women’s Powerwall Tee",
            disponible: true
        },
        {
            descripcion: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
            Imagenes: [
                '5645680-00-A_0_2000.jpg',
                '5645680-00-A_3.jpg',
            ],

            valor: 90,

            slug: "women_corp_jacket",


            titulo: "Women's Corp Jacket",
            disponible: true
        },
        {
            descripcion: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            Imagenes: [
                '1740270-00-A_0_2000.jpg',
                '1740270-00-A_1.jpg',
            ],

            valor: 100,

            slug: "women_raven_joggers",


            titulo: "Women's Raven Joggers",
            disponible: true
        },
        {
            descripcion: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            Imagenes: [
                '1742694-00-A_1_2000.jpg',
                '1742694-00-A_3.jpg',
            ],

            valor: 30,

            slug: "kids_cybertruck_long_sleeve_tee",


            titulo: "Kids Cybertruck Long Sleeve Tee",
            disponible: true
        },
        {
            descripcion: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            Imagenes: [
                '8529312-00-A_0_2000.jpg',
                '8529312-00-A_1.jpg',
            ],

            valor: 25,

            slug: "kids_scribble_t_logo_tee",


            titulo: "Kids Scribble T Logo Tee",
            disponible: true
        },
        {
            descripcion: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            Imagenes: [
                '8529342-00-A_0_2000.jpg',
                '8529342-00-A_1.jpg',
            ],

            valor: 25,

            slug: "kids_cybertruck_tee",


            titulo: "Kids Cybertruck Tee",
            disponible: true
        },
        {
            descripcion: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            Imagenes: [
                '8529354-00-A_0_2000.jpg',
                '8529354-00-A_1.jpg',
            ],

            valor: 30,

            slug: "kids_racing_stripe_tee",


            titulo: "Kids Racing Stripe Tee",
            disponible: true
        },
        {
            descripcion: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            Imagenes: [
                '7652465-00-A_0_2000.jpg',
                '7652465-00-A_1.jpg',
            ],

            valor: 30,

            slug: "kids_3d_t_logo_tee",


            titulo: "Kids 3D T Logo Tee",
            disponible: true
        },
        {
            descripcion: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
            Imagenes: [
                '100042307_0_2000.jpg',
                '100042307_alt_2000.jpg',
            ],

            valor: 30,

            slug: "kids_checkered_tee",


            titulo: "Kids Checkered Tee",
            disponible: true
        },
        {
            descripcion: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            Imagenes: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],

            valor: 25,

            slug: "made_on_earth_by_humans_onesie",


            titulo: "Made on Earth by Humans Onesie",
            disponible: true
        },
        {
            descripcion: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            Imagenes: [
                '8529387-00-A_0_2000.jpg',
                '8529387-00-A_1.jpg',
            ],

            valor: 30,

            slug: "scribble_t_logo_onesie",


            titulo: "Scribble T Logo Onesie",
            disponible: true
        },
        {
            descripcion: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            Imagenes: [
                '1473834-00-A_2_2000.jpg',
                '1473829-00-A_2_2000.jpg',
            ],

            valor: 30,

            slug: "zero_emissions_(almost)_onesie",


            titulo: "Zero Emissions (Almost) Onesie",
            disponible: true
        },
        {
            descripcion: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            Imagenes: [
                '1742702-00-A_0_2000.jpg',
                '1742702-00-A_1.jpg',
            ],

            valor: 65,

            slug: "kids_cyberquad_bomber_jacket",


            titulo: "Kids Cyberquad Bomber Jacket",
            disponible: true
        },
        {
            descripcion: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            Imagenes: [
                '1506211-00-A_0_2000.jpg',
                '1506211-00-A_1_2000.jpg',
            ],

            valor: 30,

            slug: "kids_corp_jacket",


            titulo: "Kids Corp Jacket",
            disponible: true
        },
    ]
}