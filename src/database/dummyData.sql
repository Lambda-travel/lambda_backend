-- Insert sample user data into the users table
INSERT INTO
    users (
        first_name,
        last_name,
        user_name,
        email,
        hashed_password,
        profile_image_url
    )
VALUES
    (
        'John',
        'Doe',
        'johndoe',
        'john@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$Fh+sT9B7X7EryWfyJFUnrA$u/UHRfr0ShkwKyXypk6K6r64m2aI6plGSl1O+aM5JrM',
        'profile1.jpg'
    ),
    (
        'Jane',
        'Smith',
        'janesmith',
        'jane@example.com',
        '$argon2id$v=19$m=65536,t=5,p=1$qLp2GoUEEsfZDxE4xjTVTg$Nm98xg5p5CJ/eiQWIfdEgm8vNCASvPcBOwP/3HJtQIw',
        'profile2.jpg'
    );

-- For the user with email john@example.com:
-- Email: john@example.com
-- Password: user1password
-- For the user with email jane@example.com:
-- Email: jane@example.com
-- Password: user2password 
-- Insert sample trip data for user with id 1
INSERT INTO
    trips (
        destination,
        start_date,
        end_date,
        trip_image_url,
        user_id
    )
VALUES
    (
        'Australia',
        '2023-09-01',
        '2023-09-07',
        'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1600',
        1
    ),
    (
        'Switzerland',
        '2023-08-15',
        '2023-08-21',
        'https://images.pexels.com/photos/1291766/pexels-photo-1291766.jpeg?auto=compress&cs=tinysrgb&w=1600',
        1
    ) -- ,
;

-- (
--     'Japan',
--     '2023-07-10',
--     '2023-07-15',
--     'japan_trip.jpg',
--     1
-- );
-- Insert sample trip data for user with id 2
INSERT INTO
    trips (
        destination,
        start_date,
        end_date,
        trip_image_url,
        user_id
    )
VALUES
    (
        'Greece',
        '2023-08-25',
        '2023-08-30',
        'https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1600',
        2
    ),
    (
        'Italy',
        '2023-09-10',
        '2023-09-18',
        'https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1600',
        2
    ),
    (
        'Kenya',
        '2023-10-05',
        '2023-10-12',
        'https://images.pexels.com/photos/9833515/pexels-photo-9833515.jpeg?auto=compress&cs=tinysrgb&w=1600',
        2
    ) -- ,
;

-- (
--     'USA',
--     '2023-07-20',
--     '2023-07-25',
--     'usa_trip.jpg',
--     2
-- ),
-- (
--     'Canada',
--     '2023-12-01',
--     '2023-12-10',
--     'canada_trip.jpg',
--     2
-- ),
-- (
--     'India',
--     '2023-11-15',
--     '2023-11-20',
--     'india_trip.jpg',
--     2
-- );
-- Function to generate date range
CREATE FUNCTION generate_date_range(
    start_date DATE,
    end_date DATE,
    trip_id INT
) RETURNS INT READS SQL DATA BEGIN WHILE start_date <= end_date DO
INSERT INTO
    number_days (day, trip_id)
VALUES
    (start_date, trip_id);

SET
    start_date = DATE_ADD(start_date, INTERVAL 1 DAY);

END WHILE;

RETURN 1;

END;

-- Call the function for each trip
SELECT
    generate_date_range('2023-09-01', '2023-09-07', 1);

SELECT
    generate_date_range('2023-08-15', '2023-08-21', 2);

-- SELECT
--     generate_date_range('2023-07-10', '2023-07-15', 3);
-- SELECT
--     generate_date_range('2023-08-25', '2023-08-30', 4);
-- SELECT
--     generate_date_range('2023-09-10', '2023-09-18', 5);
-- SELECT
--     generate_date_range('2023-10-05', '2023-10-12', 6);
SELECT
    generate_date_range('2023-08-25', '2023-08-30', 3);

SELECT
    generate_date_range('2023-09-10', '2023-09-18', 4);

SELECT
    generate_date_range('2023-10-05', '2023-10-12', 5);

-- SELECT
--     generate_date_range('2023-07-20', '2023-07-25', 7);
-- SELECT
--     generate_date_range('2023-12-01', '2023-12-10', 8);
-- SELECT
--     generate_date_range('2023-11-15', '2023-11-20', 9);
-- Drop the function
DROP FUNCTION generate_date_range;

-- Manually generate date range
-- INSERT INTO number_days (day, trip_id) VALUES (start_date, trip_id);
-- Insert sample destinations for trip with id 1 (7-day trip)
-- Day 1
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Sydney Opera House',
        'Sydney, Australia',
        'Iconic architectural masterpiece and a symbol of Australia.',
        1
    );

