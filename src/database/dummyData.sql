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
        'australia_trip.jpg',
        1
    ),
    (
        'Switzerland',
        '2023-08-15',
        '2023-08-21',
        'switzerland_trip.jpg',
        1
    )
    -- ,
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
        'greece_trip.jpg',
        2
    ),
    (
        'Italy',
        '2023-09-10',
        '2023-09-18',
        'italy_trip.jpg',
        2
    ),
    (
        'Kenya',
        '2023-10-05',
        '2023-10-12',
        'kenya_trip.jpg',
        2
    )
    -- ,
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
    articles (name, description, image_url)
VALUES
    (
        'Exploring the Beach Paradise',
        'Discover the breathtaking beauty of sandy beaches and crystal-clear waters. Unwind and relax in the lap of nature.',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    ),
    (
        'Hiking the Majestic Mountains',
        'Embark on an adventure to conquer towering peaks, witness stunning vistas, and breathe in the crisp mountain air.',
        'mountains.jpg'
    ),
    (
        'Cultural Delights of Ancient Cities',
        'Immerse yourself in the rich history and traditions of ancient cities. Explore architectural wonders and vibrant local cultures.',
        'city.jpg'
    ),
    (
        'Sailing the Open Seas',
        'Set sail on a journey across vast oceans. Experience the freedom of the open waters and watch mesmerizing sunsets.',
        'sailing.jpg'
    ),
    (
        'Foodie Expedition Through Markets',
        'Indulge your taste buds in a culinary journey through bustling markets. Savor exotic flavors and local delicacies.',
        'food.jpg'
    ),
    (
        'Wildlife Safari Adventures',
        'Encounter the wild side of nature as you venture into jungles and savannas. Observe majestic creatures in their natural habitats.',
        'safari.jpg'
    ),
    (
        'Tranquil Retreat in Countryside',
        'Escape the hustle and bustle by retreating to serene countryside landscapes. Enjoy peace and solitude in cozy lodges.',
        'countryside.jpg'
    ),
    (
        'Urban Exploration: Neon Nights',
        'Dive into the vibrant energy of urban life. Explore bustling streets, enjoy dazzling nightlife, and capture cityscapes.',
        'urban.jpg'
    ),
    (
        'Thrills and Chills of Winter Escapes',
        'Embrace the winter wonderland with thrilling activities like skiing, snowboarding, and cozy evenings by the fire.',
        'winter.jpg'
    ),
    (
        'Journey to Ancient Temples',
        'Uncover the mysteries of ancient temples and religious sites. Marvel at intricate architecture and spiritual history.',
        'temple.jpg'
    );