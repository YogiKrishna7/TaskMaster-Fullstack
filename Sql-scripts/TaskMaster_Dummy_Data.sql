CREATE DATABASE IF NOT EXISTS taskmaster;
USE taskmaster;

CREATE TABLE IF NOT EXISTS tasks (
    task_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_description TEXT,
    task_status VARCHAR(50) NOT NULL
);

INSERT INTO tasks (task_id, task_name, task_description, task_status) VALUES
(101, 'Make a video game', 'Description of the game', 'backlog'),
(102, 'Make a web page', 'Description of the page', 'in-progress'),
(103, 'Make a stand alone app', 'Description of the app', 'review'),
(104, 'Make a AI tool', 'Description of the tool', 'backlog'),
(105, 'Make a static page', 'Description of the page', 'done'),
(106, 'Develop mobile app', 'Create a mobile app for Android and iOS', 'in-progress'),
(107, 'Design UI mockups', 'Design user interface mockups for the new project', 'backlog'),
(108, 'Write documentation', 'Prepare detailed documentation for the API', 'review'),
(109, 'Set up database', 'Configure and optimize the project database', 'done'),
(110, 'Implement authentication', 'Add user login and authentication features', 'in-progress'),

(111, 'Create REST API', 'Develop RESTful endpoints for the app', 'backlog'),
(112, 'Fix login bug', 'Resolve issue with user login failing', 'in-progress'),
(113, 'Optimize queries', 'Improve database query performance', 'review'),
(114, 'Setup CI/CD pipeline', 'Automate build and deployment', 'backlog'),
(115, 'Conduct user testing', 'Gather feedback from beta users', 'done'),
(116, 'Integrate payment gateway', 'Add payment processing feature', 'in-progress'),
(117, 'Refactor codebase', 'Clean up and optimize code', 'backlog'),
(118, 'Improve accessibility', 'Make app accessible to all users', 'review'),
(119, 'Add logging', 'Implement detailed logging', 'done'),
(120, 'Design marketing site', 'Create landing page for marketing', 'in-progress'),

(121, 'Research new tech', 'Explore new technologies for future use', 'backlog'),
(122, 'Setup monitoring', 'Add monitoring tools for app health', 'review'),
(123, 'Fix UI glitches', 'Resolve minor UI bugs', 'done'),
(124, 'Write unit tests', 'Increase test coverage', 'in-progress'),
(125, 'Create user guide', 'Prepare user manual and help docs', 'backlog'),
(126, 'Implement search', 'Add search functionality', 'review'),
(127, 'Improve security', 'Enhance app security features', 'done'),
(128, 'Update dependencies', 'Upgrade project dependencies', 'in-progress'),
(129, 'Add multi-language support', 'Support multiple languages', 'backlog'),
(130, 'Optimize images', 'Reduce image sizes for faster loading', 'review'),

(131, 'Setup email service', 'Configure email notifications', 'done'),
(132, 'Create admin panel', 'Build admin dashboard', 'in-progress'),
(133, 'Fix logout issue', 'Resolve logout problems', 'backlog'),
(134, 'Improve UX flow', 'Enhance user experience', 'review'),
(135, 'Add push notifications', 'Implement push notifications', 'done'),
(136, 'Configure caching', 'Add caching for better performance', 'in-progress'),
(137, 'Write integration tests', 'Test integration points', 'backlog'),
(138, 'Create onboarding tutorial', 'Help new users get started', 'review'),
(139, 'Implement dark mode', 'Add dark theme support', 'done'),
(140, 'Fix responsiveness', 'Make app responsive on all devices', 'in-progress'),

(141, 'Setup analytics', 'Track user behavior', 'backlog'),
(142, 'Add social login', 'Allow login via social media', 'review'),
(143, 'Improve error handling', 'Better error messages and recovery', 'done'),
(144, 'Create API documentation', 'Document all API endpoints', 'in-progress'),
(145, 'Implement file upload', 'Allow users to upload files', 'backlog'),
(146, 'Fix notification bugs', 'Resolve notification delivery issues', 'review'),
(147, 'Add user roles', 'Differentiate user permissions', 'done'),
(148, 'Optimize startup time', 'Reduce app startup latency', 'in-progress'),
(149, 'Create backup system', 'Automate database backups', 'backlog'),
(150, 'Improve search ranking', 'Enhance search result relevance', 'review');