-- Day 2
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Bondi Beach',
        'Sydney, Australia',
        'Famous beach known for its golden sands and excellent surf conditions.',
        2
    );

-- Day 3
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Blue Mountains National Park',
        'New South Wales, Australia',
        'Spectacular mountainous region with scenic lookouts and trails.',
        3
    );

-- Day 4
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Taronga Zoo',
        'Sydney, Australia',
        'Renowned zoo with a diverse collection of animals and stunning views of the harbor.',
        4
    );

-- Day 5
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Royal Botanic Garden',
        'Sydney, Australia',
        'Lush garden featuring a wide variety of plants and a serene environment.',
        5
    );

-- Day 6
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Darling Harbour',
        'Sydney, Australia',
        'Vibrant waterfront area with attractions, shops, and entertainment.',
        6
    );

-- Day 7
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Circular Quay',
        'Sydney, Australia',
        'Transport hub with ferries, attractions, and stunning views of the harbor.',
        7
    );

-- Insert sample destinations for trip with id 2 (7-day trip)
-- Day 1
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Jungfraujoch',
        'Swiss Alps, Switzerland',
        'Highest railway station in Europe, offering stunning Alpine views.',
        8
    );

-- Day 2
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Lake Geneva',
        'Geneva, Switzerland',
        'Picturesque lake surrounded by mountains and vibrant cities.',
        9
    );

-- Day 3
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Lucerne',
        'Central Switzerland',
        'Charming medieval city with a beautiful lake and historic architecture.',
        10
    );

-- Day 4
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Interlaken',
        'Swiss Alps, Switzerland',
        'Adventure sports hub nestled between two stunning lakes.',
        11
    );

-- Day 5
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Zurich',
        'Zurich, Switzerland',
        'Economic and cultural hub with a picturesque old town and vibrant arts scene.',
        12
    );

-- Day 6
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Bern',
        'Bern, Switzerland',
        'Capital city with well-preserved medieval architecture and a relaxed atmosphere.',
        13
    );

-- Day 7
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Chateau de Chillon',
        'Montreux, Switzerland',
        'Historic castle on Lake Geneva with panoramic mountain views.',
        14
    );

-- Insert sample destinations for trip with id 4 (6-day trip)
-- Day 1
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Sailing in Santorini',
        'Santorini, Greece',
        'Experience the stunning views and crystal-clear waters of the Aegean Sea.',
        15
    );

-- Day 2
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Acropolis of Athens',
        'Athens, Greece',
        'Ancient citadel featuring iconic historical structures and rich history.',
        16
    );

-- Day 3
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Delphi',
        'Central Greece',
        'Archaeological site known for the Oracle of Delphi and stunning mountain views.',
        17
    );

-- Day 4
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Oia Sunset',
        'Santorini, Greece',
        'Witness the breathtaking sunset views in the charming village of Oia.',
        18
    );

-- Day 5
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Mykonos Beaches',
        'Mykonos, Greece',
        'Explore the beautiful beaches and vibrant nightlife of Mykonos.',
        19
    );

-- Day 6
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Palace of the Grand Master',
        'Rhodes, Greece',
        'Impressive medieval palace showcasing Gothic architecture and history.',
        20
    );

-- Insert sample destinations for trip with id 5 (9-day trip)
-- Day 1
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Rome Colosseum',
        'Rome, Italy',
        'Iconic ancient amphitheater with a rich history and grand architecture.',
        21
    );

-- Day 2
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Vatican Museums',
        'Vatican City',
        'Home to impressive art collections, including the Sistine Chapel.',
        22
    );

-- Day 3
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Florence Duomo',
        'Florence, Italy',
        'Stunning cathedral with a famous dome and beautiful facade.',
        23
    );

-- Day 4
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Leaning Tower of Pisa',
        'Pisa, Italy',
        'Iconic leaning tower and historic cathedral in Piazza dei Miracoli.',
        24
    );

-- Day 5
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Cinque Terre',
        'Liguria, Italy',
        'Colorful seaside villages and scenic coastal trails along the Italian Riviera.',
        25
    );

-- Day 6
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Venice Canals',
        'Venice, Italy',
        'Picturesque city of canals, historic architecture, and romantic atmosphere.',
        26
    );

-- Day 7
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Verona Arena',
        'Verona, Italy',
        'Well-preserved Roman amphitheater with a rich history and cultural events.',
        27
    );

