CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    profile_image_url TEXT
);

CREATE TABLE trips(
    id INT PRIMARY KEY AUTO_INCREMENT,
    destination VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    trip_image_url TEXT,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE number_days(
    id INT PRIMARY KEY AUTO_INCREMENT,
    day VARCHAR(255) NOT NULL,
    trip_id INT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

CREATE TABLE destinations(
    id INT PRIMARY KEY AUTO_INCREMENT,
    place_to_visit VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    day_id INT NOT NULL,
    FOREIGN KEY (day_id) REFERENCES number_days(id) ON DELETE CASCADE
    
);

CREATE TABLE destination_images(
    destination_id INT NOT NULL,
    image_url TEXT NOT NULL,
    FOREIGN KEY (destination_id) REFERENCES destinations(id)
);

CREATE TABLE articles(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

CREATE TABLE places_to_visit(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    trip_id INT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

CREATE TABLE travel_mates(
    trip_id INT NOT NULL,
    FOREIGN KEY(trip_id) REFERENCES trips(id),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
