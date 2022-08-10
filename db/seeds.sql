INSERT INTO parties (name, description)
VALUES
    ('JS Juggernauts', 'The JS Juggernauts eat, breathe, and sleep JavaScript. They can build everything you could ever want in JS, including a new kitchen sink.'),
    ('Heroes of HTML', 'Want to see a mock-up turn into an actual webpage in a matter of minutes? Well, the Heroes of HTML can get it done in a matter of seconds.'),
    ('Git Gurus', 'Need to resolve a merge conflict? The Git Gurus have your back. Nobody knows Git like these folks do.');

INSERT INTO candidates (first_name, last_name, party_id, industry_connected)
VALUES
    ('Sharon', 'Marsh', 1, 1),
    ('Alex', 'Mason', 1, 1),
    ('Randy', 'Randerson', 1, 0),
    ('Jim', 'Milton', 1, 1),
    ('Deandra', 'Reynolds', 2, 0),
    ('Loba', 'Andrade', 2, 1),
    ('Arthur', 'Morgan', 2, 0),
    ('John', 'Price', 2, 1),
    ('Lois', 'Griffin', NULL, 1),
    ('Cyril', 'Figgus', 3, 0),
    ('Leslie', 'Knope', 3, 1),
    ('Nandor', 'Relentless', 3, 0),
    ('Sadie', 'Adler', 3, 1),
    ('Marge', 'Simpson', 3, 1);