-- Day 8
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Lake Como',
        'Lombardy, Italy',
        'Stunning lake surrounded by charming towns and beautiful landscapes.',
        28
    );

-- Day 9
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Milan Cathedral',
        'Milan, Italy',
        'Impressive Gothic cathedral known for its intricate facade and spires.',
        29
    );

-- Insert sample destinations for trip with id 6 (8-day trip)
-- Day 1
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Maasai Mara National Reserve',
        'Narok, Kenya',
        'Famous wildlife reserve known for the Great Migration and diverse wildlife.',
        30
    );

-- Day 2
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Amboseli National Park',
        'Kajiado, Kenya',
        'Stunning views of Mount Kilimanjaro and a wide variety of wildlife.',
        31
    );

-- Day 3
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Nairobi National Park',
        'Nairobi, Kenya',
        'Unique wildlife park located just outside Nairobi city.',
        32
    );

-- Day 4
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Lake Nakuru',
        'Nakuru, Kenya',
        'Famous for its flamingos and diverse bird species.',
        33
    );

-- Day 5
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Tsavo National Park',
        'Taita-Taveta, Kenya',
        'Largest national park in Kenya, known for its elephants.',
        34
    );

-- Day 6
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Mombasa Beaches',
        'Mombasa, Kenya',
        'Relax on the beautiful beaches along the Indian Ocean.',
        35
    );

-- Day 7
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Haller Park',
        'Mombasa, Kenya',
        'Former limestone quarry transformed into a wildlife sanctuary.',
        36
    );

-- Day 8
INSERT INTO
    destinations (place_to_visit, location, description, day_id)
VALUES
    (
        'Diani Beach',
        'Diani, Kenya',
        'Stunning beach destination with clear blue waters and water sports.',
        37
    );

-- Insert highlights for trip with id 1
INSERT INTO
    places_to_visit (name, description, trip_id)
VALUES
    (
        'Sydney Opera House',
        'Iconic architectural masterpiece and a symbol of Australia.',
        1
    ),
    (
        'Bondi Beach',
        'Famous beach known for its golden sands and excellent surf conditions.',
        1
    );

-- Insert highlights for trip with id 2
INSERT INTO
    places_to_visit (name, description, trip_id)
VALUES
    (
        'Jungfraujoch',
        'Highest railway station in Europe, offering stunning Alpine views.',
        2
    ),
    (
        'Lake Geneva',
        'Picturesque lake surrounded by mountains and vibrant cities.',
        2
    );

-- Insert highlights for trip with id 4
INSERT INTO
    places_to_visit (name, description, trip_id)
VALUES
    (
        'Sailing in Santorini',
        'Experience the stunning views and crystal-clear waters of the Aegean Sea.',
        4
    ),
    (
        'Acropolis of Athens',
        'Ancient citadel featuring iconic historical structures and rich history.',
        4
    );

-- Insert entries for users sharing a trip
INSERT INTO
    travel_mates (trip_id, user_id)
VALUES
    (1, 1),
    -- User 1 and Trip 1
    (1, 2),
    -- User 2 and Trip 1
    (2, 2),
    -- User 2 and Trip 2
    (4, 1),
    -- User 1 and Trip 4
    (4, 2);

-- User 2 and Trip 4;
-- Insert sample data into the articles table
INSERT INTO
    articles (name, description, image_url, tips)
