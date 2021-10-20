DROP TABLE IF EXISTS `quiz-manager-test`.`users`;
CREATE TABLE `quiz-manager-test`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(45) NOT NULL DEFAULT 'basic',
  PRIMARY KEY (`id`));

DROP TABLE IF EXISTS `quiz-manager-test`.`quizzes`;
CREATE TABLE `quiz-manager-test`.`quizzes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `quiz-manager-test`.`quizzes`
(`id`,
`name`)
VALUES
(1,
"Animals");

DROP TABLE IF EXISTS `quiz-manager-test`.`questions`;
CREATE TABLE `quiz-manager-test`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `quizid` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`quizid`) REFERENCES `quiz-manager-test`.`quizzes` (`id`));

INSERT INTO `quiz-manager-test`.`questions`
(`id`,
`question`,
`quizid`)
VALUES
(1, "What is the slowest animal of the world?", 1),
(2, "A snail can sleep for how many years?", 1),
(3, "Where is the heart of the shrimp situated?", 1);

DROP TABLE IF EXISTS `quiz-manager-test`.`answers`;
CREATE TABLE `quiz-manager-test`.`answers` (
  `id` INT NOT NULL,
  `answer` VARCHAR(255) NOT NULL,
  `correct` BOOLEAN,
  `questionid` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`questionid`) REFERENCES `quiz-manager-test`.`questions` (`id`));

INSERT INTO `quiz-manager-test`.`answers`
(`id`,
`answer`,
`correct`,
`questionid`)
VALUES
(1, "sloth", true, 1),
(2, "snail", false, 1),
(3, "starfish", false, 1);