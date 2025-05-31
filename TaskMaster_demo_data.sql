use taskmaster;
SELECT * FROM taskmaster.tasks;
insert into tasks(task_id, task_name, task_description, task_status)
values
(101, "Make a video game", "Description of the game", "backlog"),
(102, "Make a web page", "Description of the page", "in-progress"),
(103, "Make a stand alone app", "Description of the app", "review"),
(104, "Make a AI tool", "Description of the tool", "backlog"),
(105, "Make a static page", "Description of the page", "done"),
(106, "Develop mobile app", "Create a mobile app for Android and iOS", "in-progress"),
(107, "Design UI mockups", "Design user interface mockups for the new project", "backlog"),
(108, "Write documentation", "Prepare detailed documentation for the API", "review"),
(109, "Set up database", "Configure and optimize the project database", "done"),
(110, "Implement authentication", "Add user login and authentication features", "in-progress");

SELECT * FROM tasks;