VALUES
    (
        'Exploring the Beach Paradise',
        'Discover the breathtaking beauty of sandy beaches and crystal-clear waters. Unwind and relax in the lap of nature.',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        '   - Travel Tip 1: Pack Light and Smart
     When exploring beach paradises, packing light is key. You will want to keep your luggage easy to manage so you can move freely
        from
            one beautiful beach to the next.- Travel Tip 2: Protect Your Skin In sunny beach destinations,
            dont forget sunscreen, hats, and sunglasses to protect yourself from harmful UV rays.

   - Travel Tip 3: Respect Marine Life
     While exploring beach paradises, be mindful of marine life. Avoid touching or disturbing coral reefs and other fragile ecosystems.

   - Travel Tip 4: Carry Reusable Water Bottle
     Stay hydrated and reduce plastic waste by carrying a reusable water bottle. Many beach destinations have water refill stations.

   - Travel Tip 5: Beach Safety Awareness
     Familiarize yourself with local beach safety guidelines, such as the meaning of flag colors, to ensure a safe and enjoyable beach experience.'
    ),
    (
        'Hiking the Majestic Mountains',
        'Embark on an adventure to conquer towering peaks, witness stunning vistas, and breathe in the crisp mountain air.',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        '- Travel Tip 1: Stay Hydrated Hiking in majestic mountains can be physically demanding.Ensure you stay well - hydrated to maintain your energy levels during your mountainous adventures.- Travel Tip 2: Dress in Layers Mountains can have rapidly changing weather.Dress in layers,
        including moisture - wicking clothing
        and a waterproof outer layer,
        to stay comfortable.- Travel Tip 3: Share Your Itinerary Before embarking on mountain hikes,
        share your itinerary with someone you trust
        and establish regular check - in points for safety.- Travel Tip 4: Carry a Trail Map Always carry a detailed trail map
        and a compass
        or GPS device to help you stay on course
        and prevent getting lost.- Travel Tip 5: Emergency Essentials Pack essential items like a whistle,
        emergency blanket,
        and a basic first - aid kit for unexpected situations during mountain hikes.'
    ),
    (
        'Cultural Delights of Ancient Cities',
        'Immerse yourself in the rich history and traditions of ancient cities. Explore architectural wonders and vibrant local cultures.',
        'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        '- Travel Tip 1: Research Local Culture
     Before visiting ancient cities, research the local culture and customs to show respect and fully appreciate the historical significance of these destinations.

   - Travel Tip 2: Visit During Off-Peak Hours
     To avoid crowds and enjoy a more intimate experience, plan your visits to ancient sites during off-peak hours or seasons.

   - Travel Tip 3: Learn Historical Context
     Gain a deeper appreciation for ancient cities by learning about their historical context. Consider hiring a local guide to provide insights and stories.

   - Travel Tip 4: Respect Photography Rules
     *Some historical sites may have specific rules regarding photography. Respect these rules to preserve the sites for future generations.

   - Travel Tip 5: Local Etiquette
     Learn about local etiquette, such as appropriate greetings and gestures, to interact respectfully with residents and other tourists.'
    ),
    (
        ' Sailing the Open Seas ',
        '
        Set
            sail on a journey across vast oceans.Experience the freedom of the open waters
            and watch mesmerizing sunsets.',
        'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        ' - Travel Tip 1: Use Local Transportation
            When sailing the open seas,
            consider using local water transport options to explore coastal towns
            and islands,
            allowing you to access hidden gems.- Travel Tip 2: Check Weather Forecasts Before setting sail,
            check weather forecasts
            and tidal patterns to ensure safe
            and enjoyable sailing conditions.- Travel Tip 3: Learn Basic Nautical Terms Familiarize yourself with basic nautical terms to better communicate with the crew
            and navigate the open seas.- Travel Tip 4: Respect Local Customs
            When docking in different ports,
            respect the local customs
            and traditions.Research
            and follow any cultural etiquette specific to maritime regions.- Travel Tip 5: Boating Safety Prioritize safety by wearing life jackets
            when required
            and participating in safety briefings provided by boat operators.'
    ),
    (
        'Foodie Expedition Through Markets',
        'Indulge your taste buds in a culinary journey through bustling markets. Savor exotic flavors and local delicacies.',
        'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2852&q=80',
        '   - Travel Tip 1: Try Local Cuisine
     Exploring local markets is a culinary adventure. Be sure to try the local dishes and street food to fully immerse yourself in the foodie culture.

   - Travel Tip 2: Practice Safe Food Handling
     When indulging in street food, make sure the vendor follows proper food handling and hygiene practices to avoid food-related illnesses.

   - Travel Tip 3: Carry Reusable Utensils
     Reduce plastic waste by carrying your reusable utensils and water bottle to use during your foodie expedition.

   - Travel Tip 4: Sample Street Food Safely
     While trying street food, ensure it is cooked and served hot to minimize the risk of foodborne illnesses.

   - Travel Tip 5: Allergy Awareness
     If you have food allergies, learn how to communicate your allergies in the local language and carry allergy medication or an allergy card to show vendors.'
    ),
    (
        ' Wildlife Safari Adventures ',
        ' Encounter the wild side of nature as you venture into jungles
        and savannas.Observe majestic creatures in their natural habitats.',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FmYXJpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        ' - Travel Tip 1: Be Mindful of Safety In wildlife safari destinations,
        always prioritize safety.Respect wildlife
        and follow guidelines to ensure a safe
        and responsible wildlife experience.- Travel Tip 2: Binoculars
        and Camera Gear Pack binoculars
        and a good - quality camera with a zoom lens to capture wildlife encounters
        from
            a distance.- Travel Tip 3: Respect Quiet Zones During safaris,
            maintain silence in designated “ quiet zones ” to enhance the chances of spotting elusive animals in their natural habitat.- Travel Tip 4: Use Natural Colors Wear neutral,
            earth - toned clothing to blend into the natural surroundings
            and reduce the chance of startling wildlife.- Travel Tip 5: Stay with Your Guide Always stay with your experienced safari guide,
            and follow their instructions to ensure a safe
            and educational safari experience.'
    ),
    (
        'Tranquil Retreat in Countryside',
        'Escape the hustle and bustle by retreating to serene countryside landscapes. Enjoy peace and solitude in cozy lodges.',
        'https://images.unsplash.com/photo-1540844790881-4db304dd1831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
        '   - Travel Tip 1: Embrace Spontaneity
     Countryside retreats are perfect for unplugging and embracing spontaneity. Allow yourself to relax and let the peaceful surroundings guide your activities.

   - Travel Tip 2: Hiking and Nature Walks
     Take advantage of the tranquil surroundings by going on hikes and nature walks to fully immerse yourself in the countryside experience.

   - Travel Tip 3: Connect with Locals
     Engage with the locals in rural areas to learn about their way of life, traditions, and perhaps even participate in local activities.

   - Travel Tip 4: Responsible Camping
     If camping in the countryside, practice Leave No Trace principles by properly disposing of waste and leaving the environment as you found it.

   - Travel Tip 5: Wildlife Awareness
     Respect local wildlife by observing animals from a distance and not disturbing their habitats.'
    ),
    (
        ' Urban Exploration: Neon Nights ',
        ' Dive into the vibrant energy of urban life.Explore bustling streets,
        enjoy dazzling nightlife,
        and capture cityscapes.',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXJiYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        ' - Travel Tip 1: Learn Basic Phrases In urban destinations,
        knowing a few local phrases can enhance your experience by helping you navigate the city
        and interact with locals.- Travel Tip 2: Public Transportation Apps Use public transportation apps
        or cards for convenient
        and cost - effective urban travel.Its often the quickest way to get around cities.- Travel Tip 3: Explore Beyond Tourist Hotspots Venture beyond the typical tourist areas to discover hidden gems,
        local eateries,
        and a more authentic urban experience.- Travel Tip 4: Nightlife Safety *
        When enjoying the nightlife,
        keep an eye on your drinks,
        stay in well - lit areas,
        and travel in groups to ensure your safety.- Travel Tip 5: Respect Local Noise Regulations * Be aware of local noise regulations,
        especially in residential areas,
        to avoid disturbances
        and ensure a harmonious urban exploration experience.'
    ),
    (
        'Thrills and Chills of Winter Escapes',
        'Embrace the winter wonderland with thrilling activities like skiing, snowboarding, and cozy evenings by the fire.',
        'https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80',
        '   - Travel Tip 1: Secure Important Documents
     When traveling to winter destinations, its essential to secure your documents. Keep them protected from the elements, such as snow and cold.

   - Travel Tip 2: Dress in Warm Layers
     Pack thermal clothing, including base layers and insulated outerwear, to stay warm and comfortable during winter activities.

   - Travel Tip 3: Book Winter Activities in Advance
     Popular winter activities like skiing and snowboarding often require advance reservations, so plan and book early to secure your spot.

   - Travel Tip 4: Learn Snow Sports Safety
     If you are new to winter sports, consider taking lessons from certified instructors to ensure your safety and enjoyment.

   - Travel Tip 5: Emergency Preparedness
     Carry essentials like a compact snow shovel, ice cleats, and a portable phone charger for winter travel emergencies.'
    ),
    (
        ' Journey to Ancient Temples ',
        ' Uncover the mysteries of ancient temples
        and religious sites.Marvel at intricate architecture
        and spiritual history.',
        'https://images.unsplash.com/photo-1603766806347-54cdf3745953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        ' - Travel Tip 1: Be Mindful of Safety Visiting ancient temples often involves sacred spaces.Show respect,
        and follow local guidelines to maintain the peaceful
        and spiritual atmosphere.- Travel Tip 2: Dress Modestly
        When visiting temples,
        dress modestly by covering your shoulders
        and knees as a sign of respect for the religious
        and cultural significance.- Travel Tip 3: Learn About Rituals Gain a deeper understanding of the temples by learning about the rituals
        and practices observed there.Consider participating in respectful ceremonies
        when allowed.- Travel Tip 4: Photography Etiquette Respect photography rules
        and restrictions within temples.Some may allow photos in certain areas,
        while others prohibit it.- Travel Tip 5: Time Your Visit Visit temples during quieter times of the day,
        such as early mornings,
        to avoid crowds
        and experience a more tranquil atmosphere.'
    );